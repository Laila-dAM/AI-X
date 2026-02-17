# AI-X — Educational Interactive Game with AI Assistance

## Overview

AI-X is a web-based educational game designed to teach Artificial Intelligence concepts through interactive gameplay, quizzes, and adaptive AI assistance.
The project combines a custom JavaScript game engine, educational activities, and account-based progress saving in a single-page application (SPA).

The goal of this project is to create a simple, creative, and scalable educational experience that blends game design, learning systems, and software architecture.

## Main Features

* Custom 2D game engine (Canvas + HTML UI)
* Educational dialogues and lessons
* Multiple choice and open-ended quizzes
* Adaptive AI hint system (offline-first)
* Account system (LocalStorage)
* Automatic progress saving
* Scene management (SPA architecture)
* Keyboard and mouse interaction
* Minimalist visual style (indie educational game)

## Technologies

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* Canvas API
* LocalStorage (for accounts and save system)

## Project Structure

```
AI-X/
├── public/        # Entry HTML and public assets
├── src/           # Core source code
│   ├── core/      # Engine, game loop, managers
│   ├── scenes/    # Game scenes (menu, forest, city)
│   ├── systems/   # Save, account, quiz, AI systems
│   ├── ui/        # UI components (menu, dialogue, HUD)
│   ├── entities/  # Player and game entities
│   ├── ai/        # Educational AI assistant logic
│   └── utils/     # Helper utilities
├── assets/        # Images, audio, sprites
├── data/          # Lessons, quizzes, and content data
├── styles/        # Global styles
├── index.html     # Root entry point
└── README.md      # Project documentation
```

## Educational Design

The game teaches AI concepts through:

* Interactive lessons inside the narrative
* Practice quizzes with feedback
* Open coding exercises (planned)
* Adaptive hint system based on student mistakes

The educational approach focuses on learning by interaction instead of passive reading.

## Account and Save System

AI-X uses a LocalStorage-based account system that allows:

* User registration (email and password)
* Login and session persistence
* Automatic progress saving per user
* Resume gameplay from last scene

This design keeps the project lightweight and fully functional in the browser without a backend.

## Gameplay Concept

The player controls Kov in a minimalist world that mixes education and absurd narrative elements.
The game includes exploration, dialogues, educational challenges, and creative activities designed to reinforce AI learning in an engaging way.

## Development Philosophy

* Simplicity over complexity
* Educational value first
* Modular architecture
* Scalable systems
* Clean and readable codebase

## Current Status

Core development in progress:

* Base structure completed
* Menu system implemented
* Scene system in development
* Educational systems planned

## Future Planned Features

* Adaptive AI educational assistant
* Interactive coding practice system
* Expanded lessons and quizzes
* Additional maps (forest and city)
* Teacher character interactions
* Progress dashboard for students

## How to Run the Project

1. Clone the repository:

```
git clone https://github.com/your-username/AI-X.git
```

2. Open the project folder
3. Run with a local server (recommended) or open:

```
public/index.html
```

## Target Audience

* Students learning Artificial Intelligence basics
* Educational game enthusiasts
* Developers interested in game architecture in JavaScript

## License

This project is for educational and portfolio purposes.
