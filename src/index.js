import "./style.css";

let body = document.querySelector("body");
let h1 = document.createElement("h1");
h1.setAttribute("id", "h1RedFont");
h1.classList.add("redFont");
h1.textContent = "This font should be red";
body.appendChild(h1);

let newDiv = document.createElement("div");
newDiv.setAttribute("id", "newDiv");
let p1 = document.createElement("p");
let testerFolderLink = document.createElement("a");
testerFolderLink.setAttribute("href", "../testerFolder/index.html");
testerFolderLink.textContent = "testerFolderLink";
p1.appendChild(testerFolderLink);
newDiv.appendChild(p1);
body.appendChild(newDiv);
