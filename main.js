// let form = () =>{
// let inputText = document.querySelector(".form-control input");
// let labelText = document.querySelector(".form-control label");

// inputText.addEventListener("focusin", (e)=> {
// labelText.classList.add("active");
// });

// inputText.addEventListener("focusout", (e) => { 
//     if(inputText.value.length == 0)
//     labelText.classList.remove("active");
// });
// };

// form();





let first = document.querySelector("input");
first.addEventListener('input', wave => {
    if (wave.target.value) {  //devuelve el elemento del DOM que dispara el evento desde un principio 
        wave.target.classList.add('active') 
    } else {
        wave.target.classList.remove('active')
    }
});