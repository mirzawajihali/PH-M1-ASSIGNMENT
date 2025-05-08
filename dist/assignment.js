"use strict";
function formatString(input, toUpper) {
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
function filterByRating(items) {
    const filteredItems = items.filter(item => item.rating > 4);
    console.log(filteredItems);
    return filteredItems;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
filterByRating(books);
function concatenateArrays(...arrays) {
    const concatenatedArray = arrays.reduce((acc, array) => acc.concat(array), []);
    console.log(concatenatedArray);
    return concatenatedArray;
}
concatenateArrays(["a", "b", "d"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model : ${this.model}`;
    }
}
const car = new Car("Toyota", 2020, "Corolla");
console.log(car.getInfo());
console.log(car.getModel());
function processValue(value) {
    if (typeof value == "string") {
        console.log(value.length);
        return value.length;
    }
    else {
        console.log(value * 2);
        return value * 2;
    }
}
processValue("hello");
processValue(10);
