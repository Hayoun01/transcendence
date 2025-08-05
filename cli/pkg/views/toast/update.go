package toast

import (
	"time"

	tea "github.com/charmbracelet/bubbletea"
)

func (m *ToastModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case ErrorMsgToast:
		return m, m.addToast(string(msg), time.Second*3, toastError)
	case SuccessMsgToast:
		return m, m.addToast(string(msg), time.Second*3, toastSuccess)
	case InfoMsgToast:
		return m, m.addToast(string(msg), time.Second*3, toastInfo)
	case WarnMsgToast:
		return m, m.addToast(string(msg), time.Second*3, toastWarning)
	case removeToastMsg:
		m.removeToast(string(msg))
	}
	return m, nil
}
