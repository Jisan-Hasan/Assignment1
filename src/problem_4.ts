class Person{
    constructor(private name:string,private age: number){}
    public getDetails():string{
        return `Name: ${this.name}, age: ${this.age}`;
    }
}

class Student extends Person{
    constructor(name:string,age: number, private grade: string){
        super(name,age);
    }
    public getGrade():string{
        return `Grade: ${this.grade}`;
    }
}