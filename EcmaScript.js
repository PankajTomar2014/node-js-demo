// ECMA Script or ES6 2015

// let is scope variable,can't declare again with same name.
var g= 50     // var variable can declare any whare,its override the value at second time
var g=60
console.log("g=>>",g)

let a=20
function abc(){
 let a= 30
 console.log("a=>>",a)
}
console.log("a=>>",a)
abc();

const details={   // const is constant variable,it can't change 
    "name":"Pankaj_Tomar",
    "age":22
}

details.address="Delhi"   //this is the way,that can add somthing in const variable
details.age=20   // we can change value of const variable by this technic
details.education={"MCA":"2019","BCA":"2014"}  // we can add also an object in const variable
console.log("details=->>",details)
