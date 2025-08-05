package toast

import (
	"time"

	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
	"github.com/google/uuid"
)

type toastType int

const (
	toastError toastType = iota
	toastSuccess
	toastWarning
	toastInfo
)

type ToastMsg struct {
	ID      string
	Message string
	Type    toastType
}

type ToastModel struct {
	toasts []ToastMsg
}

type ErrorMsgToast string
type SuccessMsgToast string
type InfoMsgToast string
type WarnMsgToast string
type removeToastMsg string

var (
	toastStyle = lipgloss.NewStyle().
			Padding(0, 1).
			BorderStyle(lipgloss.RoundedBorder())
	errorStyle = toastStyle.
			BorderForeground(lipgloss.Color("#cc3300")).
			Foreground(lipgloss.Color("#cc3300"))
	successStyle = toastStyle.
			BorderForeground(lipgloss.Color("#339900")).
			Foreground(lipgloss.Color("#339900"))
	infoStyle = toastStyle.
			BorderForeground(lipgloss.Color("#40a6ce")).
			Foreground(lipgloss.Color("#40a6ce"))
	warnStyle = toastStyle.
			BorderForeground(lipgloss.Color("#ffcc00")).
			Foreground(lipgloss.Color("#ffcc00"))
)

func ShowErrorToast(msg string) tea.Cmd {
	return func() tea.Msg {
		return ErrorMsgToast(msg)
	}
}

func ShowSuccessToast(msg string) tea.Cmd {
	return func() tea.Msg {
		return SuccessMsgToast(msg)
	}
}

func ShowInfoToast(msg string) tea.Cmd {
	return func() tea.Msg {
		return InfoMsgToast(msg)
	}
}

func ShowWarnToast(msg string) tea.Cmd {
	return func() tea.Msg {
		return WarnMsgToast(msg)
	}
}

func NewToastModel() *ToastModel {
	return &ToastModel{}
}

func (m *ToastModel) Init() tea.Cmd {
	return nil
}

func (m *ToastModel) addToast(msg string, duration time.Duration, t_type toastType) tea.Cmd {
	id := uuid.New()
	m.toasts = append(m.toasts, ToastMsg{ID: id.String(), Message: msg, Type: t_type})

	return tea.Tick(duration, func(time.Time) tea.Msg {
		return removeToastMsg(id.String())
	})
}

func (m *ToastModel) removeToast(id string) {
	for i, t := range m.toasts {
		if t.ID == id {
			m.toasts = append(m.toasts[:i], m.toasts[i+1:]...)
			break
		}
	}
}
