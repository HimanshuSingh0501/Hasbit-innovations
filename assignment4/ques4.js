document.getElementById('colorchange').addEventListener('click', function() {
    var color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
});

document.getElementById('fontsize').addEventListener('input', function() {
    var size = document.getElementById('fontsize').value;
    document.getElementById('text-container').style.fontSize = size + 'px';
});

document.getElementById('italic').addEventListener('click', function() {
    var textContainer = document.getElementById('text-container');
    if (textContainer.style.fontStyle === 'italic') {
        textContainer.style.fontStyle = 'normal';
    } else {
        textContainer.style.fontStyle = 'italic';
    }
});

document.getElementById('underline').addEventListener('click', function() {
    var textContainer = document.getElementById('text-container');
    if (textContainer.style.textDecoration === 'underline') {
        textContainer.style.textDecoration = 'none';
    } else {
        textContainer.style.textDecoration = 'underline';
    }
});

document.getElementById('bold').addEventListener('click', function() {
    var textContainer = document.getElementById('text-container');
    if (textContainer.style.fontWeight === 'bold') {
        textContainer.style.fontWeight = 'normal';
    } else {
        textContainer.style.fontWeight = 'bold';
    }
});

document.getElementById('list').addEventListener('change', function() {
    var fontFamily = document.getElementById('list').value;
    document.getElementById('text-container').style.fontFamily = fontFamily;
});

document.getElementById('getstyle').addEventListener('click', function() {
    var textContainer = document.getElementById('text-container');
    var cssProps = `
        color: ${textContainer.style.color};
        font-size: ${textContainer.style.fontSize};
        font-style: ${textContainer.style.fontStyle};
        text-decoration: ${textContainer.style.textDecoration};
        font-weight: ${textContainer.style.fontWeight};
        font-family: ${textContainer.style.fontFamily};
    `;
    document.getElementById('css-props').innerText = cssProps.replace(/\s+/g, ' ').trim();
});