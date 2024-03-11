# Tournament Tool(s) for Beachvolleyball [beta]

## Project Goals

This is built on the side while completing beginner courses on software development with codecademy. It is currently completely experimental but has a very real use-case in mind. The goals of this experiment e.g.:
- Test newly acquired skills from the codecademy course
- Develop something that may become useful for my hobby
- Distract me from the daily grind

## Product Capabilities

The idea is, to build a tool that makes it easy to set up and manage a Beachvolleyball tournament among friends. Having played tournaments myself and being somewhat passionate about designing a really useful product, I have a million ideas on what this tool should do and scope creep is a permanent threat.
Trying to focus on the very basic features, this is what I would like to achieve:
- Teams can register for the tournament
- A game schedule is created automatically from the list of registered teams
- Game results can be entered
- The game schedule adapts automatically, based on the entered results (e.g.: winner advances in knockout)

## Status [Feb 27, 2024]

### Functional
- teams can register
- a list of registered teams is displayed
- teams can be removed from the list (1by1 or all)
- team registration can be closed (manually)

### Stack
- React (JS, HTML/JSX, CSS)
- Redux & Toolkit
- React Router
