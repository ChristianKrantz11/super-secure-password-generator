var CHARACTER_SETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{};:,.<>/?~"
};

var form = document.getElementById("options");
var lengthInput = document.getElementById("length");
var lengthValue = document.getElementById("length-value");
var passwordText = document.getElementById("password");
var copyButton = document.getElementById("copy");
var errorEl = document.getElementById("error");

// Cryptographically secure random integer in [0, max), without modulo bias
function randomInt(max) {
  var limit = Math.floor(0x100000000 / max) * max;
  var buffer = new Uint32Array(1);
  do {
    crypto.getRandomValues(buffer);
  } while (buffer[0] >= limit);
  return buffer[0] % max;
}

function randomChar(characters) {
  return characters[randomInt(characters.length)];
}

// Fisher-Yates shuffle using the secure random source
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = randomInt(i + 1);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function generatePassword(length, sets) {
  // Start with one character from each selected set so every type is guaranteed to appear
  var password = sets.map(randomChar);
  var allCharacters = sets.join("");
  while (password.length < length) {
    password.push(randomChar(allCharacters));
  }
  return shuffle(password).join("");
}

function selectedSets() {
  return Object.keys(CHARACTER_SETS)
    .filter(function (name) {
      return document.getElementById(name).checked;
    })
    .map(function (name) {
      return CHARACTER_SETS[name];
    });
}

lengthInput.addEventListener("input", function () {
  lengthValue.textContent = lengthInput.value;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var sets = selectedSets();
  if (sets.length === 0) {
    errorEl.textContent = "Select at least one character type.";
    return;
  }
  errorEl.textContent = "";
  passwordText.value = generatePassword(Number(lengthInput.value), sets);
  copyButton.disabled = false;
  copyButton.textContent = "Copy";
});

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordText.value).then(
    function () {
      copyButton.textContent = "Copied!";
    },
    function () {
      passwordText.select();
      copyButton.textContent = "Press Ctrl+C";
    }
  );
});
