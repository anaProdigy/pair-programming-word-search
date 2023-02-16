// receives a 2D array of letters and a word
// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found

// When the present tests are successful, ask yourself, "Do the current tests cover all the possible cases?"
// What if the word is written vertically, not horizontally?
// What about the case where the word matrix is an empty array?
// write tests for these cases (and any others that you think of)
// modify the wordSearch function to make those new tests pass.

const wordSearch = (letters, word) => {
    //we check if the matrix is an empty array and return false if it is
    if (letters.length === 0) {
        return false;
    }
    //we check the horiontal arrays by turning them into strings
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    //we create an array of vertical letters, turn it into a string and check for the word
    for (let x = 0; x <= letters[0].length; ++x) {
        let temp = [];
        for (let y = 0; y < letters.length; ++y) {
            temp.push(letters[y][x]);
        }
        console.log(temp.join(""));
        if (temp.join("").includes(word)) {
            return true;
        }
    }
    //we return false if the word is not present
    return false;
};

wordSearch(
    [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
    ],
    "LDLGLBIS8"
);

module.exports = wordSearch;

// const wordSearch = (letters, word) => {
//   const horizontalJoin = letters.map((ls) => ls.join(""));
//   for (l of horizontalJoin) {
//     if (l.includes(word)) return true;
//   }
// };
