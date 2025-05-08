function formatString(input: string, toUpper?: boolean):string{

   if(toUpper || toUpper === undefined){
    console.log(input.toUpperCase());

        return input.toUpperCase();
       
    }
    else{
        console.log(input.toLowerCase());
        return input.toLowerCase();
        
    }

}







function filterByRating(items: {title :string, rating : number}[]): {title :string, rating : number}[]{
    const filteredItems = items.filter(item => item.rating > 4);
   console.log(filteredItems);
   return filteredItems;
}


 




  function concatenateArrays<T>(...arrays : T[][] ) : T[]{
    const concatenatedArray = arrays.reduce((acc, array) => acc.concat(array), [] as T[]);
    console.log(concatenatedArray);
    return concatenatedArray;
}






class Vehicle{
    private make: string;
    year : number;
    
    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }
    getInfo(): void{
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle{
    private model : string;

    constructor(make:string, year: number, model: string){
        super(make, year);
        this.model = model;
    }

    getModel():void{
        console.log(`Model : ${this.model}`);
        
    }
   

}










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
console.log(expensive);
return expensive;
    }







 
   



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


