console.log("Hello World");
// console.log("hello world");

// let name = "hbd";
// console.log(name);

// let a = "20";

// if(a== 20){
//     console.log("equal");
// }
// else{
//     console.log("not equal");
    
// }

// const myname = "rahul";
// const data = "hello";
// console.log(data);

// const data = function msg(name){
//     return name ="welcome to js";
// }

// // const data = msg("ram"){
// //     console.log(data);
    
// // }
// const msg = data("rahul");
// console.log(msg);

// const data =(myname)=>{
//     console.log("hello___brother "  + myname);
    
// }
// data("ram");

// (()=>{
//     console.log("hello welcome");
    
// })();

// setTimeout(()=>{
//     console.log("ghar ja apne");
    

// },3000);
// function greetings(msg="welcome"){
//     console.log("hii"+msg);
    
// }
// greetings("brother");
function selectLanguage(lang){
    let data;
    if(lang=='java'){
        function javacompiler(){
            return "java selected";
        }
        data = javacompiler();
    }else if(lang=='c'){
        function ccompiler(){
            return "c selected";
        
    }
    data = ccompiler();
}
else{
    data="no such compiler available";
}
return data;
}
// selectLanguage('java');
console.log(selectLanguage('java'));
console.log(selectLanguage('python'));

