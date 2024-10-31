// let arr=[1,3,4,6]
// let aarB=arr

// console.log(arr)
// aarB[1]=10
// console.log(aarB)
// console.log(arr)

// // let obj1={
// //     name:"Hammad"
// // }

// // let obj2=obj1
// // console.log(obj1)
// // obj2.age=12
// // console.log(obj2)
// // console.log(obj1)

// // delete obj2.age
// // console.log(obj1)
// // console.log(obj2)

// // delete obj1
// // console.log(obj1)
// // console.log(obj2)

// // let arr=[1,5,8,10,22]
// // arr.splice(1,2,4,6)
// // console.log(arr);

// // let flag=true
// // let flag2=flag

// // console.log(flag)
// // flag2=false
// // console.log(flag2)
// // console.log(flag)

// // let flag=1
// // let flag2=flag

// // console.log(flag)
// // flag2=2
// // console.log(flag2)
// // console.log(flag)

// function he(a,b){
//     console.log(arguments)
// }
// he(1,2)

// function sayHi() {   // (1) create
//     alert( "Hello" );
//   }
  
//   let func = sayHi;    // (2) copy
  
//   func(); // Hello     // (3) run the copy (it works)!
//   sayHi(); // Hello 


function count2(){
    let counter=0
    return function(){
        return counter++
    }
}

function count(){
    let counter =0
    return ++counter
}
let cnt=count2()

let counter=count()

for (let i=1;i<10;++i){
    console.log("Closure func")
    console.log(cnt())
    console.log("Normal func")
    console.log(counter)
}