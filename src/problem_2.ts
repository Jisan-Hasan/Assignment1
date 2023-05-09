interface People{
    name: string;
    age: number;
}

function filterPerson(peoples:People[]):People[]{
    const filteredPeoples = peoples.filter(people=>people.age >= 18);
    return filteredPeoples;
}

/*
console.log(filterPerson(
    [
        {
            name: 'Jisan',
            age: 23,
        },{
            name: 'x',
            age: 18
        },{
            name: 'y',
            age: 15
        }
    ]
))
*/