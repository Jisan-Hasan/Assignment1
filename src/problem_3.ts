function reverseArrayString<T>(...items:T[]):T[]{
    const reverseArray = items.reverse();
    return reverseArray;
}

const x = ['a', 'b', 'c']; //3 string
const y = ['p', 'q', 'r', 's', 't']; //5 sting

console.log(reverseArrayString(...x));
console.log(reverseArrayString(...y));