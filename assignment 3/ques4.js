const str = "Hello how are you my name is himanshu singh . I am a student of btech cse 4nd year";

function countVowelsAndConsonants(s) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of s) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }

    return { vowelCount, consonantCount };
}

const result = countVowelsAndConsonants(str);
console.log(`Vowels: ${result.vowelCount}, Consonants: ${result.consonantCount}`);