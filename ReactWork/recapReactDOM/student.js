const parent =document.getElementById('parent');
console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2", {style:{color:'white', backgroundColor:'brown'}}, "Welcome To React App!");
root.render(h2);
 const picture = React.createElement(
        "img",
        {
          src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          alt: "Nature Image",
          style: {
            width: "300px",
            height: "200px",
            borderRadius: "10px",
            marginTop: "15px"
          }
        }
      );
const names = React.createElement("h2", {style:{}}, "Student Name: Yashika Keshari");
const branch = React.createElement("h2", {style:{}}, "Branch: Computer Science");
const section = React.createElement("h2", {style:{}}, "Section: B");
const college = React.createElement("h2", {style:{}}, "College:ABES Engineering College");
      const borderedDiv = React.createElement(
        "div",
        {
          style: {
            border: "3px solid brown",
            width: "fit-content",
            margin: "20px auto",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "bisque",
            textAlign: "center"
          }
        },
        
        picture ,
        names,
        branch,
        section,
        college
      );

      root.render(borderedDiv);