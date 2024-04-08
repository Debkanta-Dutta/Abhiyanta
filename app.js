localStorage.clear();
const localName = "name";
const totalBook = "totalBook";
let totalBookInp = document.querySelector("#bookNumber").value;
let totalBookBtn = document.querySelector("#totalBook");
let issueBookNo = document.querySelector("#isuBox").innerText;
let issueBookBtn = document.querySelector("#isuBtn").innerText;
let username = document.querySelector("#userName").innerText;
let userBtn = document.querySelector("#userBtn");
const localBookNo = "booksNo";
let arrBookNo = [issueBookNo];

totalBookBtn.addEventListener("click", () =>{
    console.log(totalBookInp);
    localStorage.setItem(totalBook,totalBookInp);
})

let arrLocalName = [username+issueBookNo]; 
userBtn.addEventListener("click", ()=>{
    localStorage.setItem(localName, arrLocalName);
   
})