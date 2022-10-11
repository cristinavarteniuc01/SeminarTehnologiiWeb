//var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

//for (var day in days) {
//    console.log(day);
//    console.log(days[day]);
//}

//for (var day of days) {
//    console.log(day);
//}



let string = "the quick brown fox jumps over the lazy dog";

let usingSplit = string.split(' ');
//console.log(usingSplit);

for (var st in usingSplit) {
    console.log(usingSplit[st] + " : "+st);
}