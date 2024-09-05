const t2 = './js/t2.json';

/****  main functions *****/

//fetch
async function getJson2(liga){
    let response = await fetch(liga);
    let datos = await response.json();
    return datos;
};

function arregloYears2(arregloUnido){
    let x = [];
    arregloUnido.map(function(obj){
  
       x = x.concat(obj.TIME_PERIOD);
    })
    let unicos = Array.from(new Set(x))
    return unicos;
  }
  
function crearOpciones2(arregloYear,Dropdown){

for (let i = 0; i < arregloYear.length; i++){
    let year = arregloYear[i];
    let option = document.createElement('option');
    option.textContent = year;
    option.value=year;
    Dropdown.appendChild(option);

    }

}



// const add2 = function(arr) {
//     return arr.reduce((a, b) => a + b, 0);
// };



const responsivo = {responsive: true, locale: 'es', displaylogo: false}

 /*Pie*/

async function nHidridos(){
    let API = await getJson2(t2);
    let kpi_set = API.KPI_SET[0].OBSERVATIONS;
    let kpi_base = kpi_set[0].RESULTS;



  valores = []
  etiquetas = []
  for (let obs of kpi_base){
    valores.push(obs.val)


  }
  for (let eti of kpi_base){
    etiquetas.push(eti.seed)
  }


//   Plotly.newPlot('variedades', data,responsivo);

data =[{
    values: valores,
    labels: etiquetas,
    type: 'pie',
    automargin: true,
    hole: .4,
    textinfo: 'percent',
    hoverinfo: 'text+value', // Esto muestra la etiqueta, el porcentaje y el texto personalizado en el hover
    text: ['ha','ha','ha','ha','ha','ha']
  }];



  Plotly.newPlot('variedades',data,responsivo);

  let years = arregloYears2(kpi_set);
  let dropdown =  document.getElementById('select_hibridos');
  crearOpciones2(years,dropdown);
  
  let result_actual_plot;

  
  dropdown.addEventListener('change', function() {
    result_actual_plot = kpi_set.find(({ TIME_PERIOD }) => TIME_PERIOD === this.value);
    result_actual_plot_selected = result_actual_plot.RESULTS;
    valores = []
    etiquetas = []
    for (let obs of result_actual_plot_selected){
      valores.push(obs.val)
  
  
    }
    for (let eti of result_actual_plot_selected){
      etiquetas.push(eti.seed)
    }
  


    Plotly.react('variedades',
        [{
            values: valores,
            labels: etiquetas,
            type: 'pie',
            automargin: true,
            hole: .4,
        }],
      responsivo
      )
    
  });

  
};

async function densidad(){


    let API = await getJson2(t2);
    let kpi_set = API.KPI_SET[1].OBSERVATIONS;
    let kpi_base = kpi_set[0].RESULTS[0];


//obtener llaves
let  tipo_terreno = Object.keys(kpi_base)


let valores= []
let layout ={yaxis:{title:{text:'Cropland (ha)'}}}

tipo_terreno.forEach(nombre => {

  let  densi_array = []
  let  val_array = []

   for (let ob of  kpi_base[nombre]){
    
    val_array.push(ob.val)
   }
   for (let ob of  kpi_base[nombre]){
    
    densi_array.push(ob.densi)
   }
      // Crear un objeto de datos para cada registro
      const data = {
        x:densi_array,
        y: val_array,
        name: nombre,
        type: 'bar',
        text: val_array.map(String),
        textposition: 'auto',
        hoverinfo: 'none',

      };
      // Agregar el objeto al array de datos

    
      valores.push(data);

});

Plotly.newPlot('densidad', valores,layout,responsivo);

let years = arregloYears2(kpi_set);
let dropdown =  document.getElementById('select_densidad');
crearOpciones2(years,dropdown);

let result_actual_plot;


dropdown.addEventListener('change', function() {
  result_actual_plot = kpi_set.find(({ TIME_PERIOD }) => TIME_PERIOD === this.value);
 let result_actual_plot_selected = result_actual_plot.RESULTS[0];


 //obtener llaves
 tipo_terreno = Object.keys(result_actual_plot_selected)
 valores= []

tipo_terreno.forEach(nombre => {

    densi_array = []
   val_array = []

   for (let ob of  result_actual_plot_selected[nombre]){
    
    val_array.push(ob.val)
   }
   for (let ob of  result_actual_plot_selected[nombre]){
    
    densi_array.push(ob.densi)
   }
      // Crear un objeto de datos para cada registro
       data = {
        x:densi_array,
        y: val_array,
        name: nombre,
        type: 'bar',
        text: val_array.map(String),
        textposition: 'auto',
        hoverinfo: 'none',

      };
      // Agregar el objeto al array de datos
      valores.push(data);

});



  Plotly.react('densidad',
  valores,
  layout,
    responsivo
    )
  
});





};

async function capacitacion2(){

  let API = await getJson2(t2);
  let kpi_set_gen = API.KPI_SET[2].OBSERVATIONS;
  let kpi_gen_base = kpi_set_gen[0].RESULTS

  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  let chart = am4core.create("PEG", am4charts.PieChart);
  
  // Add and configure Series
  let pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "value";
  pieSeries.dataFields.category = "gen";
  
  // Let's cut a hole in our Pie chart the size of 30% the radius
  chart.innerRadius = am4core.percent(50);

  // Put a thick white border around each Slice
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.slices.template
    // change the cursor on hover to make it apparent the object can be interacted with
    .cursorOverStyle = [
      {
        "property": "cursor",
        "value": "pointer"
      }
    ];
  
    pieSeries.labels.template.disabled = true;
    pieSeries.slices.template.tooltipText = "{gen}: {value.percent.formatNumber('#.')}%";
    pieSeries.colors.list = [
      am4core.color("#72a1c6"),
      am4core.color("#539b9d"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
    ];

  // Create a base filter effect (as if it's not there) for the hover to return to
  let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
  shadow.opacity = 0;
  
  // Create hover state
  let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
  
  // Slightly shift the shadow and make it more prominent on hover
  let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
  hoverShadow.opacity = 0.7;
  hoverShadow.blur = 5;
  
  // Add a legend
  chart.legend = new am4charts.Legend();

  chart.legend.valueLabels.template.text = "";
  chart.legend.position = "bottom";
  chart.responsive.enabled = true;

  chart.logo.disabled= true

// Add chart title
let title = chart.titles.create();
title.text = "Participants by gender";
title.fontSize = 18;
title.marginBottom = 30;

chart.data = kpi_gen_base;

/** Comienza  por rol*/

let kpi_set_rol = API.KPI_SET[3].OBSERVATIONS;
let kpi_rol_base = kpi_set_rol[0].RESULTS;

// Create chart instance
let graph = am4core.create("PER", am4charts.XYChart);
graph.logo.disabled= true
// Add data
graph.data = kpi_rol_base;



graph.colors.list = [
  am4core.color("#72a1c6"),
  am4core.color("#539b9d"),
  am4core.color("#927def"),
  am4core.color("#f9d5a5"),
  am4core.color("#9a3671")
];
// Create axes
let categoryAxis = graph.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "tipo";

categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.labels.template.valign = "top";
categoryAxis.renderer.labels.template.fontSize = 12;
categoryAxis.renderer.grid.template.strokeWidth = 0;
//dateAxis.renderer.grid.template.location = 0;
//dateAxis.renderer.minGridDistance = 30;

let valueAxis1 = graph.yAxes.push(new am4charts.ValueAxis());
valueAxis1.title.text = "Number of participants";
valueAxis1.min =0;
//disable horizontal lines    
valueAxis1.renderer.grid.template.strokeWidth = 0;

//disable vertical lines




// Create series
let series1 = graph.series.push(new am4charts.ColumnSeries());
series1.dataFields.valueY = "numero";
series1.dataFields.categoryX = "tipo";
series1.yAxis = valueAxis1;
series1.name = "numero";
series1.tooltipText = "[bold font-size: 14]{valueY}[/]";
series1.fill = graph.colors.getIndex(0);
series1.strokeWidth = 0;
series1.clustered = true;
series1.columns.template.width = am4core.percent(40);


 series1.columns.template.adapter.add("fill", function (fill, target) {
  return graph.colors.getIndex(target.dataItem.index);
});
  

// Add cursor
graph.cursor = new am4charts.XYCursor();

// Add legend
let titulo = graph.titles.create();
titulo.text = "Participants by role";
titulo.fontSize = 18;
titulo.marginBottom = 30;


let arregloUnido =   kpi_set_gen.concat(kpi_set_rol);
let years = arregloYears2(arregloUnido)
let dropDownList =  document.getElementById('select_capacitacion');
crearOpciones2(years,dropDownList);


dropDownList.addEventListener('change',function(){
let  kpi_gen_selected = kpi_set_gen.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);
let  kpi_rol_selected = kpi_set_rol.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);

let kpi_gen_filtrado = kpi_gen_selected.RESULTS;
let  kpi_rol_filtrado = kpi_rol_selected.RESULTS;

  chart.data = kpi_gen_filtrado;
  graph.data = kpi_rol_filtrado;
});


}
nHidridos();
densidad();
capacitacion2();