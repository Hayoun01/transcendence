package dashboard

import (
	"math"

	tea "github.com/charmbracelet/bubbletea"
)

type gameTab struct {
	width, height          int
	paddle1pos, paddle2pos int
	ballY, ballX           float64
}

const (
	paddleHeight = 4
)

func newGameTab() *gameTab {
	return &gameTab{}
}

func (m *gameTab) Init() tea.Cmd {
	return nil
}

func (m *gameTab) Update(msg tea.Msg) (tabModel, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		m.height = msg.Height - paddleHeight
		m.width = msg.Width
		m.ballX = float64(m.width) / 2
		m.ballY = float64(m.height) / 2
	case tea.KeyMsg:
		switch msg.String() {
		case "w", "W":
			if m.paddle1pos-3 > 0 {
				m.paddle1pos -= 3
			} else {
				m.paddle1pos = 0
			}
		case "s", "S":
			if m.paddle1pos+3 < m.height-paddleHeight {
				m.paddle1pos += 3
			} else {
				m.paddle1pos = m.height - paddleHeight
			}
		case "up":
			if m.paddle2pos-3 > 0 {
				m.paddle2pos -= 3
			} else {
				m.paddle2pos = 0
			}
		case "down":
			if m.paddle2pos+3 < m.height-paddleHeight {
				m.paddle2pos += 3
			} else {
				m.paddle2pos = m.height - paddleHeight
			}
		case "d":
			m.ballX += 3
		case "a":
			m.ballX -= 3
		}
	}
	return m, nil
}

func (m *gameTab) View() string {
	board := make([][]rune, m.height)
	for i := range board {
		board[i] = make([]rune, m.width)
		for j := range board[i] {
			board[i][j] = ' '
		}
	}

	for i := range paddleHeight {
		board[m.paddle1pos+i][0] = '▐'
		board[m.paddle2pos+i][m.width-1] = '▌'
	}

	for i := range m.height {
		if i%2 != 0 {
			board[i][m.width/2] = '|'
		}
	}
	bx := int(math.Round(m.ballX))
	by := int(math.Round(m.ballY))
	board[by][bx] = '●'

	s := ""
	for _, c := range board {
		s += string(c) + "\n"
	}
	return s
}
