
const home=document.createElement("button");
home.innerHTML="Home";
 const homefxn=home.addEventListener('click' ,()=>{
    const p=document.createElement("table");
    const tr=document.createElement("tr");

    tr.textContent="This is a Home Tab";
    p.appendChild(tr)
    div.appendChild(p);
})
export default homefxn;