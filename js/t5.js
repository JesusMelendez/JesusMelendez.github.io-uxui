const t5 = './js/t5.json';

/****  main functions *****/

//fetch
async function getJson5(liga){
    let response = await fetch(liga);
    let datos = await response.json();
    return datos;
};

function arregloYears5(arregloUnido){
    let x = [];
    arregloUnido.map(function(obj){
  
       x = x.concat(obj.TIME_PERIOD);
    })
    let unicos = Array.from(new Set(x))
    return unicos;
  }
  
function crearOpciones5(arregloYear,Dropdown){

for (let i = 0; i < arregloYear.length; i++){
    let year = arregloYear[i];
    let option = document.createElement('option');
    option.textContent = year;
    option.value=year;
    Dropdown.appendChild(option);

    }

}


async function agroquimicos(){
    let API = await getJson5(t5);
    let agroquimicos_set = API.KPI_SET[0].OBSERVATIONS;
    let agroquimicos_base = agroquimicos_set[0].RESULTS;

    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart.logo.disabled= true
    chart.data = agroquimicos_base;

chart.colors.list = [
  am4core.color("#78bd43"),
  am4core.color("#e2e5e6")
  ];
//chart.colors.step = 2;
chart.padding(30, 30, 10, 30);
chart.legend = new am4charts.Legend();
chart.legend.itemContainers.template.togglable = false;
chart.legend.itemContainers.template.clickable = false
chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;


let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;


let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.calculateTotals = true;
valueAxis.renderer.minWidth = 50;
valueAxis.title.text="% Plots"

let series1 = chart.series.push(new am4charts.ColumnSeries());
series1.columns.template.width = am4core.percent(20);
series1.columns.template.tooltipText =
  "{name}: {valueX.totalPercent.formatNumber('#')}%";
series1.name = "Allowed";
series1.dataFields.valueX = "value1";
series1.dataFields.categoryY = "category";
series1.dataFields.valueYShow = "totalPercent";
series1.dataItems.template.locations.categoryX = 0.5;
series1.stacked = true;
series1.tooltip.pointerOrientation = "vertical";



let series2 = chart.series.push(new am4charts.ColumnSeries());
series2.columns.template.width = am4core.percent(20);
series2.columns.template.tooltipText =
  "{name}: {valueX.totalPercent.formatNumber('#')}%";
series2.name = "Restricted";
series2.dataFields.valueX = "value2";
series2.dataFields.categoryY = "category";
series2.dataFields.valueYShow = "totalPercent";
series2.dataItems.template.locations.categoryX = 0.5;
series2.stacked = true;


let kpi_set_elegido;

let arregloUnido =   agroquimicos_set;
let years = arregloYears5(arregloUnido)
let dropDownList =  document.getElementById('selectAgroquimicos');
crearOpciones5(years,dropDownList);


dropDownList.addEventListener('change',function(){
    kpi_set_elegido = agroquimicos_set.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);
    kpi_set_filtrado = kpi_set_elegido.RESULTS;
    chart.data =kpi_set_filtrado;

});


}
async function surfaceplagas(){
    let API_PR = await getJson5(t5);
    let proporcion = API_PR.KPI_SET[1].OBSERVATIONS;
    let proporcion_base = proporcion[0].RESULTS;
    // console.log(total_ghg_base);
  
    let cifra_proporcion = document.getElementById('surface_plagas_cifra')
    cifra_proporcion.innerHTML = proporcion_base[0].mon_plaga.toLocaleString()


    let years = arregloYears5(proporcion);
    let dropdown =  document.getElementById('select_surface_plaga');
    crearOpciones5(years,dropdown);
    
  
    let proprocion_ciclo;
  
    dropdown.addEventListener('change', function() {
        proprocion_ciclo = proporcion.find(({ TIME_PERIOD }) => TIME_PERIOD === this.value);
        total_tons_ciclo_selected = proprocion_ciclo.RESULTS;
        cifra_proporcion.innerHTML = total_tons_ciclo_selected[0].mon_plaga.toLocaleString();
  
      
    });
    
  
}
async function surfaceagroman(){
    let API_PR = await getJson5(t5);
    let proporcion = API_PR.KPI_SET[2].OBSERVATIONS;
    let proporcion_base = proporcion[0].RESULTS;
    // console.log(total_ghg_base);
  
    let cifra_proporcion = document.getElementById('surface_agroman_cifra')
    cifra_proporcion.innerHTML = proporcion_base[0].agro_man


    let years = arregloYears5(proporcion);
    let dropdown =  document.getElementById('select_surface_agroman');
    crearOpciones5(years,dropdown);
    
    
    let proprocion_ciclo;
  
    dropdown.addEventListener('change', function() {
        proprocion_ciclo = proporcion.find(({ TIME_PERIOD }) => TIME_PERIOD === this.value);
        total_tons_ciclo_selected = proprocion_ciclo.RESULTS;
        cifra_proporcion.innerHTML = total_tons_ciclo_selected[0].agro_man;
  
      
    });
    
  
}
async function participantes(){

    let API = await getJson5(t5);
    let kpi_set_gen = API.KPI_SET[3].OBSERVATIONS;
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
  
  let kpi_set_rol = API.KPI_SET[4].OBSERVATIONS;
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
  let years = arregloYears5(arregloUnido)
  let dropDownList =  document.getElementById('select_capacitacion');
  crearOpciones5(years,dropDownList);
  
  
  dropDownList.addEventListener('change',function(){
  let  kpi_gen_selected = kpi_set_gen.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);
  let  kpi_rol_selected = kpi_set_rol.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);
  
  let kpi_gen_filtrado = kpi_gen_selected.RESULTS;
  let  kpi_rol_filtrado = kpi_rol_selected.RESULTS;
  
    chart.data = kpi_gen_filtrado;
    graph.data = kpi_rol_filtrado;
  });
  
  
  }
agroquimicos();
surfaceplagas();
surfaceagroman();
participantes();