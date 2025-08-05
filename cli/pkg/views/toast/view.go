package toast

import (
	"github.com/charmbracelet/lipgloss"
)

func (m *ToastModel) View() string {
	var cards []string
	for _, toast := range m.toasts {
		switch toast.Type {
		case toastError:
			cards = append(cards, errorStyle.Render("✖  "+toast.Message))
		case toastSuccess:
			cards = append(cards, successStyle.Render("✔ "+toast.Message))
		case toastInfo:
			cards = append(cards, infoStyle.Render("🛈 "+toast.Message))
		case toastWarning:
			cards = append(cards, warnStyle.Render("⚠︎ "+toast.Message))
		}
	}
	return lipgloss.JoinVertical(lipgloss.Right, cards...) //+ fmt.Sprintf("\nsize(%d)", len(m.toasts))
}
