package login

import (
	"github.com/charmbracelet/bubbles/spinner"
	"github.com/charmbracelet/bubbles/textinput"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

type LoginModel struct {
	email         textinput.Model
	password      textinput.Model
	spinner       spinner.Model
	focusIdx      int
	LoggedIn      bool
	submitted     bool
	width, height int
	Token         string
}

var (
	inputStyle = lipgloss.NewStyle().
			Border(lipgloss.RoundedBorder()).
			BorderForeground(lipgloss.Color("63"))
	cardStyle = lipgloss.NewStyle().
			Border(lipgloss.RoundedBorder()).
			BorderForeground(lipgloss.Color("44")).
			Padding(1, 2).
			Align(lipgloss.Center, lipgloss.Top)
	btnStyle = lipgloss.NewStyle().
			Border(lipgloss.RoundedBorder()).
			BorderForeground(lipgloss.Color("44")).
			Padding(0, 3).
			Bold(true)
)

func NewLoginModel() *LoginModel {
	u := textinput.New()
	u.Placeholder = "Email"
	u.Focus()
	u.Width = 32
	u.CharLimit = 32
	u.Prompt = "👤 "
	p := textinput.New()
	p.Placeholder = "Password"
	p.Width = 32
	p.CharLimit = 32
	p.EchoMode = textinput.EchoPassword
	p.EchoCharacter = '•'
	p.Prompt = "🔑 "
	s := spinner.New()
	s.Spinner = spinner.Jump
	s.Style = lipgloss.NewStyle().Foreground(lipgloss.Color("205"))
	return &LoginModel{
		email:     u,
		password:  p,
		spinner:   s,
		focusIdx:  0,
		LoggedIn:  false,
		submitted: false,
	}
}

func (m *LoginModel) Init() tea.Cmd {
	return tea.Batch(m.spinner.Tick, textinput.Blink)
}
