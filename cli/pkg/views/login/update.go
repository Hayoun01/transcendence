package login

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/Hayoun01/transcendence/pkg/views/toast"
	tea "github.com/charmbracelet/bubbletea"
)

type loginMsg struct {
	Token string
	Err   error
}

func loginCmd(email, password string) tea.Cmd {
	return func() tea.Msg {
		// time.Sleep(time.Second)
		data := map[string]string{
			"email":    email,
			"password": password,
		}
		body, _ := json.Marshal(data)
		req, err := http.NewRequest(http.MethodPost, "http://127.0.0.1:3000/api/v1/auth/login", bytes.NewBuffer(body))
		if err != nil {
			return loginMsg{Err: err}
		}
		req.Header.Set("Content-Type", "application/json")
		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			return loginMsg{Err: err}
		}
		defer resp.Body.Close()
		if resp.StatusCode != http.StatusOK {
			var result struct {
				Error string `json:"error"`
			}
			if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
				return loginMsg{Err: fmt.Errorf("sss")}
			}
			return loginMsg{Err: fmt.Errorf("%s", result.Error)}
		}
		var result struct {
			Token string `json:"accessToken"`
		}
		if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
			return loginMsg{Err: fmt.Errorf("sss")}
		}
		return loginMsg{Token: result.Token, Err: nil}
	}
}

func (m *LoginModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmds []tea.Cmd
	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "ctrl+c":
			return m, tea.Quit
		case "up", "shift+tab":
			m.focusIdx = (m.focusIdx + 2) % 3
		case "down", "tab":
			m.focusIdx = (m.focusIdx + 1) % 3
		case "enter":
			if m.focusIdx == 2 && !m.submitted {
				// if m.username.Value() == "admin" && m.password.Value() == "admin" {
				// 	m.LoggedIn = true
				// }
				m.submitted = true
				cmds = append(cmds, loginCmd(m.email.Value(), m.password.Value()))
			}
		}
		switch m.focusIdx {
		case 0:
			m.email.Focus()
			m.password.Blur()
		case 1:
			m.email.Blur()
			m.password.Focus()
		default:
			m.email.Blur()
			m.password.Blur()
		}
	case tea.WindowSizeMsg:
		m.width = msg.Width
		m.height = msg.Height
	case loginMsg:
		if msg.Err == nil {
			m.Token = msg.Token
			m.LoggedIn = true
			cmds = append(cmds, toast.ShowSuccessToast("Welcome :)"))
		} else {
			cmds = append(cmds, toast.ShowErrorToast(msg.Err.Error()))
			m.submitted = false
		}
	}
	var cmd tea.Cmd
	m.email, cmd = m.email.Update(msg)
	cmds = append(cmds, cmd)
	m.password, cmd = m.password.Update(msg)
	cmds = append(cmds, cmd)
	m.spinner, cmd = m.spinner.Update(msg)
	cmds = append(cmds, cmd)
	return m, tea.Batch(cmds...)
}
