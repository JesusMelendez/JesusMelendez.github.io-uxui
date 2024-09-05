const URL = './js/t1.json';

/****  main functions *****/

//fetch
async function getJson(liga){
    let response = await fetch(liga);
    let datos = await response.json();
    return datos;
};

function arregloYears(arregloUnido){
    let x = [];
    arregloUnido.map(function(obj){
  
       x = x.concat(obj.TIME_PERIOD);
    })
    let unicos = Array.from(new Set(x))
    return unicos;
  }
  
function crearOpciones(arregloYear,Dropdown){

for (let i = 0; i < arregloYear.length; i++){
    let year = arregloYear[i];
    let option = document.createElement('option');
    option.textContent = year;
    option.value=year;
    Dropdown.appendChild(option);

    }

}

//genera una funcion en javascript que interectue con un console.log en donde se acciones un radio boton de bootstrap 5
function barchart(containerName,dataSet,dataSetBase,categoryAxisName,valueAxisName,selectID){

  let grafica_1 = containerName.createChild(am4charts.XYChart);
  grafica_1.paddingRight = 0;

  grafica_1.data = dataSetBase;
      
  
    
  
    grafica_1.colors.list = [
      am4core.color("#539b9d"),
      am4core.color("#72a1c6"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
    ];
  
    // Create axes
    let categoryAxis = grafica_1.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = `${categoryAxisName}`;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.endLocation = 1;
    categoryAxis.renderer.labels.template.fontSize = 12;
  

    
    let  valueAxis1 = grafica_1.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = `[font-size:12px] ${valueAxisName}`;
    valueAxis1.min = 0;
    valueAxis1.tooltip.disabled = false;
    valueAxis1.renderer.grid.template.disabled = false;
    valueAxis1.renderer.grid.template.strokeWidth = 0;
    // Create series
    function createSeries(field, name) {
  
  
      // Set up series
      let series = grafica_1.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = `${categoryAxisName}`;
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = false;
      series.columns.template.width = am4core.percent(40);
      series.tooltipHTML = "<span style='font-size:12px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#FFF");
  
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.dy = -10;
      labelBullet.label.text = "[font-size:0.85rem]{valueY} ";
  
      return series;
    }
  
    
    createSeries("inno", "Innovation");
    createSeries("cg", "Benchmark")
  
  
    
    grafica_1.cursor = new am4charts.XYCursor();
    // Legend
    grafica_1.legend = new am4charts.Legend();
    grafica_1.legend.fontSize = 12;
    grafica_1.legend.position = "right";
    grafica_1.maskBullets = false;
  

    let years = arregloYears(dataSet);
    let dropdown =  document.getElementById(`${selectID}`);
    crearOpciones(years,dropdown);

  
    dropdown.addEventListener('change', function() {
    let result_actual = dataSet.find(({ TIME_PERIOD }) => TIME_PERIOD === this.value);
      result_actual_selected = result_actual.RESULTS;
      grafica_1.data = result_actual_selected;
    });
};
//2a
function subset(arreglo){

  const cicloData = {}
  const result = [];
  arreglo.forEach(item => {
    if (item.RESULTS && item.RESULTS.length > 0) {
      const innerObject = item.RESULTS[0];
      result.push({
        ...innerObject,
        TIME_PERIOD: item.TIME_PERIOD,
        CICLO : item.CICLO
      });
    }
  });

  cicloData.PV = result.filter(({CICLO}) => CICLO == "Primavera-Verano").reverse();
  cicloData.OI = result.filter(({CICLO}) => CICLO == "OI").reverse();
  return cicloData;


}

//nuevo barchart
function NewBarChart(containerName,dataSet,dataSetBase,categoryAxisName,valueAxisName,selectID){

  let grafica_1 = containerName.createChild(am4charts.XYChart);
  grafica_1.paddingRight = 0;

  let set_ciclo_sorted = dataSetBase;
  grafica_1.data = set_ciclo_sorted;
      
  
    
  
    grafica_1.colors.list = [
      am4core.color("#539b9d"),
      am4core.color("#72a1c6"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
    ];
  
    // Create axes
    let categoryAxis = grafica_1.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = `${categoryAxisName}`;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.endLocation = 1;
    categoryAxis.renderer.labels.template.fontSize = 12;
  

    
    let  valueAxis1 = grafica_1.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = `[font-size:12px] ${valueAxisName}`;
    valueAxis1.min = 0;
    valueAxis1.tooltip.disabled = false;
    valueAxis1.renderer.grid.template.disabled = false;
    valueAxis1.renderer.grid.template.strokeWidth = 0;
    // Create series
    function createSeries(field, name) {
  
  
      // Set up series
      let series = grafica_1.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = `${categoryAxisName}`;
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = false;
      series.columns.template.width = am4core.percent(40);
      series.tooltipHTML = "<span style='font-size:12px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#FFF");
  
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.dy = -10;
      labelBullet.label.text = "[font-size:0.85rem]{valueY} ";
  
      return series;
    }
  
    
    createSeries("inno", "Innovation");
    createSeries("cg", "Benchmark")
  
  
    
    grafica_1.cursor = new am4charts.XYCursor();
    // Legend
    grafica_1.legend = new am4charts.Legend();
    grafica_1.legend.fontSize = 12;
    grafica_1.legend.position = "right";
    grafica_1.maskBullets = false;
  
    const form_radios=selectID;
    // Agregar evento de cambio a los radio buttons
    document.querySelectorAll(form_radios).forEach(radio => {
      radio.addEventListener('change', function() {
        // showMessage(this.id);
        let ciclo_change = this.id;
        let data_choosen = dataSet[ciclo_change];
        grafica_1.data = data_choosen;
       
  
      });
    });
    // let years = arregloYears(dataSet);
    // let dropdown =  document.getElementById(`${selectID}`);
    // crearOpciones(years,dropdown);

  
    // dropdown.addEventListener('change', function() {
    // let result_actual = dataSet.find(({ TIME_PERIOD }) => TIME_PERIOD === this.value);
    //   result_actual_selected = result_actual.RESULTS;
    //   grafica_1.data = result_actual_selected;
    // });



};
const add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};
const responsivo = {responsive: true, locale: 'es', displaylogo: false}
const accumulate = arr => arr.map((sum => value => sum += value)(0));

//ticker

async function values_ticker(){
  let data = await getJson(URL);
  

  let dataset = data.KPI_SET;

  // kpi_1
  let kpi_1 = dataset[1].OBSERVATIONS;
  let kpi_1_presente = kpi_1[0].RESULTS;
  let cifra_proporcion = document.getElementById('proporcion_ciclo');
  cifra_proporcion.innerHTML = kpi_1_presente[0].prop;

  //kpi_2
  let kpi_2 = dataset[3].OBSERVATIONS;
  let kpi_2_presente = kpi_2[0].RESULTS;
  let total = document.getElementById('total_superfi');
  total.innerHTML = Math.round(add(kpi_2_presente.map(o => o.val))).toLocaleString();

  //kpi_3
  let kpi_3 = dataset[9].OBSERVATIONS;
  let kpi_3_presente = kpi_3[0].RESULTS;
  let rendimiento = document.getElementById('rendimiento_aa');
  rendimiento.innerHTML = kpi_3_presente[0].inno;

  //kpi_4
  let kpi_4 = dataset[11].OBSERVATIONS;
  let kpi_4_presente = kpi_4[0].RESULTS;
  let ingreso = document.getElementById('cifra_ingreso_aa');
  ingreso.innerHTML = kpi_4_presente[0].ingreso_aa.toLocaleString();

  //kpi_5
  let kpi_5 = dataset[13].OBSERVATIONS;
  let kpi_5_presente = kpi_5[0].RESULTS;
  let ingreso_ton = document.getElementById('cifra_ingreso_ton_aa');
  ingreso_ton.innerHTML = kpi_5_presente[0].ingreso_ton_aa.toLocaleString();

  //kpi_6
  let kpi_6 = dataset[15].OBSERVATIONS;
  let kpi_6_presente = kpi_6[0].RESULTS;
  let costo = document.getElementById('cifra_costo_aa');
  costo.innerHTML = kpi_6_presente[0].costo_ha.toLocaleString();

  //kpi_7
  let kpi_7 = dataset[17].OBSERVATIONS;
  let kpi_7_presente = kpi_7[0].RESULTS;
  let costo_ton = document.getElementById('cifra_costo_ton_aa');
  costo_ton.innerHTML = kpi_7_presente[0].costo_ton.toLocaleString();

  //kpi_8
  let kpi_8 = dataset[19].OBSERVATIONS;
  let kpi_8_presente = kpi_8[0].RESULTS;
  let utilidad = document.getElementById('cifra_utilidad_aa');
  utilidad.innerHTML = kpi_8_presente[0].utilidad_ha.toLocaleString();
  

  //kpi_9
  let kpi_9 = dataset[21].OBSERVATIONS;
  let kpi_9_presente = kpi_9[0].RESULTS;
  let utilidad_ton = document.getElementById('cifra_utilidad_ton_aa');
  utilidad_ton.innerHTML = kpi_9_presente[0].utilidad_ton.toLocaleString();
  // console.log(utilidad_ton.innerHTML)



//data for select

// let anhios = kpi_1.concat(kpi_2,kpi_3,kpi_4,kpi_5,kpi_6,kpi_7,kpi_8,kpi_9);
// let years = arregloYears(anhios);
// let dropdown =  document.getElementById('select_ticker');
// crearOpciones(years,dropdown);


// dropdown.addEventListener('change', function() {

//   // target_value = proporcion.find(({ TIME_PERIOD }) => TIME_PERIOD === this.value);
//   // total_tons_ciclo_selected = proprocion_ciclo.RESULTS;
//   // cifra_proporcion.innerHTML = total_tons_ciclo_selected[0].prop;


// });


};

//graficas
async function numeroProductores(){
    let API = await getJson(URL);

    let kpi_set = API.KPI_SET[0].OBSERVATIONS;

    let kpi_base = kpi_set[0].RESULTS;

    let maximo = Math.max(...kpi_base.map(o => o.val));

    // let total = document.getElementById('total_produc');
    // total.innerHTML = add(kpi_base.map(o => o.val))

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        // Create chart instance
        let chart = am4core.create("producMun", am4charts.XYChart);
        chart.logo.disabled= true
        // Add data
        chart.data = kpi_base;
        
        chart.colors.list = [
          am4core.color("#72a1c6"),
          am4core.color("#539b9d"),
          am4core.color("#927def"),
          am4core.color("#f9d5a5"),
          am4core.color("#9a3671")
        ];
        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "mun";
        
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.labels.template.valign = "top";
        categoryAxis.renderer.labels.template.fontSize = 12;
        categoryAxis.renderer.grid.template.strokeWidth = 0;
        //dateAxis.renderer.grid.template.location = 0;
        // dateAxis.renderer.minGridDistance = 30;

        categoryAxis.renderer.labels.template.rotation = -15;

        categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
            if (target.dataItem && target.dataItem.index & 2 == 2) {
              return dy + 25;
            }
            return dy;
          });

          categoryAxis.title.text = "Municipality";
          let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.title.text = "Number of farmers";
        valueAxis1.max=maximo + maximo*.1;
        //disable horizontal lines    
        valueAxis1.renderer.grid.template.strokeWidth = 0;
    
        //disable vertical lines
    
        // Create series
        let series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.dataFields.valueY = "val";
        series1.dataFields.categoryX = "mun";
        series1.yAxis = valueAxis1;
        series1.name = "val";
        series1.tooltipText = "[bold font-size: 20]{valueY}[/]";
        series1.fill = chart.colors.getIndex(0);
        series1.strokeWidth = 0;
        series1.clustered = true;
        series1.columns.template.width = am4core.percent(40);
        let labelBullet = series1.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{valueY} ";
        
         series1.columns.template.adapter.add("fill", function (fill, target) {
          return chart.colors.getIndex(target.dataItem.index);
        });
      
        // Add cursor
        chart.cursor = new am4charts.XYCursor();

        let selector = document.getElementById('select_producMun');
        for(const j in kpi_set){
    
            let option  = document.createElement("option");
            option.innerHTML = kpi_set[j].TIME_PERIOD;
            option.value = kpi_set[j].TIME_PERIOD;

            selector.appendChild(option);

        }

        let kpi_set_mun_elegido;
        selector.addEventListener('change',function(){
            kpi_set_mun_elegido =  kpi_set.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);

            kpi_insertar_mun_datos = kpi_set_mun_elegido.RESULTS;

            chart.data =kpi_insertar_mun_datos;
            let max_dinamico = Math.max(...kpi_insertar_mun_datos.map(o => o.val));
            // total.innerHTML = add(kpi_insertar_mun_datos.map(o => o.val))
            valueAxis1.max=max_dinamico + max_dinamico*.1;

        });

};
// async function proporcion(){
//     let API_PR = await getJson(URL);
//     // let proporcion = API_PR.KPI_SET[1].OBSERVATIONS;
//     // let proporcion_base = proporcion[0].RESULTS;
//     // console.log(total_ghg_base);
  
//     // let cifra_proporcion = document.getElementById('proporcion_ciclo')
//     // cifra_proporcion.innerHTML = proporcion_base[0].prop


//     let years = arregloYears(proporcion);
//     let dropdown =  document.getElementById('select_proporcion');
//     crearOpciones(years,dropdown);
    
  
//     let proprocion_ciclo;
  
//     dropdown.addEventListener('change', function() {
//         proprocion_ciclo = proporcion.find(({ TIME_PERIOD }) => TIME_PERIOD === this.value);
//         total_tons_ciclo_selected = proprocion_ciclo.RESULTS;
//         // cifra_proporcion.innerHTML = total_tons_ciclo_selected[0].prop;
  
      
//     });
    
  
// }
async function infraestructura(){

    let API = await getJson(URL);

    let kpi_set = API.KPI_SET[2].OBSERVATIONS;

    let kpi_base = kpi_set[0].RESULTS;

    let maximo = Math.max(...kpi_base.map(o => o.value));

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        // Create chart instance
        let chart = am4core.create("numParcela", am4charts.XYChart);
        chart.logo.disabled= true
        // Add data
        chart.data = kpi_base;
        
        chart.colors.list = [
          am4core.color("#72a1c6"),
          am4core.color("#539b9d"),
          am4core.color("#927def"),
          am4core.color("#f9d5a5"),
          am4core.color("#9a3671")
        ];
        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "tipo";
        
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.labels.template.valign = "top";
        categoryAxis.renderer.labels.template.fontSize = 12;
        categoryAxis.renderer.grid.template.strokeWidth = 0;
        //dateAxis.renderer.grid.template.location = 0;
        //dateAxis.renderer.minGridDistance = 30;
        
        let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.title.text = "Cropland (ha)";
        valueAxis1.min = 0;
        valueAxis1.max=maximo + maximo*.1;
        //disable horizontal lines    
        valueAxis1.renderer.grid.template.strokeWidth = 0;
    
        //disable vertical lines
    
        // Create series
        let series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.dataFields.valueY = "value";
        series1.dataFields.categoryX = "tipo";
        series1.yAxis = valueAxis1;
        series1.name = "tipo";
        series1.tooltipText = "[bold font-size: 20]{valueY}[/] (ha)";
        series1.fill = chart.colors.getIndex(0);
        series1.strokeWidth = 0;
        series1.clustered = true;
        series1.columns.template.width = am4core.percent(40);
        let labelBullet = series1.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{valueY} ";
        
         series1.columns.template.adapter.add("fill", function (fill, target) {
          return chart.colors.getIndex(target.dataItem.index);
        });
          
      
        // Add cursor
        chart.cursor = new am4charts.XYCursor();


        let selector = document.getElementById('infra-select');
        for(const j in kpi_set){
    
            let option  = document.createElement("option");
            option.innerHTML = kpi_set[j].TIME_PERIOD;
            option.value = kpi_set[j].TIME_PERIOD;

            selector.appendChild(option);

        }


        let kpi_set_mun_elegido;
        selector.addEventListener('change',function(){
            kpi_set_mun_elegido =  kpi_set.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);

            kpi_insertar_mun_datos = kpi_set_mun_elegido.RESULTS;

            chart.data =kpi_insertar_mun_datos;
            let max_dinamico = Math.max(...kpi_insertar_mun_datos.map(o => o.value));
            valueAxis1.min = 0;
            valueAxis1.max=max_dinamico + max_dinamico*.1;

        });
};
async function superficieInno(){
    let API = await getJson(URL);

    let kpi_set = API.KPI_SET[3].OBSERVATIONS;

    let kpi_base = kpi_set[0].RESULTS;

    let maximo = Math.max(...kpi_base.map(o => o.val));

    // let total = document.getElementById('total_superfi');
    // total.innerHTML = add(kpi_base.map(o => o.val)).toLocaleString()

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        // Create chart instance
        let chart = am4core.create("hectaMunicipio", am4charts.XYChart);
        chart.logo.disabled= true
        // Add data
        chart.data = kpi_base;
        
        chart.colors.list = [
          am4core.color("#72a1c6"),
          am4core.color("#539b9d"),
          am4core.color("#927def"),
          am4core.color("#f9d5a5"),
          am4core.color("#9a3671")
        ];
        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "mun";
        
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.labels.template.valign = "top";
        categoryAxis.renderer.labels.template.fontSize = 12;
        categoryAxis.renderer.grid.template.strokeWidth = 0;
        //dateAxis.renderer.grid.template.location = 0;
        // dateAxis.renderer.minGridDistance = 30;

        categoryAxis.renderer.labels.template.rotation = -15;

        categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
            if (target.dataItem && target.dataItem.index & 2 == 2) {
              return dy + 25;
            }
            return dy;
          });
        categoryAxis.title.text = "Municipality";
          let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.title.text = "Cropland (ha)";
        valueAxis1.max=maximo + maximo*.1;
        //disable horizontal lines    
        valueAxis1.renderer.grid.template.strokeWidth = 0;
    
        //disable vertical lines
    
        // Create series
        let series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.dataFields.valueY = "val";
        series1.dataFields.categoryX = "mun";
        series1.yAxis = valueAxis1;
        series1.name = "val";
        series1.tooltipText = "[font-size: 14]{valueY} (ha)[/]";
        series1.fill = chart.colors.getIndex(0);
        series1.strokeWidth = 0;
        series1.clustered = true;
        series1.columns.template.width = am4core.percent(40);
        let labelBullet = series1.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{valueY} ";
        
         series1.columns.template.adapter.add("fill", function (fill, target) {
          return chart.colors.getIndex(target.dataItem.index);
        });
      
        // Add cursor
        chart.cursor = new am4charts.XYCursor();

        let selector = document.getElementById('select_hectaMun');
        for(const j in kpi_set){
    
            let option  = document.createElement("option");
            option.innerHTML = kpi_set[j].TIME_PERIOD;
            option.value = kpi_set[j].TIME_PERIOD;

            selector.appendChild(option);

        }

        let kpi_set_mun_elegido;
        selector.addEventListener('change',function(){
            kpi_set_mun_elegido =  kpi_set.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);

            kpi_insertar_mun_datos = kpi_set_mun_elegido.RESULTS;

            chart.data =kpi_insertar_mun_datos;
            let max_dinamico = Math.max(...kpi_insertar_mun_datos.map(o => o.val));
            // total.innerHTML = add(kpi_insertar_mun_datos.map(o => o.val)).toLocaleString()
            valueAxis1.max=max_dinamico + max_dinamico*.1;

        });

};
async function haApplyingInno(){

  let getkpihainn = await getJson(URL);
  let haInnovkpi = getkpihainn.KPI_SET[4].OBSERVATIONS;
 
  let resultshaInnovkpiBase = haInnovkpi[0].RESULTS

  let maximo = Math.max(...resultshaInnovkpiBase.map(o => o.value));

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  let chart = am4core.create("labranza", am4charts.XYChart);
  chart.logo.disabled= true
  // Add data
  chart.data = resultshaInnovkpiBase;
  
  chart.colors.list = [
    am4core.color("#72a1c6"),
    am4core.color("#539b9d"),
    am4core.color("#927def"),
    am4core.color("#f9d5a5"),
    am4core.color("#9a3671")
  ];
  // Create axes
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "tipo";
  
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.labels.template.valign = "top";
  categoryAxis.renderer.labels.template.fontSize = 12;
  categoryAxis.renderer.grid.template.strokeWidth = 0;
  //dateAxis.renderer.grid.template.location = 0;
  //dateAxis.renderer.minGridDistance = 30;
  
  let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.title.text = "Cropland (ha)";
  valueAxis1.max=maximo + maximo*.1;
  valueAxis1.min = 0;
  //disable horizontal lines    
  valueAxis1.renderer.grid.template.strokeWidth = 0;

  //disable vertical lines

  // Create series
  let series1 = chart.series.push(new am4charts.ColumnSeries());
  series1.dataFields.valueY = "value";
  series1.dataFields.categoryX = "tipo";
  series1.yAxis = valueAxis1;
  series1.name = "tipo";
  series1.tooltipText = "[bold font-size: 20]{valueY}[/] (ha)";
  series1.fill = chart.colors.getIndex(0);
  series1.strokeWidth = 0;
  series1.clustered = true;
  series1.columns.template.width = am4core.percent(40);
  let labelBullet = series1.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.dy = -10;
  labelBullet.label.text = "{valueY} ";
  
   series1.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });
    

  // Add cursor
  chart.cursor = new am4charts.XYCursor();


   
  let years = arregloYears(haInnovkpi);
  let dropdown =  document.getElementById('cicloEleccionHaInno');
  crearOpciones(years,dropdown);
  


  let kpi_set_mun_elegido;
  dropdown.addEventListener('change',function(){
      kpi_set_mun_elegido =  haInnovkpi.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);

      kpi_insertar_mun_datos = kpi_set_mun_elegido.RESULTS;

      chart.data =kpi_insertar_mun_datos;
      let max_dinamico = Math.max(...kpi_insertar_mun_datos.map(o => o.value));
      valueAxis1.max=max_dinamico + max_dinamico*.1;

  });


   

   
};

/** espacio funciones fechas **/

//siembra ha
async function haSiembra(){

  let API  = await getJson(URL);
  let cosecha_ha= API.KPI_SET[5].OBSERVATIONS;
  let cosecha_ha_base = cosecha_ha[0].RESULTS;
  
  
  let valores = []
  let fechas = []
  let valores_parcelas = []
  for (let ob of cosecha_ha_base){
    valores.push(ob.superficie_por)
  
  
  }
  for (let ob of cosecha_ha_base){
    fechas.push(ob.fecha)
  }
  for (let ob of cosecha_ha_base){
    valores_parcelas.push(ob.parcelas_porc)
  }
  

  
  
  let series1 = {
    type: "scatter",
      mode: 'lines',
      name: 'Siembra',
      x: fechas,
      y: accumulate(valores_parcelas),
      marker: {color: '#17BECF'}
    }
  
    let seriesData = [series1];
    
    let layout = {
      title: '',
      xaxis: {
        autorange: true,
        // range: ["2021-01-01", "2021-07-20"],
        rangeselector: {buttons: [
            {
              count: 7,
              label: '1s',
              step: 'day',
              stepmode: 'backward'
            },
            {
              count: 1,
              label: '1m',
              step: 'mes',
              stepmode: 'backward'
            },
            {step: 'all'}
          ]},
    
      },
      yaxis: {
        title:"Plots",
        //autorange: false,
       // range: [0, 80],
        //type: 'linear'
        tickformat: ',.0%',
        range: [0,1]
      }
    };
    
    Plotly.newPlot('serieActividades', seriesData, layout,responsivo);
  
  
    /** inicia cosecha parcelas*/
    let series2 = {
      type: "scatter",
        mode: 'lines',
        name: 'Siembra',
        x: fechas,
        y: accumulate(valores),
        marker: {color: '#17BECF'}
      }
    
      let seriesData2 = [series2];
      // console.log(seriesData2)

      let layout2 = {
        title: '',
        xaxis: {
          autorange: true,
          // range: ["2021-01-01", "2021-07-20"],
          rangeselector: {buttons: [
              {
                count: 7,
                label: '1s',
                step: 'day',
                stepmode: 'backward'
              },
              {
                count: 1,
                label: '1m',
                step: 'mes',
                stepmode: 'backward'
              },
              {step: 'all'}
            ]},
      
        },
        yaxis: {
          title:"Cropland (ha)",
          //autorange: false,
         // range: [0, 80],
          //type: 'linear'
          tickformat: ',.0%',
          range: [0,1]
        }
      };
      
      Plotly.newPlot('siembraHa', seriesData2, layout2,responsivo);

  
  
    let years = arregloYears(cosecha_ha)
    let dropDownList =  document.getElementById('select_siembra');
    crearOpciones(years,dropDownList);
  
    let cosecha_choosen;
  
  
    dropDownList.addEventListener('change',function(){
      cosecha_choosen = cosecha_ha.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);
      let result_actual_plot_selected = cosecha_choosen.RESULTS;
      

       valores = []
     fechas = []
      valores_parcelas = []
      for (let ob of result_actual_plot_selected){
        valores.push(ob.superficie_por)
      
      
      }
      for (let ob of result_actual_plot_selected){
        fechas.push(ob.fecha)
      }
      for (let ob of result_actual_plot_selected){
        valores_parcelas.push(ob.parcelas_porc)
      }
  
  
      let seriesChoosen = {
        type: "scatter",
          mode: 'lines',
          name: 'Siembra',
          x: fechas,
          y: accumulate(valores),
          marker: {color: '#17BECF'}
        }
      
      let seriesDataChoosen = [seriesChoosen];

      let seriesChoosen2 = {
        type: "scatter",
          mode: 'lines',
          name: 'Siembra',
          x: fechas,
          y: accumulate(valores_parcelas),
          marker: {color: '#17BECF'}
        }
      
      let seriesDataChoosen2 = [seriesChoosen2];

  
      Plotly.react('serieActividades',seriesDataChoosen,layout,responsivo);
      Plotly.react('siembraHa', seriesDataChoosen2, layout2,responsivo);
      
  
    });





  
  }
  
//siembra parcelas

//cosecha ha //cosecha parcelas
async function haCosecha(){

let API  = await getJson(URL);
let cosecha_ha= API.KPI_SET[7].OBSERVATIONS;
let cosecha_ha_base = cosecha_ha[0].RESULTS;


let valores = []
let fechas = []
let valores_parcelas = []
for (let ob of cosecha_ha_base){
  valores.push(ob.superficie_cosecha)


}
for (let ob of cosecha_ha_base){
  fechas.push(ob.fecha)
}
for (let ob of cosecha_ha_base){
  valores_parcelas.push(ob.parcelas_porc_cosecha)
}




let series1 = {
  type: "scatter",
    mode: 'lines',
    name: 'Siembra',
    x: fechas,
    y: accumulate(valores_parcelas),
    marker: {color: '#6771dc'}
  }

  let seriesData = [series1];
  
  let layout = {
    title: '',
    xaxis: {
      autorange: true,
      range: ["2021-01-01", "2021-07-20"],
      rangeselector: {buttons: [
          {
            count: 7,
            label: '1s',
            step: 'day',
            stepmode: 'backward'
          },
          {
            count: 1,
            label: '1m',
            step: 'mes',
            stepmode: 'backward'
          },
          {step: 'all'}
        ]},
  
    },
    yaxis: {
      title:"Plots",
      //autorange: false,
     // range: [0, 80],
      //type: 'linear'
      tickformat: ',.0%',
      range: [0,1]
    }
  };
  
  Plotly.newPlot('cosechaActividades',seriesData,layout,responsivo);


  /** inicia cosecha parcelas*/
  let series2 = {
    type: "scatter",
      mode: 'lines',
      name: 'Siembra',
      x: fechas,
      y: accumulate(valores),
      marker: {color: '#6771dc'}
    }
  
    let seriesData2 = [series2];

    
    let layout2 = {
      title: '',
      xaxis: {
        autorange: true,
        range: ["2021-01-01", "2021-07-20"],
        rangeselector: {buttons: [
            {
              count: 7,
              label: '1s',
              step: 'day',
              stepmode: 'backward'
            },
            {
              count: 1,
              label: '1m',
              step: 'mes',
              stepmode: 'backward'
            },
            {step: 'all'}
          ]},
    
      },
      yaxis: {
        title:"Cropland (ha)",
        //autorange: false,
       // range: [0, 80],
        //type: 'linear'
        tickformat: ',.0%',
        range: [0,1]
      }
    };
    
Plotly.newPlot('cosechaHa',seriesData2,layout2,responsivo);




  let years = arregloYears(cosecha_ha)
  let dropDownList =  document.getElementById('select_cosecha');
  crearOpciones(years,dropDownList);

  let cosecha_choosen;


  dropDownList.addEventListener('change',function(){
    cosecha_choosen = cosecha_ha.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);
    let result_actual_plot_selected = cosecha_choosen.RESULTS;
    
    // console.log(cosecha_choosen)
     valores = []
   fechas = []
    valores_parcelas = []
    for (let ob of result_actual_plot_selected){
      valores.push(ob.superficie_cosecha)
    
    
    }
    for (let ob of result_actual_plot_selected){
      fechas.push(ob.fecha)
    }
    for (let ob of result_actual_plot_selected){
      valores_parcelas.push(ob.parcelas_porc_cosecha)
    }


    let seriesChoosen = {
      type: "scatter",
        mode: 'lines',
        name: 'Siembra',
        x: fechas,
        y: accumulate(valores),
        marker: {color: '#6771dc'}
      }
    
    let seriesDataChoosen = [seriesChoosen];


    let seriesChoosen2 = {
      type: "scatter",
        mode: 'lines',
        name: 'Siembra',
        x: fechas,
        y: accumulate(valores),
        marker: {color: '#6771dc'}
      }
    
    let seriesDataChoosen2 = [seriesChoosen2];


    Plotly.react('cosechaActividades',seriesDataChoosen,layout,responsivo);
    Plotly.react('cosechaHa',seriesDataChoosen2,layout2,responsivo);
    

  });


}


async function rendimiento(){
  
  //get data

  let API = await getJson(URL);
  let rendimiento_modulos_set = API.KPI_SET[10].OBSERVATIONS;
  let rendimiento_modulos_base = rendimiento_modulos_set[0].RESULTS;

  //set container
  let sub_data = subset(rendimiento_modulos_set);
  let ciclo_base = 'OI';

  let benchContainer = am4core.create('rendimientoVP',am4core.Container)
  benchContainer.logo.disabled= true
  benchContainer.width = am4core.percent(100);
  benchContainer.height = am4core.percent(100);
  benchContainer.layout = "horizontal";

  //initial graph
// barchart(benchContainer,rendimiento_modulos_set,rendimiento_modulos_base,'variedad','(Tons/ha)','select_rendimiento');
NewBarChart(benchContainer,sub_data,sub_data[ciclo_base],'TIME_PERIOD','(Tons/ha)','input[name="select_rendimiento"]');

  //events
};
async function ingresoha(){
  
  //get data

  let API = await getJson(URL);
  let ingreso_modulos_set = API.KPI_SET[12].OBSERVATIONS;
  let ingreso_modulos_base = ingreso_modulos_set[0].RESULTS;

  //set container
  let sub_data = subset(ingreso_modulos_set);
  let ciclo_base = 'OI';

  let benchContainer = am4core.create('CTVP2',am4core.Container)
  benchContainer.logo.disabled= true
  benchContainer.width = am4core.percent(100);
  benchContainer.height = am4core.percent(100);
  benchContainer.layout = "horizontal";

  //initial graph
  NewBarChart(benchContainer,sub_data,sub_data[ciclo_base],'TIME_PERIOD','Mexican Pesos per hectar','input[name="select_ingreso_ha"]');
// barchart(benchContainer,ingreso_modulos_set,ingreso_modulos_base,'variedad','Mexican Pesos per hectar','select_ingreso_ha');


};
async function ingresoton(){
  
  //get data

  let API = await getJson(URL);
  let ingreso_ton_modulos_set = API.KPI_SET[14].OBSERVATIONS;
  let ingreso_ton_modulos_base = ingreso_ton_modulos_set[0].RESULTS;

  
  let sub_data = subset(ingreso_ton_modulos_set);
  let ciclo_base = 'OI';
  //set container

  let benchContainer = am4core.create('CTVP',am4core.Container)
  benchContainer.logo.disabled= true
  benchContainer.width = am4core.percent(100);
  benchContainer.height = am4core.percent(100);
  benchContainer.layout = "horizontal";
  
  NewBarChart(benchContainer,sub_data,sub_data[ciclo_base],'TIME_PERIOD','Mexican Pesos per ton','input[name="select_ingreso_ton"]');
// barchart(benchContainer,ingreso_ton_modulos_set,ingreso_ton_modulos_base,'variedad',' Mexican Pesos per ton','select_ingreso_ton');

  


};
async function costoha(){
  
  //get data

  let API = await getJson(URL);
  let costo_modulos_set = API.KPI_SET[16].OBSERVATIONS;
  let costo_modulos_base = costo_modulos_set[0].RESULTS;

  let sub_data = subset(costo_modulos_set);
  let ciclo_base = 'OI';

  //set container

  let benchContainer = am4core.create('IRVP2',am4core.Container)
  benchContainer.logo.disabled= true
  benchContainer.width = am4core.percent(100);
  benchContainer.height = am4core.percent(100);
  benchContainer.layout = "horizontal";

  //initial graph
  NewBarChart(benchContainer,sub_data,sub_data[ciclo_base],'TIME_PERIOD','Mexican Pesos per hectar','input[name="select_costo_ha"]');
// barchart(benchContainer,costo_modulos_set,costo_modulos_base,'variedad',' Mexican Pesos per hectar','select_costo_ha');


};
async function costoton(){
  
  //get data

  let API = await getJson(URL);
  let costo_ton_modulos_set = API.KPI_SET[18].OBSERVATIONS;
  let costo_ton_modulos_base = costo_ton_modulos_set[0].RESULTS;

  //set container
  
  let sub_data = subset(costo_ton_modulos_set);
  let ciclo_base = 'OI';

  let benchContainer = am4core.create('IRVP',am4core.Container)
  benchContainer.logo.disabled= true
  benchContainer.width = am4core.percent(100);
  benchContainer.height = am4core.percent(100);
  benchContainer.layout = "horizontal";

  //initial graph
  NewBarChart(benchContainer,sub_data,sub_data[ciclo_base],'TIME_PERIOD',' Mexican Pesos per ton','input[name="select_costo_ton"]');
// barchart(benchContainer,costo_ton_modulos_set,costo_ton_modulos_base,'variedad',' Mexican Pesos per ton','select_costo_ton');


};
async function utilidadha(){
  
  //get data

  let API = await getJson(URL);
  let utilidad_modulos_set = API.KPI_SET[20].OBSERVATIONS;
  let utilidad_modulos_base = utilidad_modulos_set[0].RESULTS;

  //set container
  let sub_data = subset(utilidad_modulos_set);
  let ciclo_base = 'OI';

  let benchContainer = am4core.create('UTVP2',am4core.Container)
  benchContainer.logo.disabled= true
  benchContainer.width = am4core.percent(100);
  benchContainer.height = am4core.percent(100);
  benchContainer.layout = "horizontal";

  
  NewBarChart(benchContainer,sub_data,sub_data[ciclo_base],'TIME_PERIOD',' Mexican Pesos per hectar','input[name="select_utilidad_ha"]');
  //initial graph
// barchart(benchContainer,utilidad_modulos_set,utilidad_modulos_base,'variedad',' Mexican Pesos per hectar','select_utilidad_ha');


};
async function utilidadton(){
  
  //get data

  let API = await getJson(URL);
  let utilidad_ton_modulos_set = API.KPI_SET[22].OBSERVATIONS;
  let utilidad_ton_modulos_base = utilidad_ton_modulos_set[0].RESULTS;

  let sub_data = subset(utilidad_ton_modulos_set);
  let ciclo_base = 'OI';
  //set container

  let benchContainer = am4core.create('UTVP',am4core.Container)
  benchContainer.logo.disabled= true
  benchContainer.width = am4core.percent(100);
  benchContainer.height = am4core.percent(100);
  benchContainer.layout = "horizontal";

  //initial graph

NewBarChart(benchContainer,sub_data,sub_data[ciclo_base],'TIME_PERIOD',' Mexican Pesos per ton','input[name="select_utilidad_ton"]');

// barchart(benchContainer,utilidad_ton_modulos_set,utilidad_ton_modulos_base,'variedad',' Mexican Pesos per ton','select_utilidad_ton');
  
  
  // const switchButton = document.getElementById('swith_utilidad_ton');

  // const select =  document.getElementById('select_utilidad_ton')

  // const selectbenchmark =  document.getElementById('bech_select_utilidad_ton')

  // //events
  // switchButton.addEventListener('change', () => {
  //   if (switchButton.checked) {
  //     //seteo inicial 
  //     try{
  //       select.options.length = 0;
  //       selectbenchmark.options.length = 0;
  //       selectbenchmark.removeAttribute("disabled");
  //       benchContainer.disposeChildren()

  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  //     barchart(benchContainer,utilidad_ton_modulos_set,utilidad_ton_modulos_base,'variedad',' Mexican Pesos per ton','select_utilidad_ton');
  //     let graph_2=barchart(benchContainer,utilidad_ton_modulos_set,utilidad_ton_modulos_base,'variedad',' Mexican Pesos per ton','bech_select_utilidad_ton');
  //   } 
  //   else 
  //   {
  //     try{
  //       select.options.length = 0;
  //       selectbenchmark.options.length = 0;
  //       selectbenchmark.removeAttribute("disabled");
  //       benchContainer.disposeChildren()
  //     }      
  //     catch(err){
  //       console.log(err)
  //     }
  //     finally{
  //       const opt = document.createElement("option");
  //       opt.value = "1";
  //       opt.text = "Only bechmark active";
  //       selectbenchmark.setAttribute("disabled", "");
  //       selectbenchmark.add(opt, selectbenchmark.options[0]);
  //       barchart(benchContainer,utilidad_ton_modulos_set,utilidad_ton_modulos_base,'variedad',' Mexican Pesos per ton','select_utilidad_ton');
  //     }

      
  //   }
  // });

};

async function participantes(){

  let API = await getJson(URL);
  let kpi_set_gen = API.KPI_SET[23].OBSERVATIONS;
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

let kpi_set_rol = API.KPI_SET[24].OBSERVATIONS;
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
titulo.text = "Participants by rol";
titulo.fontSize = 18;
titulo.marginBottom = 30;


let arregloUnido =   kpi_set_gen.concat(kpi_set_rol);
let years = arregloYears(arregloUnido)
let dropDownList =  document.getElementById('select_capacitacion');
crearOpciones(years,dropDownList);


dropDownList.addEventListener('change',function(){
let  kpi_gen_selected = kpi_set_gen.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);
let  kpi_rol_selected = kpi_set_rol.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);

let kpi_gen_filtrado = kpi_gen_selected.RESULTS;
let  kpi_rol_filtrado = kpi_rol_selected.RESULTS;

  chart.data = kpi_gen_filtrado;
  graph.data = kpi_rol_filtrado;
});


}
// async function contador(){
//  await   $('.counter-count').each(function () {
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 500,
//             easing: 'swing',
//             step: function (now) {
//       var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
//                 $(this).text(Math.ceil(now));
//               $(this).text(parseFloat(now).toLocaleString(size));
//             }
//         });
//       });
// };





// async function eventos(){
//     let API = await getJson(URL);

//     let kpi_set = API.KPI_SET[2].OBSERVATIONS;

//     let kpi_base = kpi_set[0].RESULTS;

//     let cifra_eventos = document.getElementById('numeroEventos');
//     cifra_eventos.innerHTML = kpi_base[0].eventos;
  

//     let selector = document.getElementById('select_eventos');
//     for(const j in kpi_set){

//         let option  = document.createElement("option");
//         option.innerHTML = kpi_set[j].TIME_PERIOD;
//         option.value = kpi_set[j].TIME_PERIOD;

//         selector.appendChild(option);

//     }


//     let eventos_selected;
//     selector.addEventListener('change',function(){
//         eventos_selected = kpi_set.find(({ TIME_PERIOD }) => TIME_PERIOD === this.value);
//         let eventos_filtrados = eventos_selected.RESULTS;
//         cifra_eventos.innerHTML = eventos_filtrados[0].eventos;

//     });
//     contador();

// };


// async function participantesEven(){

//     let API = await getJson(URL);
//     let kpi_set_gen = API.KPI_SET[3].OBSERVATIONS;
//     let kpi_gen_base = kpi_set_gen[0].RESULTS

//     am4core.useTheme(am4themes_animated);
//     // Themes end
    
//     // Create chart instance
//     let chart = am4core.create("PEG", am4charts.PieChart);
    
//     // Add and configure Series
//     let pieSeries = chart.series.push(new am4charts.PieSeries());
//     pieSeries.dataFields.value = "value";
//     pieSeries.dataFields.category = "gen";
    
//     // Let's cut a hole in our Pie chart the size of 30% the radius
//     chart.innerRadius = am4core.percent(50);
  
//     // Put a thick white border around each Slice
//     pieSeries.slices.template.stroke = am4core.color("#fff");
//     pieSeries.slices.template.strokeWidth = 2;
//     pieSeries.slices.template.strokeOpacity = 1;
//     pieSeries.slices.template
//       // change the cursor on hover to make it apparent the object can be interacted with
//       .cursorOverStyle = [
//         {
//           "property": "cursor",
//           "value": "pointer"
//         }
//       ];
    
//       pieSeries.labels.template.disabled = true;
//       pieSeries.slices.template.tooltipText = "{gen}: {value.percent.formatNumber('#.')}%";
//       pieSeries.colors.list = [
//         am4core.color("#72a1c6"),
//         am4core.color("#539b9d"),
//         am4core.color("#927def"),
//         am4core.color("#f9d5a5"),
//         am4core.color("#9a3671")
//       ];
  
//     // Create a base filter effect (as if it's not there) for the hover to return to
//     let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
//     shadow.opacity = 0;
    
//     // Create hover state
//     let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
    
//     // Slightly shift the shadow and make it more prominent on hover
//     let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
//     hoverShadow.opacity = 0.7;
//     hoverShadow.blur = 5;
    
//     // Add a legend
//     chart.legend = new am4charts.Legend();
  
//     chart.legend.valueLabels.template.text = "";
//     chart.legend.position = "bottom";
//     chart.responsive.enabled = true;
  
//     chart.logo.disabled= true
  
//   // Add chart title
//   let title = chart.titles.create();
//   title.text = "Participantes por género";
//   title.fontSize = 18;
//   title.marginBottom = 30;
  
//   chart.data = kpi_gen_base;

// /** Comienza  por rol*/

// let kpi_set_rol = API.KPI_SET[4].OBSERVATIONS;
// let kpi_rol_base = kpi_set_rol[0].RESULTS;

//   // Create chart instance
//   let graph = am4core.create("PER", am4charts.XYChart);
//   graph.logo.disabled= true

//   let maximo = Math.max(...kpi_rol_base.map(o => o.numero));

//   // Add data
//   graph.data = kpi_rol_base;

  
  
//   graph.colors.list = [
//     am4core.color("#72a1c6"),
//     am4core.color("#539b9d"),
//     am4core.color("#927def"),
//     am4core.color("#f9d5a5"),
//     am4core.color("#9a3671")
//   ];
//   // Create axes
//   let categoryAxis = graph.xAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.dataFields.category = "tipo";
  
//   categoryAxis.renderer.grid.template.location = 0;
//   categoryAxis.renderer.minGridDistance = 20;
//   categoryAxis.renderer.labels.template.valign = "top";
//   categoryAxis.renderer.labels.template.fontSize = 12;
//   categoryAxis.renderer.grid.template.strokeWidth = 0;
//   //dateAxis.renderer.grid.template.location = 0;
//   //dateAxis.renderer.minGridDistance = 30;
  
//   let valueAxis1 = graph.yAxes.push(new am4charts.ValueAxis());
//   valueAxis1.title.text = "Número de participantes";
//   valueAxis1.max = maximo + maximo*.1;
//   valueAxis1.min =0;

// //disable horizontal lines    
// valueAxis1.renderer.grid.template.strokeWidth = 0;

// //disable vertical lines



  
//   // Create series
//   let series1 = graph.series.push(new am4charts.ColumnSeries());
//   series1.dataFields.valueY = "numero";
//   series1.dataFields.categoryX = "tipo";
//   series1.yAxis = valueAxis1;
//   series1.name = "numero";
//   series1.tooltipText = "[bold font-size: 14]{valueY}[/]";
//   series1.fill = graph.colors.getIndex(0);
//   series1.strokeWidth = 0;
//   series1.clustered = true;
//   series1.columns.template.width = am4core.percent(40);

  
//    series1.columns.template.adapter.add("fill", function (fill, target) {
//     return graph.colors.getIndex(target.dataItem.index);
//   });
    

//   // Add cursor
//   graph.cursor = new am4charts.XYCursor();
  
//   // Add legend
//   let titulo = graph.titles.create();
//   titulo.text = "Participantes por rol";
//   titulo.fontSize = 18;
//   titulo.marginBottom = 30;



//     let selector = document.getElementById('selectParticipantes');
//     for(const j in kpi_set_gen){

//         let option  = document.createElement("option");
//         option.innerHTML = kpi_set_gen[j].TIME_PERIOD;
//         option.value = kpi_set_gen[j].TIME_PERIOD;

//         selector.appendChild(option);

//     }


//     let kpi_gen_selected;
//     let kpi_rol_selected;
//     selector.addEventListener('change',function(){
//         kpi_gen_selected = kpi_set_gen.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);
//         kpi_rol_selected = kpi_set_rol.find(({TIME_PERIOD}) => TIME_PERIOD === this.value);
  
//         kpi_gen_filtrado = kpi_gen_selected.RESULTS;
//         kpi_rol_filtrado = kpi_rol_selected.RESULTS;

//         chart.data = kpi_gen_filtrado;
    
//         graph.data = kpi_rol_filtrado;

//     });
// };
async function test(){
  
  //get data

  let API = await getJson(URL);
  let rendimiento_modulos_set = API.KPI_SET[10].OBSERVATIONS;
  // let rendimiento_modulos_base = rendimiento_modulos_set[0].RESULTS;

  let sub_data = subset(rendimiento_modulos_set);
  let ciclo_base = 'OI';


  let benchContainer = am4core.create('TESTEST',am4core.Container)
  benchContainer.logo.disabled= true
  benchContainer.width = am4core.percent(100);
  benchContainer.height = am4core.percent(100);
  benchContainer.layout = "horizontal";

  const form_radios='input[name="flexRadioDefault"]';
  
  NewBarChart(benchContainer,sub_data,sub_data[ciclo_base],'TIME_PERIOD','(Tons/ha)','input[name="flexRadioDefault"]');
  // Función que muestra el mensaje en la consola


  // // Agregar evento de cambio a los radio buttons
  // document.querySelectorAll(form_radios).forEach(radio => {
  //   radio.addEventListener('change', function() {
  //     // showMessage(this.id);
  //     ciclo_change = this.id;


  //   });
  // });

  // // Mostrar mensaje del radio button seleccionado por defecto
  // const selectedRadio = document.querySelector('input[name="flexRadioDefault"]:checked');
  // // console.log(selectedRadio.id)
  // if (selectedRadio) {
  //   showMessage(selectedRadio.id);
  // }
  // //set container
  // function showMessage(array,keyName) {
  //   const selectedArray = array[keyName];
  //       if (selectedArray) {
     
  //   }
  // }

};

test();
numeroProductores();
// proporcion();
infraestructura();
superficieInno();
haApplyingInno();
haSiembra();
haCosecha();
rendimiento();
ingresoha();
ingresoton();
costoha();
costoton();
utilidadha();
utilidadton();
participantes();
values_ticker();

