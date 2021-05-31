export const people = [
    {
        id: "6",
        name: "Seungyeon",
        age: 18,
        gender: "F"
    },
    {
        id: "5",
        name: "Jisu",
        age: 18,
        gender: "M"
    },
    {
        id: "4",
        name: "Jiyeon",
        age: 30,
        gender: "M"
    },
    {
        id: "3",
        name: "Suyeon",
        age: 28,
        gender: "F"
    },
    {
        id: "2",
        name: "SSujeong",
        age: 20,
        gender: "F"
    },
    {
        id: "1",
        name: "SSo",
        age: 18,
        gender: "M"
    }
];

export const getByid = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}