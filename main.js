function countBs(string) {
    return countChar(string, "B");
}

function countChar(string, character) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) counter++;
    }
    return counter;
}

let text = `Start browsing, and we’ll show some of the great articles,
videos, and other pages you’ve recently visited or bookmarked here.`;

let char = "s";

console.log(text);
console.log(`\nHow many "${char}" in the text?`,
            `It's ${countChar(text, char)}.`);
