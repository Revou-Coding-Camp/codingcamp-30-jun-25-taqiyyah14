function validateForm() {
    const nameInput = document.getElementById('name-input');
    const messageInput = document.getElementById('message-input');
    const resultForm = document.getElementById('result-form');

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || message === '') {
        resultForm.style.color = 'red';
        resultForm.textContent = 'Please fill in both your name and message before sending!';
    } else {
        resultForm.style.color = 'var(--navy-blue)';
        resultForm.innerHTML = `<strong>${name}</strong>, thank you for your message:<br>"${message}"`;
        // Reset form
        document.getElementById('message-form').reset();
    }
}
