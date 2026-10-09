<h1 align="center">🔐 Super Secure Password Generator</h1>

<p align="center">Generate a strong random password from the length and character types you choose.</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=css&amp;logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="JavaScript">
</p>

<p align="center"><img src="docs/screenshot.png" alt="Password Generator showing a freshly generated 20-character password" width="850"></p>

## Features

- Choose a password length from 8 to 128 characters with a slider
- Choose which character types to include:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Every password contains at least one character from each type you selected
- One-click **Copy** button
- Shows a clear message if no character type is selected
- Responsive layout for desktop and mobile

## Security

The randomness comes from the browser's cryptographically secure generator, [`crypto.getRandomValues`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues), not `Math.random()`.

- Characters are picked with rejection sampling to avoid modulo bias.
- The final password is shuffled with a Fisher–Yates shuffle that uses the same secure source.
- Nothing is sent over the network. Passwords never leave your device.

## Built With

- HTML, CSS and JavaScript (no libraries)

## Running Locally

No build step is needed.

1. Clone the repo:
   ```bash
   git clone https://github.com/ChristianKrantz11/super-secure-password-generator.git
   ```
2. Open `index.html` in your browser.

## Author

[ChristianKrantz11](https://github.com/ChristianKrantz11)
