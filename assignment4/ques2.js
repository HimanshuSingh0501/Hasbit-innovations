function createDiv(width, height, text) {
    const newDiv = document.createElement('div');
    newDiv.style.height = height + 'px';
    newDiv.style.width = width + 'px';
    newDiv.textContent = text;
    const container = document.getElementById('container');
    container.appendChild(newDiv);
}