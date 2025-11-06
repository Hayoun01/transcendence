package dashboard

import (
	"encoding/json"
	"net/http"

	"github.com/Hayoun01/transcendence/pkg/app"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
	"github.com/gorilla/websocket"
)

var (
	tabStyle = lipgloss.NewStyle().
			Padding(0, 1).
			BorderForeground(lipgloss.Color("111")).
			Border(lipgloss.Border{
			Top:         "─",
			Bottom:      "─",
			Left:        "│",
			Right:       "│",
			TopLeft:     "╭",
			TopRight:    "╮",
			BottomLeft:  "┴",
			BottomRight: "┴",
		}, true)
	activeTabStyle = tabStyle.
			Bold(true).
			Foreground(lipgloss.Color("111")).
			Border(lipgloss.Border{
			Top:         "─",
			Bottom:      " ",
			Left:        "│",
			Right:       "│",
			TopLeft:     "╭",
			TopRight:    "╮",
			BottomLeft:  "┘",
			BottomRight: "└",
		}, true)
	tabGab = tabStyle.
		BorderTop(false).
		BorderLeft(false).
		BorderRight(false)
)

type DashboardModel struct {
	activeTab     int
	tabs          []tabModel
	width, height int
	token         string
	friends       map[string]friend
	conn          *websocket.Conn
}

type tabModel interface {
	Init() tea.Cmd
	Update(tea.Msg) (tabModel, tea.Cmd)
	View() string
}

var (
	docStyle = lipgloss.NewStyle().Margin(1, 0)
)

type item struct {
	title, desc string
}

func (i item) Title() string       { return i.title }
func (i item) Description() string { return i.desc }
func (i item) FilterValue() string { return i.title }

func NewDashboardModel() *DashboardModel {
	friends := make(map[string]friend)
	return &DashboardModel{
		activeTab: 0,
		tabs: []tabModel{
			newFriendsTab(&friends),
			newMessagesTab(),
			newGameTab(),
		},
		friends: friends,
	}
}

type wsMsg struct {
	text      string
	eventType string
	rawData   json.RawMessage
}

type wsErrorMsg struct{ err error }

type friend struct {
	ID       string `json:"id"`
	UserID   string `json:"userId"`
	Username string `json:"username"`
	Online   bool
}

func (m *DashboardModel) SetToken(token string) {
	m.token = token
}

func (m *DashboardModel) StartWebSocket() tea.Cmd {
	return func() tea.Msg {
		conn, _, err := websocket.DefaultDialer.Dial("ws://localhost:3000/ws/chat/live?token="+m.token, nil)
		if err != nil {
			return wsErrorMsg{err}
		}
		m.conn = conn
		go func() {
			for {
				_, message, err := conn.ReadMessage()
				if err != nil {
					app.Program.Send(wsErrorMsg{nil})
					return
				}
				var data struct {
					Type    string          `json:"type"`
					Payload json.RawMessage `json:"payload"`
				}
				if err := json.Unmarshal(message, &data); err != nil {
					app.Program.Send(wsMsg{text: "Invalid event"})
					continue
				}
				app.Program.Send(wsMsg{eventType: data.Type, rawData: data.Payload})
			}
		}()
		return wsMsg{text: ""}
	}
}

func (m *DashboardModel) FetchData() tea.Cmd {
	return func() tea.Msg {
		req, err := http.NewRequest(http.MethodGet, "http://127.0.0.1:3000/api/v1/user-mgmt/friends", nil)
		if err != nil {
			return nil
		}
		req.Header.Set("Authorization", "Bearer "+m.token)
		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			return nil
		}
		defer resp.Body.Close()
		if resp.StatusCode != http.StatusOK {
			app.Program.Send(wsErrorMsg{nil})
			return nil
		}
		var friends []friend
		if err := json.NewDecoder(resp.Body).Decode(&friends); err == nil {
			for _, friend := range friends {
				m.friends[friend.UserID] = friend
			}
		}
		if ft, ok := m.tabs[0].(*friendsTab); ok {
			ft.SyncList()
		}
		return nil
	}
}

func (m *DashboardModel) Init() tea.Cmd {
	return nil
}
