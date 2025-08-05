package dashboard

import (
	"fmt"
	"strings"

	"github.com/charmbracelet/lipgloss"
)

func (m *DashboardModel) View() string {
	doc := strings.Builder{}
	renderedTabs := make([]string, len(m.tabs))
	for i, t := range m.tabs {
		title := ""
		switch t.(type) {
		case *friendsTab:
			title = fmt.Sprintf("friends (%d)", len(m.friends))
		case *messagesTab:
			title = "messages"
		}
		style := tabStyle
		if i == m.activeTab {
			style = activeTabStyle
		}
		renderedTabs = append(renderedTabs, style.Render(title))
	}
	row := lipgloss.JoinHorizontal(lipgloss.Top, renderedTabs...)
	gap := tabGab.Render(strings.Repeat(" ", max(0, m.width-lipgloss.Width(row)-2)))
	row = lipgloss.JoinHorizontal(lipgloss.Bottom, row, gap)
	doc.WriteString(row + "\n")
	doc.WriteString(m.tabs[m.activeTab].View())
	content := doc.String()
	lines := strings.Split(content, "\n")
	for len(lines) < m.height {
		lines = append(lines, "")
	}
	for i, line := range lines {
		if lipgloss.Width(line) < m.width {
			lines[i] = line + strings.Repeat(" ", m.width-lipgloss.Width(line))
		}
	}
	return strings.Join(lines, "\n")
}
