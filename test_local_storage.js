const brand = "Renault";
const model = "Clio";
const year = 2018;

// Create a new object

// the structure of the object is defined by the keys and values
// const nameOfObject = {
//   key1: value1 ** can be string | array | function | object | number | boolean ),
// }

const car = {
  brand: brand,
  model: model,
  year: year,
};

const brandOfMyCar = car.brand; // Renault
const modelOfMyCar = car.model; // Clio
const yearOfMyCar = car.year; // 2018

// Add object to the array
const listOfCar = [car]
console.log(listOfCar)

// Save the array to local storage
localStorage.setItem(car1, JSON.stringify(listOfCar))

// Get the array from local storage and show it in the console
const readFromLocalStorage = localStorage.getItem(car1)
console.log(readFromLocalStorage)




