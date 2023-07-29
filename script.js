
const hambar = document.getElementsByClassName("hambar")[0];
const cross =  document.getElementsByClassName("cross")[0];
hambar.addEventListener("click" , ()=>{
    const navItem = document.getElementsByClassName("nav-items")[0];
    hambar.classList.toggle("active");
    cross.classList.toggle("active");
    navItem.classList.toggle("active");
})