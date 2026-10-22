/*let numbers = [1, 2, 3, 4, 5, 6, 'eight', true];
console.log(Array.isArray(numbers));
console.log(numbers[0]);
console.log(numbers.length);
numbers[0] = 1;
console.log(numbers[0]);
let newnumbers = numbers;
newnumbers = newnumbers.push(7);
console.log(numbers);


//objects

let fruits = {name: "apple", color: "red", calories: 36};

let key = 'color';
console.log(fruits.key);
fruits.type = 'type of apple';
fruits.calories = 134;
console.log(fruits);

*/

// fruits again

let numbers = [1, 2, 3, 4];
numbers.forEach(item => console.log(item*2));

let doublenumber = numbers.map(item => item * 2);
console.log(doublenumber);

let findnumber = numbers.find(item => item > 2);
console.log(findnumber);

let filternumbers = numbers.filter(item => item > 2);
console.log(filternumbers);
