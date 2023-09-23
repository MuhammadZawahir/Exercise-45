//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car(Company:string, Name:string, Model:number, Colour:string, Feature?:string):any{
    return {
        Company: Company,
        Name: Name,
        Model: Model,
        Colour: Colour,
        Feature: Feature
    }
}
let mycar:any=car("Toyota", "Corolla", 2016, "White", "Sunroof");
console.log(mycar);


//OPENAI


// interface CarInfo {
//     manufacturer: string;
//     modelName: string;
//     [key: string]: any;
//   }
  
//   function createCar(manufacturer: string, modelName: string, ...args: any[]):CarInfo {
//     const car: CarInfo= {
//       manufacturer,
//       modelName,
//     };
  
//     // Process additional keyword arguments
//     for (let i = 0; i < args.length; i += 2) {
//       const key = args[i];
//       const value = args[i + 1];
//       car[key] = value;
//     }
  
//     return car;
//   }
  
//   // Example usage:
//   const myCar = createCar("Toyota", "Camry", "color", "blue", "year", 2023, "optionalFeature", "Sunroof");
//   console.log(myCar);
  
  
