const propiedades = document.querySelector('.propiedades');

const form        = document.querySelector('#form');
const btnBuscar   = document.querySelector('#buscar');

const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];

  btnBuscar.addEventListener("click", (e) =>{
    console.log('hola entre')
    e.preventDefault();

   

    const cantCuartosInput = document.querySelector('#cantCuatos');
    const desdeInput       = document.querySelector('#desde');
    const hastaInput       = document.querySelector('#hasta');

    const cantC  = cantCuartosInput.value;
    const des    = desdeInput.value;
    const has    = hastaInput.value; // no me funciona el value la verdad no entiendo el por que no
                                     // me imagino que quizas me falta algun tipo de compatibilidad con js la verdad no se
                                     // lo que sigue de ejercicio lo realice segun teoria ya que lamentablmente no me funciono ya que no me 
                                     // me lanza un problema con los value mil disculpas, y ojala me pueda ayudar con respecto a esto       
//    console.log(cantC)

   
  for (let dep of propiedadesJSON){

    if(dep.rooms <= cantC && dep.m >= desde && dep.m <= hasta)
    {
    console.log(dep)
    propiedades.innerHTML += `
    <div class="propiedad">
        <div class="img" style="background-image: url('${dep.src}')"></div>
          <section>
              <h5>${dep.name}</h5>
              <div class="d-flex justify-content-between">
                  <p>Cuartos: ${dep.rooms}</p>
                  <p>Metros: ${dep.m}</p>
              </div>
              <p class="my-3">${dep.description}</p>
              <button class="btn btn-info ">Ver más</button>
          </section>
    </div>
    `; 
    } 
  }

    
  });


  for (let dep of propiedadesJSON){

    propiedades.innerHTML += `
    <div class="propiedad">
        <div class="img" style="background-image: url('${dep.src}')"></div>
          <section>
              <h5>${dep.name}</h5>
              <div class="d-flex justify-content-between">
                  <p>Cuartos: ${dep.rooms}</p>
                  <p>Metros: ${dep.m}</p>
              </div>
              <p class="my-3">${dep.description}</p>
              <button class="btn btn-info ">Ver más</button>
          </section>
    </div>

    `; 
  }
  