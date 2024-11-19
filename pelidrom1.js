document.getElementById("check-btn").addEventListener("click", checkPalindrome);
document.getElementById("text-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkPalindrome();
  }
});

function checkPalindrome() {
  const inputText = document.getElementById("text-input").value.trim();

  // Check if the input is empty
  if (!inputText) {
    alert("Please enter some text!");
    return;
  }

  // Normalize the input
  const cleanText = inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check for palindrome
  const isPalindrome = cleanText === cleanText.split("").reverse().join("");

  const resultDiv = document.getElementById("result");

  if (isPalindrome) {
    resultDiv.textContent = `"${inputText}" is a palindrome! 🌟✨`;
    resultDiv.style.color = "#00ff00"; // Bright green for palindrome
  } else {
    resultDiv.textContent = `"${inputText}" is not a palindrome. 🚫`;
    resultDiv.style.color = "#ff4040"; // Bright red for non-palindrome
  }
}


  