package main

import (
	"fmt"
	"os"

	"github.com/Hayoun01/transcendence/pkg/app"
	"github.com/Hayoun01/transcendence/pkg/model"
	tea "github.com/charmbracelet/bubbletea"
)

func main() {
	app.Program = tea.NewProgram(model.InitialModel(), tea.WithAltScreen())
	if _, err := app.Program.Run(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
