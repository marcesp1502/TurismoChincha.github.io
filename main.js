window.addEventListener("scroll", function(){
    var encabezado = document.querySelector("nav");
    encabezado.classList.toggle("abajo", window.scrollY>0);
})

// creamos la variable para almacenar el elemento btnscroll por su id
const btn_scrolltop = document.getElementById("btn_scrolltop");
// agregamos un evento listener
btn_scrolltop.addEventListener('click', ()=>{
    // el windows.scrollto, nos permite seleccionar la pantalla y scrollear a la direccion con los parametros que le pasemos (con 0,0 vamos a arriba del todo)
    // tambien podemos poner: top: 0, behavior: "smooth";
    // para que vaya lento hacia arriba, o hacerlo directamente en el css
    window.scrollTo(0,0);
})
// Con esto captura el movimiento del scroll vertical
window.onscroll = () => {
   add_btn_scrolltop();
}

// Tambien podemos guardar todo el codigo en una funcion y llamarla arriba
const add_btn_scrolltop = () =>{
    // le decimos que si es menor a 300 la posicion Y del scroll
    // le remueve esa clase (la cual hace con el css que aparezca); y sino, lo agrega
    if (window.scrollY < 300 ) {
        btn_scrolltop.classList.remove("btn-scrolltop-on");
    }else{
        btn_scrolltop.classList.add("btn-scrolltop-on");
    }
    // Con esto podemos ver en la consola, en que posicion en Y esta el scroll
    // console.log(window.scrollY);
}
