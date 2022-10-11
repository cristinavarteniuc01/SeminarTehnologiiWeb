const elements = ['elem1', 'elem2', 'elem3'];

console.log(elements.join());
// expected output: "elem1,elem2,elem3"

console.log(elements.join(' '));
// expected output: "elem1 elem2 elem3"

console.log(elements.join(''));
// expected output: "elem1elem2elem3"

console.log(elements.join('-'));
// expected output: "elem1-elem2-elem3"


function checkDivisible(n, divisor) {
    if (n % divisor) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))

function occurences(text, character) {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === character) {
            count++;
        }
    }
    return count;
}

console.log(occurences("sample text", "e"));


function occurences(text, character) {
    return text.split(character).length - 1;
}

console.log(occurences("sample text", "e"));


let occurences = (text, character) => text.split(character).length - 1;

console.log(occurences("sample text", "e"));


function addToArray() {
    let args = arguments;
    let array = args[0];

    for (var i = 1; i < args.length; i++) {
        array.push(args[i]);
    }
    return array;
}

let array = ["a"];

console.log(addToArray(array, "b", "c").join(", "));

function addToArray(array, ...args) {
    for (var i = 0; i < args.length; i++) {
        array.push(args[i]);
    }
    return array;
}

let array = ["a"];

console.log(addToArray(array, "b", "c").join(", "));


console.log(3 == '3');
console.log(3 === '3');

console.log(true + true + true == 3);


console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2);









const checkPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            return false;
        }
    }
    return true;
}

if (process.argv.lengh < 3) {
    console.log('not enough params')
} else {
    console.log(checkPrime(parseInt(process.argv[2])))
}








var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (var day in days) {
    console.log(day);
    console.log(days[day]);
}

for (var day of days) {
    console.log(day);
}