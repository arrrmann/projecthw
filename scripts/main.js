const cars = [{
    name: "model 3",
    info:"common bought",
    image: "../images/model3.jpg",
    },
 {  name: "model x",
    info:"for family",
    image: "../images/modelx.jpg" },
 {
     name: "model y",
     info:"for work",
     image: "../images/modely.webp"
 }];
 let root = document.querySelector('body');
 for(let car of cars){
     let container = document.createElement('div');
container.className = "type";

let name = document.createElement("h2");
name.innerHTML = car.name;
container.appendChild(name);

let photo = document.createElement('img');
photo.src = car.image;
container.appendChild(photo);

let info = document.createElement("p");
info.innerHTML = car.info;
container.appendChild(info);

let link=document.createElement("a")
 link.href="buypage.html"
 link.innerHTML=container.innerHTML
container.appendChild(link);

root.appendChild(container);}