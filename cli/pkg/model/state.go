package model

import (
	"os"

	"github.com/Hayoun01/transcendence/pkg/views/dashboard"
	"github.com/Hayoun01/transcendence/pkg/views/login"
	"github.com/Hayoun01/transcendence/pkg/views/toast"
	tea "github.com/charmbracelet/bubbletea"
	overlay "github.com/rmhubbert/bubbletea-overlay"
)

type model struct {
	currentScreen screen
	loginModel    *login.LoginModel
	dashModel     *dashboard.DashboardModel
	toast         *toast.ToastModel
	overlay       tea.Model
	width, height int
}

func (m model) Init() tea.Cmd {
	switch m.currentScreen {
	case screenLogin:
		return m.loginModel.Init()
	case screenDash:
		sizeMsg := tea.WindowSizeMsg{Width: m.width, Height: m.height}
		var dashCmd tea.Cmd
		var updatedDash tea.Model
		updatedDash, dashCmd = m.dashModel.Update(sizeMsg)
		if lm, ok := updatedDash.(*dashboard.DashboardModel); ok {
			m.dashModel = lm
		}
		return tea.Batch(
			m.dashModel.StartWebSocket(),
			m.dashModel.FetchData(),
			dashCmd,
		)
	default:
		return nil
	}
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmds []tea.Cmd
	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		m.width = msg.Width
		m.height = msg.Height
	}
	switch m.currentScreen {
	case screenLogin:
		var cmd tea.Cmd
		var updatedModel tea.Model
		updatedModel, cmd = m.loginModel.Update(msg)
		if lm, ok := updatedModel.(*login.LoginModel); ok {
			m.loginModel = lm
		}
		if m.loginModel.LoggedIn {
			_ = os.WriteFile("token.txt", []byte(m.loginModel.Token), 0600)
			m.dashModel.SetToken(m.loginModel.Token)
			cmds = append(cmds, m.dashModel.StartWebSocket())
			cmds = append(cmds, m.dashModel.FetchData())
			m.currentScreen = screenDash
			sizeMsg := tea.WindowSizeMsg{Width: m.width, Height: m.height}
			var dashCmd tea.Cmd
			var updatedDash tea.Model
			updatedDash, dashCmd = m.dashModel.Update(sizeMsg)
			if lm, ok := updatedDash.(*dashboard.DashboardModel); ok {
				m.dashModel = lm
			}
			cmds = append(cmds, dashCmd)
		}
		m.overlay = overlay.New(m.toast, m.loginModel, overlay.Right, overlay.Bottom, 0, 0)
		cmds = append(cmds, cmd)
	case screenDash:
		var cmd tea.Cmd
		var updatedModel tea.Model
		updatedModel, cmd = m.dashModel.Update(msg)
		if lm, ok := updatedModel.(*dashboard.DashboardModel); ok {
			m.dashModel = lm
		}
		m.overlay = overlay.New(m.toast, m.dashModel, overlay.Right, overlay.Bottom, 0, 0)
		cmds = append(cmds, cmd)
	}
	var cmd tea.Cmd
	var updatedModel tea.Model
	updatedModel, cmd = m.toast.Update(msg)
	if lm, ok := updatedModel.(*toast.ToastModel); ok {
		m.toast = lm
	}
	cmds = append(cmds, cmd)
	return m, tea.Batch(cmds...)
}

func (m model) View() string {
	var body string
	switch m.currentScreen {
	case screenLogin:
		body = m.overlay.View()
	case screenDash:
		body = m.overlay.View()
	}
	return body
}

func loadToken() string {
	token, err := os.ReadFile("token.txt")
	if err != nil {
		return ""
	}
	return string(token)
}

func InitialModel() model {
	token := loadToken()
	login := login.NewLoginModel()
	dash := dashboard.NewDashboardModel()
	toast := toast.NewToastModel()
	currentScreen := screenLogin
	if token != "" {
		dash.SetToken(token)
		currentScreen = screenDash
	}
	return model{
		currentScreen: currentScreen,
		loginModel:    login,
		dashModel:     dash,
		toast:         toast,
		overlay:       overlay.New(toast, login, overlay.Right, overlay.Bottom, 0, 0),
	}
}
