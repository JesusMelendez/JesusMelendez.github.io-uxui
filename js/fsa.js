

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  
const SOURCE = './js/fsa.json';


let datos;
//fetch
// Realizar solicitud GET a la API utilizando fetch
async function fsa(){
fetch(SOURCE)
  .then(response => {
    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error('Error al obtener los datos de la API');
    }
    // Parsear la respuesta como JSON

    return response.json();
  }).then(data => {
    data;

function s() {
    const spans = document.getElementsByTagName('span');

    for (let i = 0; i < spans.length; i++) {
        const spanText = spans[i].textContent.trim();
       
        if (data.hasOwnProperty(spanText)) {
            const correspondingKey = data[spanText];
            spans[i].setAttribute('title', correspondingKey);
        }
    }
};
s();
  })
  .catch(error => {
    // Capturar y manejar errores
    console.error('Se produjo un error:', error);
  });

};
fsa();

