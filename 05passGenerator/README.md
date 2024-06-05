## Usage

Welcome to our Password Generator project! 🚀 This project harnesses the power of React hooks to provide a seamless experience for generating and customizing passwords.

### useState

- **length**: Controls the length of the password. By default, it's set to 8 characters.
- **ckNumber**: A boolean state enabling or disabling the inclusion of numbers in the password.
- **charAllowed**: A boolean state allowing or disallowing the use of special characters in the password.
- **pass**: Holds the generated password.

### useRef

- **passRef**: This handy reference allows direct interaction with the password input element. Want to select the text? This is your tool!

### useCallback

- **passGen**: A memoized function that generates passwords. It's cleverly recreated only when its dependencies (length, ckNumber, charAllowed) change.
- **copyPass**: Another memoized gem! This function copies the password to the clipboard, ensuring it's only recreated when the password itself changes.
- **selectPass**: This function selects the password text efficiently, preventing unnecessary recreations.

### useEffect

Ah, the heartbeat of our project! This effect triggers whenever there's a change in length, ckNumber, charAllowed, or the passGen function. Its job? To regenerate the password, keeping it fresh and in tune with the user's preferences.