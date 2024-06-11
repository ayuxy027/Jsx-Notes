


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
- Pass the props to the component and use the props directly in app.jsx

- example : 

```
let object = { name: "John", age: 30 };
<Button myDetails={object} />
```

## Hooks
 Hooks are functions that allow you to use React features.
- ### useState 
  - used to create state functions and objects for using in callbacks
  - returns an array of two values, the current state and a function to update the state
  - default value of the state is injected in useState
  - example: 
   ```
   const [count, setCount] = useState(0);
   ```
- ### useCallback
  - used to cache a function during rendering
  - pass multiple callbacks to the same function as dependencies
  - example: 
   ```
   const handleClick = useCallback(() => {
     console.log("Clicked");
   }, [function 1, function 2, function 3]);
   ```
 - ### useEffect
  - used to run a function after a component is mounted
  - synchronizes the component with the external system
  - If any dependencies are changed the component will re-run the function asap
  - example: 
   ```
   useEffect(() => {
     console.log("Component mounted");
   }, []);
   ```
- ### useRef
  - used to create a mutable ref object
  - returns a mutable ref object
  - example: 
   ```
   const ref = useRef(null);
   ```

      

