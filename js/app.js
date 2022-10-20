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


  (async () => {

    const respuestaEstados = await fetch(
        'https://code.highcharts.com/mapdata/countries/mx/mx-all.topo.json'
    ).then(response => response.json());


    const estados = [
         ['mx-ve', 27]
    ];

	console.log( estados )

    Highcharts.mapChart('mapa', {
        chart: { map: respuestaEstados },
		
		title: { text: ''},
        
		mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: estados,
            name: 'Estamos en todo el estado',
            states: {
                hover: {
                    color: '#192b4b'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

})();


const servicios = document.querySelectorAll('.menu-servicio');
let servicioActivo = null;
const descripcionServicios = document.querySelectorAll('.descripcion-servicio');
document.addEventListener('DOMContentLoaded',()=>{
    agregarAtributoServicios();
    // iniciarApp();
    // eventosFormulario();
    addEventoBoton();
    scrollNavegacion();
});

function agregarAtributoServicios(){

    servicios.forEach(servicio =>{ 
       servicio.addEventListener('click', (e) =>{
           servicios.forEach(elemento =>{
             elemento.classList.remove('servicio-activo');
             console.log(e.currentTarget.getAttribute("data-servicio"));
           });
           //agregamos la clase de servicio-activo, a lo que el usuario le de click
           e.currentTarget.classList.toggle('servicio-activo');
           servicioActivo = servicio.dataset.servicio;


           descripcionServicios.forEach(descripcion =>{
               if(descripcion.dataset.servicio === servicioActivo){
                   descripcion.classList.add('descripcion-activa');
                   
               }else{
                   descripcion.classList.remove('descripcion-activa');
               }
           });

       });  
    });
}


function scrollNavegacion (){
    const enlaces = document.querySelectorAll('contenedor-menu-servicios a');
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click', e =>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior:'smooth'
            });
        });
    });
}