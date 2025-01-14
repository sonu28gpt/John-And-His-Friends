/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((el)=>{
    if(el.profession=='developer'){
      console.log(`id : ${el.id},name : ${el.name}, age : ${el.age}, profession : ${el.profession}`)
    }
    
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((el)=>{
    if(el.profession=='developer'){
      console.log(`id : ${el.id},name : ${el.name}, age : ${el.age}, profession : ${el.profession}`)
    }
    
  })
}

function addData() {
  //Write your code here, just console.log
  let obj={id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(obj);
  arr.forEach((el)=>{
    
      console.log(`id : ${el.id},name : ${el.name}, age : ${el.age}, profession : ${el.profession}`)
    
    
  })
}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter((el)=>{
    return el.profession!='admin';
  })
  arr.forEach((el)=>{
    
    console.log(`id : ${el.id},name : ${el.name}, age : ${el.age}, profession : ${el.profession}`)
  
  
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2=[
    { id: 7, name: "sonu", age: "18", profession: "developer" },
    { id: 5, name: "jack", age: "20", profession: "developer" },
    { id: 6, name: "karen", age: "19", profession: "admin" },
  ]
  let concatenateArray=arr.concat(arr2);
  concatenateArray.forEach((el)=>{
    
    console.log(`id : ${el.id},name : ${el.name}, age : ${el.age}, profession : ${el.profession}`)
  
  
  })
}
