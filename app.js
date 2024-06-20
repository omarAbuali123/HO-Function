/**q1 */


function int(arry){
    let  newarry = [];
    for (let i = 0; i <  arry.length; i++){
        newarry.push(Math.pow(2, arry[i]));
    }
    return newarry;
}
console.log(int([1, 2, 3]));



/*forEach */

function int(arr) {
    let newarr = [];
    arr.forEach(function(element) {
        newarr.push(Math.pow(2, element));
    });
    return newarr;
}
console.log(int([1, 2, 3])); 



/*map */

function int(arr) {
    return arr.map(function(element) {
        return Math.pow(2, element);
    });
}
console.log(int([1, 2, 3])); 




/*q2*/

// function int(arr){
//     return arr.map(function(element){
//         if(typeof element !== 'number'){
//             return 'N/A';
//         }
//         return element % 2 ===0 ? 'even' : 'odd';
//     });
// }
// console.log(int(["we",1, 2, 3, "Rawan"]));


/*q3*/


let names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

names.forEach(function(name){
    console.log(name);
});
    
/*4*/

function fizzbuzz(numbers){
    return numbers.map(number =>{
        if(number % 3 === 0 && number % 5 === 0){
            return "Fizz Buzz";
        }
        else if(number % 5 ===0){
            return "Buzz";
        }
        else if (number % 3 === 0){
            return "Fizz";       
        }else{
            return number;
        }
    });
}
let Array = [1, 3, 5, 15, 16];
let fun = fizzbuzz(Array);
console.log(fun);