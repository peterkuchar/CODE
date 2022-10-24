// Fundamental types

let sales: number = 123_456_789;        //Number
let course: string = 'Typescript';      //String
let is_published: boolean = true;       //Boolean
let level;                              //ANY

/////////////////////////////////////////////////////////

// ANY //

level = 1;
level = 'a';

// function render(document) {
//     console.log(document);
// }

//////////////////////////////////////////////////////////

// ARRAY

let numbers: number[] = [];
numbers.forEach(n => n.toExponential)

let user: [number, string, boolean] = [31, 'Peter', true];

////////////////////////////////////////////////////////////

// ENUMS

const small = 1;
const medium = 2;
const large = 3;

// PascalCase

const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);


////////////////////////////////////////////////////////////

// Functions

function calculateTax(income: number, taxYear = 2022): number {    
    if ( taxYear < 2022 )
        return income * 1.2;
        return income * 1.3;
}

calculateTax( 10_000 )


////////////////////////////////////////////////////////////

// Objects

let employee: {
    id: number,
    name: string,
    retire: ( date: Date ) => void
} = { 
    id: 1, 
    name: 'Peter',
    retire: (date: Date) => {
        console.log(date);
    }
 };

////////////////////////////////////////////////////////////

// Advanced objects

// type Employee = {
//     id: number,
//     name: string,
//     retire: ( date: Date ) => void
// }

// let employee: Employee {
//     id: 1, 
//     name: 'Peter',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }

// employee();

////////////////////////////////////////////////////////////

// Union Types

function kgToLbs(weight: number | string): number {
    // Narrowing
    if ( typeof weight === 'number' ) 
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2
}

kgToLbs(10);
kgToLbs('10kg')


////////////////////////////////////////////////////////////

// Intersection Types

// let weight: number & string;        // imposible

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

////////////////////////////////////////////////////////////

// Literal types

type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';

////////////////////////////////////////////////////////////

// Nullable types

function greet( name: string | null | undefined ) {
    if ( name )
        console.log(name.toUpperCase());
    else
        console.log('Hey');
}

greet(null);

////////////////////////////////////////////////////////////

// Optional chaining

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// if ( customer !== null && customer !== undefined )

// Optional property access operator

console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

//  Optional call

let log: any = null;
log?.('a');
