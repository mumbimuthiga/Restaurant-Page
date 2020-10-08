import {contactfxn} from './contactmodule';
import {homefxn} from './homemodule';
import {menufxn} from './menumodule';
const div=document.querySelector("#content");
const tabdiv=document.createElement("div");
const imgdiv=document.createElement("div");
imgdiv.classList="imagesClass";
tabdiv.classList="tabClass";











































































































//Tabs/Button

//Images 
/*const img=document.createElement('img');
img.src="../images/rest.jpg";
const img2=document.createElement('img');
img2.src="../images/rest1.jpeg";
imgdiv.appendChild(img);
imgdiv.appendChild(img2);*/
//div.appendChild(imgdiv);
//Home Menu
/*const home=document.createElement("button");
home.innerHTML="Home";
 const homefxn=home.addEventListener('click' ,()=>{
    const p=document.createElement("table");
    const tr=document.createElement("tr");

    tr.textContent="This is a Home Tab";
    p.appendChild(tr)
    div.appendChild(p);
})*/

//Contact tab
/*const contact=document.createElement("button");
contact.innerHTML="Contact";
 const contactfxn=contact.addEventListener('click' ,()=>{
    const p=document.createElement("table");
    const tr=document.createElement("tr");

    tr.textContent="This is a Contact Tab";
    const fb=document.createElement("img");
    fb.src="../images/circle.jpg"
    p.appendChild(tr);
    p.appendChild(fb);
    div.appendChild(p);

    
});*/
/*
//Menu Tab
const menu=document.createElement("button");
menu.innerHTML="Menu";
 const menufxn=menu.addEventListener('click' ,()=>{
    const table=document.createElement("table");
    const th=document.createElement("th");
    const tr=document.createElement("tr");
    //First Item
    th.innerHTML="Potato Salad";
    tr.innerHTML=`The irresistable goodness of this creamy dish will be sure to clog your arteries in no time flat. Puresome, wholesome
	ingredients including homemade mayonayse, russet potatoes, and locally grown chives. Served with a side of butter and
	your choice of soup.`
    table.appendChild(th);
    table.appendChild(tr);

    //Second Item
    const th1=document.createElement("th");
    const tr1=document.createElement("tr");
    //Second Item
    th1.innerHTML="Wedge Salad";
    tr1.innerHTML=`Iceburg lettuce quarter served with sliced cucumbers, carrots, red onion alongside garden-fresh tomatoes served with
    your choice of dressing.`
    table.appendChild(th1);
    table.appendChild(tr1);
    //Third Item 
    
    const th3=document.createElement("th");
    const tr3=document.createElement("tr");
    //Third Item
    th3.innerHTML="CaesarSalad";
    tr3.innerHTML=`The original. Classic Caesar Salad: Crunchy romaine lettuce served with Caesar dressing, garden-fresh tomatoes, and homemade
    garlic croutons.`
    table.appendChild(th3);
    table.appendChild(tr3);
    
    div.appendChild(table);
  
    
    //table.style(background-color:blue");
})*/
/*tabdiv.appendChild(home);
tabdiv.appendChild(contact);
tabdiv.appendChild(menu);*/

//div.appendChild(tabdiv);



