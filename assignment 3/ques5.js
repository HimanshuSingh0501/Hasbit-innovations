function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

let sentence = "I have a apple. I will eat an pen.";
let correctedSentence = correctfn(sentence, "pen", "apple");
console.log(correctedSentence);