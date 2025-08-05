package socket

import tea "github.com/charmbracelet/bubbletea"

var (
	msgChan = make(chan tea.Msg)
)
