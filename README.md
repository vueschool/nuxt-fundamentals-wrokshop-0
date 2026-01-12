# Nuxt Fundamentals Workshop

This repository is used to the [Nuxt Fundamentals Workshop](https://vueschool.io/workshops/nuxt-js-fundamentals-workshop) by [Vue School](https://vueschool.io/)

## Project Setup

1. Download the Boilerplate Code
2. Ensure you're on Node +v20.x.x (LTS)
   1. If you need to switch versions of node you can use [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)
   2. Also note, your version of Node MIGHT work just fine, we just haven’t tested the project on a lower version.
3. Install dependencies

```html
npm install
```

1. Startup development server

```html
npm run dev
```

## Project Structure

Each challenge has two branches: '-begin' and '-end'.

The 'begin' branch includes the starting point or boilerplate, while the 'end' branch contains the solution for reference.

To start working on a specific exercise:

- Run in VS Code terminal: `git checkout {exerciseNumber}-begin`
  > 💡 Replace `{exerciseNumber}` with the exercise number.

Before moving to a new branch, you might need to commit your changes or reset them.

- To reset your local branch and remove all changes: `git reset --hard && git clean -df`

## IDE Setup

1. Install and enable [Vue Language Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

# Helpful Resources

- [Nuxt Docs](https://nuxt.com/)
- [Vue Language Features VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
