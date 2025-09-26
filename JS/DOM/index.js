// console.log("Hello World");
//  const div=document.getElementsByTagName('div');
 
// //  dic[0]
// div[0].innerText="Hello World";
// div[0].style.color="red";
// div[0].style.backgroundColor="black";

// console.log(div);
// const div = document.getElementByClassName('container');
const div = document.getElementsByClassName('container');
div[0].innerHTML = `<h2 style=color:red >Hii I am using DOM</h2>`;
    console.dir(div);
    const h2=document.createElement('h2');
    h2.innerText="Hello I am using DOM";
    h2.style.backgroundColor="yellow";
    console.log(h2);
    div[0].appendChild(h2);

    const img=document.createElement('img');
    img.src="dw.jpg";
    img.setAttribute("width","200px");
    img.setAttribute("height","200px");
    div[0].appendChild(img);
    console.log(img);
    const button=document.getElementById('btn');
    function displayDate(){
        console.log("Hii inside ");
    }
    

 
