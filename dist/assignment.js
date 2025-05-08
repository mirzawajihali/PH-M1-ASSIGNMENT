"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let expensive = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].price > expensive.price) {
            expensive = products[i];
        }
    }
    return expensive;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 500 }
];
console.log(getMostExpensiveProduct(products));
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Monday || day === Day.Tuesday || day === Day.Wednesday || day === Day.Thursday || day === Day.Friday) {
        console.log("Weekday");
        return "Weekday";
    }
    else {
        console.log("Weekend");
        return "Weekend";
    }
}
getDayType(Day.Monday);
getDayType(Day.Sunday);
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (n < 0) {
                reject("Negative number not allowed");
            }
            else {
                setTimeout(() => resolve(n * n), 1000);
            }
        });
    });
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
