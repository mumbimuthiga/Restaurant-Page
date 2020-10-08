const contact=document.createElement("button");
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

    
});
export default contactfxn;
