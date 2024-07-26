// function clickme(){
//     let myName = document.getElementById("name");
//     let myname2 = myName.value;
//     console.log(myname2);

// }

// const userDatials = {
//     fistName :"ahmed",
//     gender :"male",
//     dob :"12-15-2003",
//     getAge : function(){
//      const currentDate = new Date();
//      const dobDate = new Date (userDatials.dob);
//      const age = (currentDate.getFullYear()- dobDate.getFullYear())
//      console.log("you age is ",age);
//      }
// }
// userDatials.getAge();
// let myItem = document.querySelector("#item");
// let myitem2 = document.createElement("p");
// let item2Text = document.createTextNode("hello there")
// myitem2.appendChild(item2Text);
// myItem.appendChild(myitem2);
//  function Sum(a,b) {
//     return a+b;
//  }
//  let total = Sum(5,15)
// console.log(total
    
// );
// let a = {
//    fname : "ahmed",
//    lname : "jan",
//    fullnamene:function(){
//    return a.fname +" "+a.lname
//    }
// }
// console.log(a.fullnamene());
 
// function Student (Name,gender,nationality){
//    this.fname = Name;
//    this.gender = gender;
//    this.nationality = nationality;
// }
// student1 = new Student(
//    "ahmed",
//    "male",
//    "pakistam",
// )
// console.log(student1);
// function info( fname, id ,gender ){
//    this.name = fname;
//    this.id = id;
//    this.gender = gender}
// let mySelf = new info("Ahmed",6143,"male");

// console.log(mySelf);
// function demo(){
//  let xhhtp = new XMLHttpRequest();
//  xhhtp.onreadystatechange = function(){
//    if(this.readyState === 4 && this.status==200){
//      document.getElementById("demo").innerHTML= this.responseText; 
//    }
//  }


 
//  xhhtp.open("GET",'https://jsonplaceholder.typicode.com/todos/1')
//  xhhtp.send()
// }

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(function (resolve) { resolve.json()
}) 
.then(function(data){
    console.log(data);
})



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              