AOS.init();
AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

});


const servicios = document.querySelectorAll('.menu-servicio')
let servicioActivo = null
const descripcionServicios = document.querySelectorAll('.descripcion-servicio')
document.addEventListener('DOMContentLoaded', () => {
    agregarAtributoServicios()
    // iniciarApp();
    // eventosFormulario();
    // addEventoBoton();
    // scrollNavegacion();
});

function agregarAtributoServicios() {

    servicios.forEach(servicio => {
        servicio.addEventListener('click', (e) => {
            servicios.forEach(elemento => {
                elemento.classList.remove('servicio-activo');
                console.log(e.currentTarget.getAttribute("data-servicio"));
            });
            //agregamos la clase de servicio-activo, a lo que el usuario le de click
            e.currentTarget.classList.toggle('servicio-activo');
            servicioActivo = servicio.dataset.servicio;


            descripcionServicios.forEach(descripcion => {
                if (descripcion.dataset.servicio === servicioActivo) {
                    descripcion.classList.add('descripcion-activa');

                } else {
                    descripcion.classList.remove('descripcion-activa');
                }
            });

        });
    });
}


function scrollNavegacion() {
    const enlaces = document.querySelectorAll('.navegacion a');
    // console.log(enlaces)

    enlaces.forEach(function (enlace) {
        //para poder darle un evento a multiples elementos, primero debemos iterarlo
        enlace.addEventListener('click', function (e) {
            const atributo = e.target.attributes.href.value
            //  console.log(typeof atributo)
            if ( atributo.includes('.html') ) return
            e.preventDefault(); //para que no haga la funcion por default

            const seccion = document.querySelector(e.target.attributes.href.value);
            console.log(seccion)

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        })
    });
}
scrollNavegacion()

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000
valueDisplays.forEach(( valueDisplay ) => {
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
});

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});


function menuHamburguesa() {
	const nav = document.querySelector('#hamburguesa button');
	const navegacionNormal = document.querySelector('.navegacion');
	const enlaces = document.querySelectorAll('.navegacion a');
	const btnMenuMovil = document.querySelector('.menu-movil button');

	nav.addEventListener('click', e =>{
		
		//.toggle, lo que hace es añadir la clase si no esta o desaparecerla si, si lo esta
		nav.classList.toggle('abrir')
		navegacionNormal.classList.toggle('abrir')
		
		
	});	
	//cuando en un elemento hay multiples nodos, debemos iterarlo para agregarle un evento
	enlaces.forEach( enlace =>{
		
		enlace.addEventListener('click', e =>{

			if(e.target.tagName === 'A'){
				navegacionNormal.classList.remove('abrir')
				btnMenuMovil.classList.remove('abrir')
			}
		})
	})
}

menuHamburguesa()