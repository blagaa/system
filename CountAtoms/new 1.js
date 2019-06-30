// var molecule = ["NaCl", "H2O", "Ca(OH)2", "Al2(SO4)", "[Cu(NH3)4(H2O)2]SO4"];

let resultList = [];

function onSubmit() {
    // noCanvas();
    let input = document.getElementById("molecule").value;
    let resultElement = document.getElementById("result");

    console.log(input);

    if (!input) {

        return 'input is empty';
    }

    this.calculate(input);

    let result = "";

    resultList.sort( compare );

    resultList.forEach(function (item, index) {

        result += item.key + item.value;
    }, this);

    console.log("Result: " + result);

    resultElement.innerText = result;

    //Clear the result list
    resultList = [];
}

function calculate(molecule) {

    let regex = /[A-Z][a-z]?\d*|\(.*?\)\d+/g;
    let matches = molecule.match(regex);

    for (let i = 0; i < matches.length; i++) {

        let match = matches[i];

        if (match[0] === '(') {

            let innerRegex = /[A-Z][a-z]?\d*/g;
            let innerMatches = match.match(innerRegex);

            let closeBracketIndex = match.indexOf(')') + 1;

            // Take the grand subscript of the whole molecule that's after the brackets. Example: (H2O)10. Grand subscript is 10.
            let subscriptNumber = match.substring(closeBracketIndex, (match.length));
            let grandSubscript = parseInt(subscriptNumber, 10);

            innerMatches.forEach((item, index) => {

                console.log("item: " + item);
                this.addToResult(item, grandSubscript)
            });

            continue;
        }

        this.addToResult(match)
    }
}

function addToResult(match, grandSubscript = 1) {

    let keyLength = 1;
    let subscript = 1;

    if (match.length > 1 && isLetter(match[1])) {

        keyLength = 2;
    }

    // Check if the last char of the match is a digit. If true then we have subscript.
    if (isNumber(match[match.length - 1])) {
        // Get the subscript number string and parse it to int
        let subscriptNumber = match.substring(keyLength, (match.length));

        subscript = parseInt(subscriptNumber, 10);
    }

    let key = match.substring(0, keyLength);

    // Multiply the subscript with the grand subscript to get the total
    subscript *= grandSubscript;

    let found = resultList.findIndex(function (item) {
        return item.key === key;
    });

    if (found > 0) {

        console.log(resultList[found].value)
        resultList[found] = {
            key: key,
            value: resultList[found].value + subscript
        };
    } else {

        resultList.push({
            key: key,
            value: subscript
        });
    }
}

function isLetter(c) {

    return c.toLowerCase() !== c.toUpperCase();
}

function isNumber(c) {

    return isNaN(parseInt(c, 10)) === false;
}

//Function used to sort the array
function compare( a, b ) {

    if ( a.key < b.key ){

        return -1;
    }

    if ( a.key > b.key ){
        return 1;
    }

    return 0;
}
