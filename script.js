function greetUser() {
    let name = prompt("What is your name?");
    let color = prompt("What is your favorite color?");

    if (name && color) {
        document.body.style.backgroundColor = color;
        let greetingBox = document.getElementById('greeting-box');
        let greetingMessage = document.getElementById('greeting-message');

        greetingMessage.innerText = `Welcome to the page, ${name}!`;
        greetingBox.style.backgroundColor = color;
        greetingBox.classList.remove('hidden');
    }else {
        alert('Please provide a name and a color.');
    }
}
