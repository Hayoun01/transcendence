package dashboard

import (
	"sort"

	"github.com/charmbracelet/bubbles/list"
	tea "github.com/charmbracelet/bubbletea"
)

type friendsTab struct {
	friends *map[string]friend
	list    list.Model
}

func newFriendsTab(friends *map[string]friend) *friendsTab {
	l := list.New([]list.Item{}, list.NewDefaultDelegate(), 0, 0)
	l.DisableQuitKeybindings()
	l.SetShowTitle(false)
	l.SetShowStatusBar(false)
	l.SetShowHelp(false)
	return &friendsTab{friends: friends, list: l}
}

func (m *friendsTab) Init() tea.Cmd {
	return nil
}

func (m *friendsTab) SyncList() {
	var items []list.Item
	for _, friend := range *m.friends {
		desc := "offline"
		if friend.Online {
			desc = "online"
		}
		items = append(items, item{title: friend.Username, desc: desc})
	}
	sort.Slice(items, func(i, j int) bool {
		return items[i].(item).title < items[j].(item).title
	})
	m.list.SetItems(items)
}

func (m *friendsTab) Update(msg tea.Msg) (tabModel, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		h, v := docStyle.GetFrameSize()
		m.list.SetSize(msg.Width-h, msg.Height-v-3)
	}
	var cmd tea.Cmd
	m.list, cmd = m.list.Update(msg)
	return m, cmd
}

func (m *friendsTab) View() string {
	return docStyle.Render(m.list.View())
}
