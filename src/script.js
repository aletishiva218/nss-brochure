let imagesContainer = document.querySelector(".images-container");
for(let i = 1;i<=12;i++)
{
let a = document.createElement("a");
a.href=`assets/images/${i}.jpg`;
a.setAttribute("download","")
let img = document.createElement("img");
img.src=`assets/images/${i}.jpg`;
a.appendChild(img)
imagesContainer.appendChild(a)
}