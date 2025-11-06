package dashboard

import tea "github.com/charmbracelet/bubbletea"

type messagesTab struct {
}

func newMessagesTab() *messagesTab {
	return &messagesTab{}
}

func (m *messagesTab) Init() tea.Cmd {
	return nil
}
func (m *messagesTab) Update(msg tea.Msg) (tabModel, tea.Cmd) {
	return m, nil
}
func (m *messagesTab) View() string {
	return "Messages"
}
