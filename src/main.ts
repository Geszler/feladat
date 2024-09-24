import './style.css'

const jegyek: number[]=[];

document.addEventListener("DOMContentLoaded",()=>{
  let inpuElement = document.getElementById("bemenet") as HTMLInputElement;
  const kereso = document.getElementById("kereso");
  const hozzaad = document.getElementById("hozzaad");

  document.getElementById("hozzaadas")!.addEventListener('click',() =>{
  const jegyeErtek = parseInt(inpuElement.value)
  jegyek.push(jegyeErtek);
    console.log(jegyek);
  })
})