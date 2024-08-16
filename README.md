# Boilerplate
## Install
- Node.js (npm and npx are bundled in it)
- Check if they're installed (in terminal)
    - `node -v`
    - `npm -v`
    - `npx -v`

## Create React App
- **Command:** `npx create-next-app@latest`
- **YES:** App Router, EsLint, src/ directory, Tailwind CSS, TypeScript
- **NO:** customize the default import alias (@/*)

## After Creating React App (Automatic)
- Will automatically install dependencies
    - next
    - react
    - react-dom
- Will automatically install devDependencies
    - @types/node
    - @types/react
    - @types/react-dom
    - eslint
    - eslint-config-next
    - postcss
    - tailwindcss
    - typescript

## Additional Installations
- **Husky and lint-staged:** `npm install husky lint-staged --save-dev`
- **Jest and React Testing Library:** `npm install jest @testing-library/react @testing-library/jest-dom --save-dev`
    - Ensure it's installed: npm install --save-dev jest
    - For testing setup

## Run Server
- **Command:** `npm run dev` -> [localhost:3000](http://localhost:3000/)