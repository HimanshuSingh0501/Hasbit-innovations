function countWords(paragraph) {
    if (typeof paragraph !== 'string') {
        return 0;
    }
    const words = paragraph.trim().split(/\s+/);
    return words.length;
}

const paragraph = "This is an example paragraph to count the number of words.";
console.log(countWords(paragraph));