# Architecture — AI-X

## Technical Architecture

AI-X follows a modular Single Page Application (SPA) architecture with a custom JavaScript game engine.

## Rendering System

* Canvas API for game world rendering
* HTML + CSS for UI layers
* Fullscreen responsive canvas

## Engine Core Components

* Game Loop (requestAnimationFrame)
* Scene Manager (dynamic scene transitions)
* Input System (keyboard and interaction)
* Account System (LocalStorage persistence)
* UI System (menu, dialogue, panels)

## Folder Structure Philosophy

The project is structured to separate engine logic, systems, scenes, and UI components for scalability and maintainability.

## Scene Flow

Menu Scene → Forest Scene → Future Educational Scenes

Scenes are dynamically loaded and managed without page reloads.

## Data Persistence

LocalStorage-based architecture:

* User accounts
* Progress saving
* Lesson tracking
* Quiz results

This allows offline functionality and lightweight deployment.

## Scalability Design

The architecture allows future integration of:

* Real AI assistant APIs
* Additional maps and lessons
* Advanced educational modules
* Cloud save systems
