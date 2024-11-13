const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const maxChars = 250;

textInput.addEventListener('input', () => {
    let currentLength = textInput.value.length;

    // Limit input when maxChars is reached
    if (currentLength >= maxChars) {
        textInput.value = textInput.value.substring(0, maxChars); // Limit to 250 characters
        currentLength = maxChars;
        textInput.classList.add('limit-reached'); // Apply red color and border to textarea
        charCount.classList.add('limit-reached'); // Apply red color to charCount
    } else {
        textInput.classList.remove('limit-reached'); // Remove red color and border
        charCount.classList.remove('limit-reached'); // Remove red color from charCount
    }

    // Update character count
    charCount.textContent = `${currentLength} / ${maxChars}`;a
});
