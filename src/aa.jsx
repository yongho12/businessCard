
/*
 * Complete the 'maximumOccurringCharacter' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts STRING text as parameter.
 */

function maximumOccurringCharacter(text) {
    // Write your code here
    let characterCounts = {};

    for (let i=0; i < text.length; i++) {
        if (!(text[i] in characterCounts)) { 
            characterCounts[text[i]] = 0;   
        }
        characterCounts[text[i]]++     
    }
    console.log(characterCounts);
    let max = '';

    let val = Object.values(characterCounts).sort((a,b)=>b-a)[0]
    console.log(val)
    for (const [key, value ] of Object.entries(characterCounts)) {
        if (value === val) {
            return key;
        }
    }
   
}


