1. What is TypeScript, and how is it different from JavaScript?
    TypeScript is basically a superset of javascript. Each and every valid javascript code is valid in javascript. It introduces optional static typing to JavaScript, allowing developers to add type annotations to their code. This helps detect type-related errors during development.

2. Can you explain the difference between "interface" and "type" in TypeScript?
    Both are used to define the shape/structure of object or funnction signatures. Interfaces can be used to define object types, class shapes, or function signatures. Type aliases, created using the type keyword, allow you to create a new name for a type. They can represent a wide range of types, including primitives, unions, intersections, tuples, and more. Types are more flexible than interfaces and can perform operations like union, intersection, and mapped types.

3. Can you give an example of how to use generics in TypeScript?
    ```
    function typeCheck<T>(a: T): void {
        console.log(typeof a);
    }

    typeCheck(5);
    typeCheck('abc');
    ```
    here in typecheck function parameter a's type will be determine in run time. if we pass interger when call then it will be integer , if we pass boolean then it will be boolean.

5. Can you give an example of how to use enums in TypeScript?
    ```
    enum Color {
        Red = 'red',
        Green = 'green',
        Blue = 'blue'
    }
    let favoriteColor: Color = Color.Red;
    ```
    Enums provide a way to define a set of named constants that can be used to represent a fixed set of values. It help to improve the readability and maintainability of our code.

6. What is the "as" keyword used for in TypeScript?
    The "as" keyword is used for type assertions. It allows you to explicitly inform the TypeScript compiler about the intended type of a value, overriding its default type inference.
    ```
    let x = 'Jisan Hasan';
    let y = x as string;
    let z = 5 as number;
    ```
    
    Can't solve this problem. Thats why submitting the code in my personal repo.
<image src='error.jpg'/>