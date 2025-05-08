function formatString(input: string, toUpper?: boolean):string{

   if(toUpper || toUpper === undefined){
        return input.toUpperCase();
       
    }
    else{
        return input.toLowerCase();
        
    }

}

console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));








function filterByRating(items: {title :string, rating : number}[]): {title :string, rating : number}[]{
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





  function concatenateArrays<T>(...arrays : T[][] ) : T[]{
    const concatenatedArray = arrays.reduce((acc, array) => acc.concat(array), [] as T[]);
    console.log(concatenatedArray);
    return concatenatedArray;
}

concatenateArrays(["a", "b", "d"], ["c"]);      
concatenateArrays([1, 2], [3, 4], [5]); 








class Vehicle{
    private make: string;
    year : number;
    
    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }
    getInfo(): string{
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle{
    private model : string;

    constructor(make:string, year: number, model: string){
        super(make, year);
        this.model = model;
    }

    getModel():string{
        return `Model : ${this.model}`;
    }
   

}

const car = new Car("Toyota", 2020, "Corolla");

console.log(car.getInfo());
console.log(car.getModel());









function processValue(value : string | number): number{
    if(typeof value =="string"){
        console.log(value.length)
        return value.length;
    }

    else{
        console.log(value*2)
        return value*2;
    }
}
processValue("hello");
processValue(10);














interface Product {
    name :string;
    price: number; }

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    let expensive = products[0]
    for(let i=1; i < products.length; i++){
        if(products[i].price > expensive.price){
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






 
   



   enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  function getDayType(day : Day): string{
    if (day === Day.Monday || day === Day.Tuesday || day === Day.Wednesday || day === Day.Thursday || day === Day.Friday) {
        console.log("Weekday")
        return "Weekday";
    } else  {
        console.log("Weekend")
        return "Weekend";
    }
  }

  getDayType(Day.Monday);  
  getDayType(Day.Sunday); 









  async function squareAsync(n : number): Promise<number> {
   return new Promise((resolve, reject) => {
    if(n<0){
        reject("Negative number not allowed");
    }
    else{
        setTimeout(() => resolve(n*n), 1000);
    }
   })
  }


  squareAsync(4).then(console.log);
   
squareAsync(-3).catch(console.error);