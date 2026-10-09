<h1 align="center">🔐 Super Secure Password Generator</h1>

<p align="center">Generate a strong random password from the length and character types you choose.</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=css&amp;logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="JavaScript">
</p>

<p align="center"><img src="docs/screenshot.png" alt="Password Generator showing a freshly generated 20-character password" width="850"></p>

## Features

- Choose a password length from 8 to 128 characters
- Choose which character types to include:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Requires at least one character type to be selected
- Every password includes at least one character from each type you selected, then shuffles the result
- The password appears in the text box, ready to copy

## Built With

- HTML, CSS, JavaScript
- [rando.js](https://randojs.com/) for random selection and shuffling

## Running Locally

No build step is needed.

1. Clone the repo:
   ```bash
   git clone https://github.com/ChristianKrantz11/super-secure-password-generator.git
   ```
2. Open `index.html` in your browser.
3. Click **Generate Password** and answer the prompts.

## Known Issues

The top of `script.js` contains leftover starter code that logs a console error when the page loads:

- `window.getElementById(...)` should be `document.getElementById(...)`
- `writePassword` calls `generatePassword()`, which doesn't exist

The **Generate Password** button still works, because it calls `generateNewPassword()` directly.

## Author

[ChristianKrantz11](https://github.com/ChristianKrantz11)
