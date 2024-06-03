


# React and Vite

## Getting Started with React-Vite
- Run the following command to get started:
  ```sh
  npx create-vite@latest
  ```

## React Virtual DOM
- React used to have a concept called the Virtual DOM.
- In `main.jsx`, `createRoot` exists which:
  - Creates a DOM-like structure.
  - Compares it with the current DOM.
  - Updates the DOM accordingly.

## Differentiating Algorithm: Reconciliation
- The algorithm used for this comparison and update process is called **Reconciliation**.
- This algorithm functions similarly to how Git handles differences.

## Introduction of Fiber
- The Virtual DOM is replaced by **Fiber**.
- Benefits of Fiber:
  - Increases sustainability when implementing animations and layouts.
  - Ability to pause, abort, and reuse work as new updates come in.
  - Assigns priority to different updates.

## Props and State
- Props are passed to a component as an object.
- Props are reusable and can be passed to multiple components.
- Props are used to pass data from a parent component to a child component as an object.
- example : 

```
let object = { name: "John", age: 30 };
<Button myDetails={object} />
```