const responsivo = {responsive: true, locale: 'es', displaylogo: false}


/*Pie*/


var data = [{
  values: [179,
    57,
    85,
    17
    ],
  labels: ['CARYBU Y',
    'DK-1050',
    'P3201',
    'P32T83'
    ],
  type: 'pie',
  automargin: true,
  hole: .4,
}];
  


Plotly.newPlot('variedades', data,responsivo);


// var y0 = [];
// var y1 = [];
// for (var i = 75; i < 85; i ++) {
// 	y0[i] = Math.random() * 12000;
// 	y1[i] = Math.random() * 8000;
// }

// var trace1 = {
//   y: y0,
//   type: 'box',

//   name:'Riego'
// };


// var trace2 = {
//   y: y1,
//   type: 'box',
//   name:'Temporal'
// };

// var layout = {
//   yaxis: {
//     title: 'Plantas / ha',
//     zeroline: false
//   }
// };

// var caja_bi = [trace1, trace2];

// Plotly.newPlot('boxplot', caja_bi,layout,responsivo);



var xValue = ['Plano', 'Surco'];

var yValue = [1.14,157.85];
var yValue2 = [179.4];

var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  name:'105000-108000',
  text: yValue.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  
};

var trace2 = {
  x: xValue,
  y: yValue2,
  type: 'bar',
  name:'100000-105000',
  text: yValue2.map(String),
  textposition: 'auto'
};





var data = [trace1,trace2];




Plotly.newPlot('densidad', data, responsivo);