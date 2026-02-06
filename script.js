// //Satyam Singh

// // to draw table

// // let students={ name:"satyam",age:21,course:"cse"};
// // console.table(students);

// // to print something
// // console.log("hello ")

// // console.time("test");
// // for (let i=0;i<10000;i++){}

// //     console.timeEnd("test");


// // console.group("cse24");
// // console.log("name:ravi");
// // console.groupEnd();

// // console.count("click");
// // console.count("click");
// // console.count("click");


// // console.dir(document.body);
// function add (p,q){
//     return p+q
// }
//  console.log(add(10,20));
//  //arrow function
//  const multiply = (p,q)=>p*q
//  console.log("arrow function", multiply(5,5))
//  //array
//  let arr = [10,20,30,40]
//  console.log(arr[0])
//  arr.push(20)
//  arr.pop()
//  console.log(arr)
//  let student={
//     name:"vikassss",
//     age:20,
//     course:"b tech",

//  };
//  let today= new Date()
//  console.log(today)
console.log(Math.pow(2,5))
text ="hello mhsdmd"
console.log(text.length)
console.log(text.toUpperCase())
console.log(text.includes("java"))
let strnum = "123"
let convert = Number(strnum)
console.log(convert)
console.log(strnum)
console.log(isNaN("abc"))
console.log(isNaN(123))
setTimeout(()=>{
    console.log("executed after 2 seconds");
},2000)
try{
    let result =x/0
    console.log(result)

}
catch(error){
    console.log("error")
}