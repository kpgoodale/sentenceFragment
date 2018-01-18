var sentence = "I like to move it move it ehhh macarana";
var sentenceFragment = "move it macarana";

// create a function that compares a sentence to a sentence fragment, and outputs an array of the missing words from the fragment
let compareFragment = (sentence, fragment) => {
    // extract the words from sentence and fragment into an array
    var sentenceWords = sentence.split(" ");
    var fragmentWords = sentenceFragment.split(" ");
    var missingWords = [];
    var i = 0;
    // iterate over the sentence to find the missing words.
    for(var word of sentenceWords) {
        if(word !== fragmentWords[i]) {
            missingWords.push(word);
        }
        else {
            i++;
        }
    }

    // return the array
    return missingWords;
}

console.log(compareFragment(sentence, sentenceFragment));