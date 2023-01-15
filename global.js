
const k = globalThis.setTimeout(()=>{
    console.log("in the timeout");
}, 3000);

const funct = function (){
    console.log("hello");
}

const test = ()=>{
    console.log("inside arrow function");
}