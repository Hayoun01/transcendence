package login

import (
	"fmt"

	"github.com/charmbracelet/lipgloss"
)

func (m *LoginModel) View() string {
	username := inputStyle.Render(m.email.View())
	password := inputStyle.Render(m.password.View())

	buttonStyle := btnStyle
	if m.focusIdx == 2 && !m.submitted {
		buttonStyle = buttonStyle.
			BorderForeground(lipgloss.Color("204")).
			Foreground(lipgloss.Color("204"))
	}
	submit := buttonStyle.Render("Login")
	if m.submitted {
		submit = buttonStyle.Render(fmt.Sprintf("  %s  ", m.spinner.View()))
	}

	inputs := lipgloss.JoinVertical(lipgloss.Center, username, password, submit)
	card := cardStyle.Render(inputs)
	return lipgloss.Place(m.width, m.height, lipgloss.Center, lipgloss.Center, card)
}
