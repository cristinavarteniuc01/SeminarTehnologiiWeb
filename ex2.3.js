function addToArray() {
    let args = arguments;
    let array = args[0];

    for (var i = 1; i < args.length; i++) {
        if(args[i]%2==0)
        array.push(args[i]);
    }
    return array;
}

let array = [];

console.log(addToArray(array, 2).join(", "));