function greetUser() {
    let name = prompt("What is your name?");
    let color = prompt("What is your favorite color?");

    if (name && color) {
        alert(`Hello, ${name}! Your favorite color is ${color}.`);
        document.body.style.backgroundColor = color;
    }else {
        alert('Please provide a name and a color.');
    }
}
