package dashboard

import (
	"encoding/json"
	"fmt"

	"github.com/Hayoun01/transcendence/pkg/views/toast"
	tea "github.com/charmbracelet/bubbletea"
)

type presence struct {
	UserID string `json:"userID"`
	Status string `json:"status"`
}

type onlineFriends struct {
	Friends []string `json:"onlineFriends"`
}

func (m *DashboardModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmds []tea.Cmd
	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "ctrl+c":
			return m, tea.Quit
		case "right":
			if (m.activeTab + 1) < len(m.tabs) {
				m.activeTab++
			}
		case "left":
			if (m.activeTab - 1) >= 0 {
				m.activeTab--
			}
		}
	case tea.WindowSizeMsg:
		m.height = msg.Height
		m.width = msg.Width
	case wsMsg:
		switch msg.eventType {
		case "presence":
			var p presence
			if err := json.Unmarshal(msg.rawData, &p); err == nil {
				cmds = append(cmds, toast.ShowInfoToast(
					fmt.Sprintf("%s %s!", m.friends[p.UserID].Username, p.Status),
				))
				friend := m.friends[p.UserID]
				friend.Online = true
				if p.Status == "offline" {
					friend.Online = false
				}
				m.friends[p.UserID] = friend
				if ft, ok := m.tabs[0].(*friendsTab); ok {
					ft.SyncList()
				}
			}
		case "friends:online":
			var list onlineFriends
			if err := json.Unmarshal(msg.rawData, &list); err == nil {
				for _, f := range list.Friends {
					friend, ok := m.friends[f]
					if ok {
						friend.Online = true
						m.friends[f] = friend
					}
				}
				if ft, ok := m.tabs[0].(*friendsTab); ok {
					ft.SyncList()
				}
			}
		}
	case wsErrorMsg:

		return m, nil
	}
	for i, ml := range m.tabs {
		var cmd tea.Cmd
		m.tabs[i], cmd = ml.Update(msg)
		cmds = append(cmds, cmd)
	}
	return m, tea.Batch(cmds...)
}
