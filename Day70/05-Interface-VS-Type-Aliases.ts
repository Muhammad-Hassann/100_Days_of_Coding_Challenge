// Extending and Implementing:

// Interface
interface AnimalExInterface {
    type: string;
  }
  
  interface Dog extends AnimalExInterface {
    bark(): void;
  }
  
  class Labrador implements Dog {
    type: string = "dog";
    bark() {
      console.log("Woof!");
    }
  }

// Type Alias

type AnimalExType = {
    type: string;
  };
  
  type Monkey = AnimalExType & {
    bark(): void;
  };
  
  const labrador: Monkey = {
    type: "monkey",
    bark() {
      console.log("Woof!");
    },
  };

//   Compatibility

// Interface: Supports declaration merging.
interface Car {
    brand: string;
  }
  
  interface Car {
    model: string;
  }
  
  const myCar: Car = {
    brand: "Toyota",
    model: "Camry",
  };

//   Type Alias: Does not support declaration merging.