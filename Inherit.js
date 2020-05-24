// In node,prototype means Inheritence 
function Student (){
    this.name="Pankaj_Tomar"
    this.age="20"    
}

Student.prototype={
    address:"Delhi"      // added address in Student function() after inheritence.
}

const stud = new Student();  // made object of student () function

console.log(stud.address)

