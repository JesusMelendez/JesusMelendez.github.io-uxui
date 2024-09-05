am4core.ready(function() {
  
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("producMun", am4charts.XYChart);
 
  // Add data
  chart.data = [ 
{
  "tipo": "Culiacan",
  "numero":   12,
},
{
  "tipo": "Navolato",
  "numero":   4,
}
]

  
  
  chart.colors.list = [
    am4core.color("#72a1c6"),
    am4core.color("#539b9d"),
    am4core.color("#927def"),
    am4core.color("#f9d5a5"),
    am4core.color("#9a3671")
  ];
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "tipo";
  
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.labels.template.valign = "top";
  categoryAxis.renderer.labels.template.fontSize = 12;
  categoryAxis.renderer.grid.template.strokeWidth = 0;
  //dateAxis.renderer.grid.template.location = 0;
  //dateAxis.renderer.minGridDistance = 30;
  
  var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.title.text = "Número de productores";
  valueAxis1.min = 0;
  //disable horizontal lines    
  valueAxis1.renderer.grid.template.strokeWidth = 0;

  //disable vertical lines



  
  // Create series
  var series1 = chart.series.push(new am4charts.ColumnSeries());
  series1.dataFields.valueY = "numero";
  series1.dataFields.categoryX = "tipo";
  series1.yAxis = valueAxis1;
  series1.name = "numero";
  series1.tooltipText = "[bold font-size: 20]{valueY}[/]";
  series1.fill = chart.colors.getIndex(0);
  series1.strokeWidth = 0;
  series1.clustered = true;
  series1.columns.template.width = am4core.percent(40);
  var labelBullet = series1.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.dy = -10;
  labelBullet.label.text = "[font-size:0.85rem]{valueY} ";
  
   series1.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });
    

  // Add cursor
  chart.cursor = new am4charts.XYCursor();
  
  // Add legend

  


});

am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("numParcela", am4charts.XYChart);
  
  // Add data
  chart.data = [ {
      "Hectareas": "",
      "Areadeimpacto":736,
      "Areadeextension": 289,
      "Modulo":35
  } ];
  
  



  /*
  chart.colors.list = [
      am4core.color("#78bd43"),
      am4core.color("#ee295e"),
      am4core.color("#c4c4c4"),
      am4core.color("#556b5c"),
      am4core.color("#c7b12e"),
  ];
  */
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "Hectareas";
  categoryAxis.title.text = "";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.cellStartLocation = 0.1;
  categoryAxis.renderer.cellEndLocation = 0.9;
  
  var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.title.text = "Superficie (ha)";
  
  // Create series
  function createSeries(field, name, stacked) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "Hectareas";
      series.name = name;
      series.columns.template.tooltipText = "[bold font-size:12]{name}: {valueY}[/]"; 
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(75);
  }
  
  createSeries("Areadeimpacto", "Área de impacto",false);
  createSeries("Areadeextension", "Área de extensión",false);
  createSeries("Modulo", "Módulo",false);
  
  
  // Add legend
  chart.legend = new am4charts.Legend();
  
});

am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("hectaMunicipio", am4charts.XYChart);
  
  // Add data
  
  chart.data = [ 
    {
      "tipo": "Culiacan",
      "numero":713,
    },
    {
      "tipo": "Navolato",
      "numero":347,
    }
    ]
 
  
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "tipo";
  //categoryAxis.title.text = "";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.cellStartLocation = 0.1;
  categoryAxis.renderer.cellEndLocation = 0.9;
  
  var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.title.text = "Superficie (ha)";
  
  var series1 = chart.series.push(new am4charts.ColumnSeries());
  series1.dataFields.valueY = "numero";
  series1.dataFields.categoryX = "tipo";
  series1.yAxis = valueAxis;
  series1.name = "numero";
  series1.tooltipText = "[bold font-size: 20]{valueY}[/]";
  series1.fill = chart.colors.getIndex(0);
  series1.strokeWidth = 0;
  series1.clustered = true;
  series1.columns.template.width = am4core.percent(40);
  var labelBullet = series1.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.dy = -10;
  labelBullet.label.text = "[font-size:0.85rem]{valueY} ";
  
   series1.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });
    
  
  
  // Add legend
  // chart.legend = new am4charts.Legend();
  
  });


const responsivo = {responsive: true, locale: 'es', displaylogo: false}

let colores = ['#67b7dc','#6794dc','#6771dc']
var data = [{
    values: [529, 417,0],
    labels: ['Manejo de rastrojo', 'Minimo movimiento del suelo','Rotación de cultivos'],
    hovertemplate:'<b>%{label}</b><br>%{value} ha',
    name:'Tipo de labranza',
    automargin: true,
    marker: {
        colors: colores
      },
    hole: .4,
    type: 'pie',
  }];
    
Plotly.newPlot('labranza', data,responsivo);


d3.csv("./js/fecha_siembra.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

//const cumulativeSum = (sum => value => sum += value)(0);
const accumulate = arr => arr.map((sum => value => sum += value)(0));
var series1 = {
type: "scatter",
  mode: 'lines',
  name: 'Siembra',
  x: unpack(rows, 'fecha'),
  y: accumulate(unpack(rows, 'parcelas_porc').map(Number)),
  marker: {color: '#17BECF'}
}


let seriesData = [series1];

var layout = {
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
    title:"Parcelas",
    //autorange: false,
   // range: [0, 80],
    //type: 'linear'
    tickformat: ',.0%',
    range: [0,1]
  }
};

Plotly.newPlot('serieActividades',seriesData,layout,responsivo);
})

d3.csv("./js/fecha_siembra.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

//const cumulativeSum = (sum => value => sum += value)(0);
const accumulate = arr => arr.map((sum => value => sum += value)(0));
var series1 = {
type: "scatter",
  mode: 'lines',
  name: 'Siembra',
  x: unpack(rows, 'fecha'),
  y: accumulate(unpack(rows, 'superficie_por').map(Number)),
  marker: {color: '#17BECF'}
}


let seriesData = [series1];
//console.log(seriesData)
var layout = {
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
    title:"Superficie (ha)",
    //autorange: false,
    //range: [0, 700],
    //type: 'linear'
        //autorange: false,
   // range: [0, 80],
    //type: 'linear'
    tickformat: ',.0%',
    range: [0,1]
  }
};

Plotly.newPlot('siembraHa',seriesData,layout,responsivo);
})



d3.csv("./js/fecha_cosecha.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  //const cumulativeSum = (sum => value => sum += value)(0);
  const accumulate = arr => arr.map((sum => value => sum += value)(0));
  var series1 = {
  type: "scatter",
    mode: 'lines',
    name: 'Siembra',
    x: unpack(rows, 'fecha'),
    y: accumulate(unpack(rows, 'parcelas_porc_cosecha').map(Number)),
    marker: {color: '#6771dc'}
  }
  
  
  let seriesData = [series1];
  
  var layout = {
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
      title:"Parcelas",
      //autorange: false,
     // range: [0, 80],
      //type: 'linear'
      tickformat: ',.0%',
      range: [0,1]
    }
  };
  
  Plotly.newPlot('cosechaActividades',seriesData,layout,responsivo);
  })
  
  d3.csv("./js/fecha_cosecha.csv", function(err, rows){
  
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  //const cumulativeSum = (sum => value => sum += value)(0);
  const accumulate = arr => arr.map((sum => value => sum += value)(0));
  var series1 = {
  type: "scatter",
    mode: 'lines',
    name: 'Siembra',
    x: unpack(rows, 'fecha'),
    y: accumulate(unpack(rows, 'superficie_cosecha').map(Number)),
    marker: {color: '#6771dc'}
  }

  
  
  let seriesData = [series1];
  //console.log(seriesData)
  var layout = {
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
      title:"Superficie (ha)",
      //autorange: false,
      //range: [0, 700],
      //type: 'linear'
          //autorange: false,
     // range: [0, 80],
      //type: 'linear'
      tickformat: ',.0%',
      range: [0,1]
    }
  };
  
  Plotly.newPlot('cosechaHa',seriesData,layout,responsivo);
  })

// Reducción de pobreza
am4core.ready(function(){

  am4core.useTheme(am4themes_animated);
  
  let grafica = am4core.create ("rendimientoAA", am4charts.XYChart);
  //grafica.numberFormatter.numberFormat = "#.0a";
  grafica.data = [{
      "variedad": " ",
      "inno":  12,
      "cg":12.21
  }];
  
  
  
  
  grafica.colors.list = [
      am4core.color("#539b9d"),
      am4core.color("#72a1c6"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
  ];
  
  // Create axes
  let categoryAxis = grafica.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "variedad";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.endLocation = 1;
  categoryAxis.renderer.labels.template.fontSize = 12;
  
  //categoryAxis.title.text = "[font-size:0.3rem]Seed Variety";
  let  valueAxis = grafica.yAxes.push(new am4charts.ValueAxis());
  
  
  valueAxis.title.text = "[font-size: 12px] Toneladas por hectárea";
  valueAxis.fontSize = 12;
  valueAxis.min=0
  valueAxis.numberFormatter = new am4core.NumberFormatter();
  // valueAxis.numberFormatter.numberFormat = '$#,###.'; 
  
  
  // Create series
  function createSeries(field, name) {
  
  
      // Set up series
      let series = grafica.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "variedad";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = false;
      series.columns.template.width = am4core.percent(40);
      series.tooltipHTML = "<span style='font-size:12px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#FFF");
  
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.dy = -10;
      labelBullet.label.text = "[font-size:0.6rem]{valueY}";
  
      return series;
  }
  
  
  createSeries("inno", "Innovación");
  createSeries("cg", "Testigo regional");
  
  
  
  grafica.cursor = new am4charts.XYCursor();
  grafica.legend = new am4charts.Legend();
  grafica.legend.fontSize = 12;
  grafica.legend.position = "top";
  
  
  
});
am4core.ready(function(){

  am4core.useTheme(am4themes_animated);
  
  let grafica = am4core.create ("rendimientoVP", am4charts.XYChart);
  //grafica.numberFormatter.numberFormat = "#.0a";
  grafica.data = [{
      "variedad": " ",
      "inno":  13.13,
      "cg":13.10
  }];
  
  
  
  
  grafica.colors.list = [
      am4core.color("#539b9d"),
      am4core.color("#72a1c6"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
  ];
  
  // Create axes
  let categoryAxis = grafica.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "variedad";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.endLocation = 1;
  categoryAxis.renderer.labels.template.fontSize = 12;
  
  //categoryAxis.title.text = "[font-size:0.3rem]Seed Variety";
  let  valueAxis = grafica.yAxes.push(new am4charts.ValueAxis());
  
  
  valueAxis.title.text = "[font-size: 12px] Toneladas por hectárea";
  valueAxis.fontSize = 12;
  valueAxis.min=0
  valueAxis.numberFormatter = new am4core.NumberFormatter();
  // valueAxis.numberFormatter.numberFormat = '$#,###.'; 
  
  
  // Create series
  function createSeries(field, name) {
  
  
      // Set up series
      let series = grafica.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "variedad";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = false;
      series.columns.template.width = am4core.percent(40);
      series.tooltipHTML = "<span style='font-size:12px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#FFF");
  
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.dy = -10;
      labelBullet.label.text = "[font-size:0.6rem]{valueY}";
  
      return series;
  }
  
  
  createSeries("inno", "Innovación");
  createSeries("cg", "Testigo");
  
  
  
  grafica.cursor = new am4charts.XYCursor();
  grafica.legend = new am4charts.Legend();
  grafica.legend.fontSize = 12;
  grafica.legend.position = "top";
  
  
  
});
am4core.ready(function(){

  am4core.useTheme(am4themes_animated);
  
  let grafica = am4core.create ("CTVP2", am4charts.XYChart);
  //grafica.numberFormatter.numberFormat = "#.0a";
  grafica.data = [{
      "variedad": " ",
      "inno":  93870,
      "cg":93625
  }];
  
  
  
  
  grafica.colors.list = [
      am4core.color("#539b9d"),
      am4core.color("#72a1c6"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
  ];
  
  // Create axes
  let categoryAxis = grafica.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "variedad";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.endLocation = 1;
  categoryAxis.renderer.labels.template.fontSize = 12;
  
  //categoryAxis.title.text = "[font-size:0.3rem]Seed Variety";
  let  valueAxis = grafica.yAxes.push(new am4charts.ValueAxis());
  
  
  valueAxis.title.text = "[font-size: 12px] Pesos por hectárea";
  valueAxis.fontSize = 12;
  valueAxis.min=0
  valueAxis.numberFormatter = new am4core.NumberFormatter();
  valueAxis.numberFormatter.numberFormat = '$#,###.'; 
  
  
  // Create series
  function createSeries(field, name) {
  
  
      // Set up series
      let series = grafica.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "variedad";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = false;
      series.columns.template.width = am4core.percent(40);
      series.tooltipHTML = "<span style='font-size:12px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#FFF");
  
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.dy = -10;
      labelBullet.label.text = "[font-size:0.6rem]{valueY}";
  
      return series;
  }
  
  
  createSeries("inno", "Innovación");
  createSeries("cg", "Testigo");
  
  
  
  grafica.cursor = new am4charts.XYCursor();
  grafica.legend = new am4charts.Legend();
  grafica.legend.fontSize = 12;
  grafica.legend.position = "top";
  
  
  
});
am4core.ready(function(){

  am4core.useTheme(am4themes_animated);
  
  let grafica = am4core.create ("CTVP", am4charts.XYChart);
  //grafica.numberFormatter.numberFormat = "#.0a";
  grafica.data = [{
      "variedad": " ",
      "inno":  7000        ,
      "cg":7000
  }];
  
      
  
  
  grafica.colors.list = [
      am4core.color("#539b9d"),
      am4core.color("#72a1c6"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
  ];
  
  // Create axes
  let categoryAxis = grafica.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "variedad";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.endLocation = 1;
  categoryAxis.renderer.labels.template.fontSize = 12;
  
  //categoryAxis.title.text = "[font-size:0.3rem]Seed Variety";
  let  valueAxis = grafica.yAxes.push(new am4charts.ValueAxis());
  
  
  valueAxis.title.text = "[font-size: 12px] Pesos por tonelada";
  valueAxis.fontSize = 12;
  valueAxis.min=0
  valueAxis.numberFormatter = new am4core.NumberFormatter();
  valueAxis.numberFormatter.numberFormat = '$#,###.'; 
  
  
  // Create series
  function createSeries(field, name) {
  
  
      // Set up series
      let series = grafica.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "variedad";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = false;
      series.columns.template.width = am4core.percent(40);
      series.tooltipHTML = "<span style='font-size:12px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#FFF");
  
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.dy = -10;
      labelBullet.label.text = "[font-size:0.6rem]{valueY}";
  
      return series;
  }
  
  
  createSeries("inno", "Innovación");
  createSeries("cg", "Testigo");
  
  
  
  grafica.cursor = new am4charts.XYCursor();
  grafica.legend = new am4charts.Legend();
  grafica.legend.fontSize = 12;
  grafica.legend.position = "top";
  
  
  
});
am4core.ready(function(){

  am4core.useTheme(am4themes_animated);
  
  let grafica = am4core.create ("IRVP2", am4charts.XYChart);
  
  grafica.data = [{
      "variedad": "",
      "inno":  44549,
      "cg":46934
  }];
  
  
  
  grafica.colors.list = [
      am4core.color("#539b9d"),
      am4core.color("#72a1c6"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
  ];
  
  // Create axes
  let categoryAxis = grafica.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "variedad";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.endLocation = 1;
  categoryAxis.renderer.labels.template.fontSize = 12;
  

  let  valueAxis = grafica.yAxes.push(new am4charts.ValueAxis());
  
  valueAxis.numberFormatter = new am4core.NumberFormatter();
  valueAxis.numberFormatter.numberFormat = '$#,###.'; 
  valueAxis.fontSize = 12;
  
  valueAxis.min=0
  valueAxis.title.text = "[font-size: 12px] Pesos por hectárea";
  
  
  // Create series
  function createSeries(field, name) {
  
  
      // Set up series
      let series = grafica.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "variedad";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = false;
      series.columns.template.width = am4core.percent(40);
      series.tooltipHTML = "<span style='font-size:12px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#FFF");
  
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.dy = -10;
      labelBullet.label.text = "[font-size:0.85rem]{valueY} ";
  
      return series;
  }
  
  
  createSeries("inno", "Innovación");
  createSeries("cg", "Testigo");
  
  
  
  grafica.cursor = new am4charts.XYCursor();
  // Legend
  grafica.legend = new am4charts.Legend();
  grafica.legend.fontSize = 12;
  grafica.legend.position = "top";
  
  
  });  
am4core.ready(function(){

  am4core.useTheme(am4themes_animated);
  
  let grafica = am4core.create ("IRVP", am4charts.XYChart);
  
  grafica.data = [{
    "variedad": "",
    "inno":  3383,
    "cg":3581

}];
  
  
  
  grafica.colors.list = [
      am4core.color("#539b9d"),
      am4core.color("#72a1c6"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
  ];
  
  // Create axes
  let categoryAxis = grafica.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "variedad";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.endLocation = 1;
  categoryAxis.renderer.labels.template.fontSize = 12;
  

  let  valueAxis = grafica.yAxes.push(new am4charts.ValueAxis());
  
  
  valueAxis.numberFormatter = new am4core.NumberFormatter();
  valueAxis.numberFormatter.numberFormat = '$#,###.'; 
  valueAxis.fontSize = 12;
  
  valueAxis.min=0
  valueAxis.title.text = "[font-size: 12px] Pesos por tonelada";

  
  
  // Create series
  function createSeries(field, name) {
  
  
      // Set up series
      let series = grafica.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "variedad";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = false;
      series.columns.template.width = am4core.percent(40);
      series.tooltipHTML = "<span style='font-size:12px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#FFF");
  
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.dy = -10;
      labelBullet.label.text = "[font-size:0.85rem]{valueY} ";
  
      return series;
  }
  
  
  createSeries("inno", "Innovación");
  createSeries("cg", "Testigo");
  
  
  
  grafica.cursor = new am4charts.XYCursor();
  // Legend
  grafica.legend = new am4charts.Legend();
  grafica.legend.fontSize = 12;
  grafica.legend.position = "top";
  
  
  });
am4core.ready(function(){

  am4core.useTheme(am4themes_animated);
  
  let grafica = am4core.create ("UTVP2", am4charts.XYChart);
  
  grafica.data = [{
      "variedad": "",
      "inno":  49321,
      "cg":46691
      }];
  
  
  
  grafica.colors.list = [
      am4core.color("#539b9d"),
      am4core.color("#72a1c6"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
  ];
  
  // Create axes
  let categoryAxis = grafica.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "variedad";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.endLocation = 1;
  categoryAxis.renderer.labels.template.fontSize = 12;
  
  categoryAxis.title.text = "[font-size:0.3rem]Seed Variety";
  let  valueAxis = grafica.yAxes.push(new am4charts.ValueAxis());
  
  
  
  valueAxis.fontSize = 12;
  valueAxis.title.text = "[font-size: 12px] Pesos por hectárea";
  valueAxis.min=0
  // valueAxis.max = 3600
  valueAxis.numberFormatter = new am4core.NumberFormatter();
  valueAxis.numberFormatter.numberFormat = '$#,###.'; 
  
  // Create series
  function createSeries(field, name) {
  
  
      // Set up series
      let series = grafica.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "variedad";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = false;
      series.columns.template.width = am4core.percent(40);
      series.tooltipHTML = "<span style='font-size:12px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#FFF");
  
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.dy = -10;
      labelBullet.label.text = "[font-size: 0.85rem]{valueY}";
  
      return series;
  }
  
  
  createSeries("inno", "Innovación");
  createSeries("cg", "Testigo");
  
  
  
  grafica.cursor = new am4charts.XYCursor();
  // Legend
  grafica.legend = new am4charts.Legend();
  grafica.legend.fontSize = 12;
  grafica.legend.position = "top";
  
  
  }); 
am4core.ready(function(){

  am4core.useTheme(am4themes_animated);
  
  let grafica = am4core.create ("UTVP", am4charts.XYChart);
  
  grafica.data = [{
      "variedad": "",
      "inno":  3617,
      "cg":3419
  }];
  
  
  
  grafica.colors.list = [
      am4core.color("#539b9d"),
      am4core.color("#72a1c6"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
  ];
  
  // Create axes
  let categoryAxis = grafica.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "variedad";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.endLocation = 1;
  categoryAxis.renderer.labels.template.fontSize = 12;
  

  let  valueAxis = grafica.yAxes.push(new am4charts.ValueAxis());
  
  
  
  valueAxis.fontSize = 12;
  valueAxis.title.text = "[font-size: 12px] Pesos por tonelada";
  valueAxis.min=0
  valueAxis.max = 3600
  valueAxis.numberFormatter = new am4core.NumberFormatter();
  valueAxis.numberFormatter.numberFormat = '$#,###.'; 
  
  // Create series
  function createSeries(field, name) {
  
  
      // Set up series
      let series = grafica.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "variedad";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = false;
      series.columns.template.width = am4core.percent(40);
      series.tooltipHTML = "<span style='font-size:12px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#FFF");
  
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.dy = -10;
      labelBullet.label.text = "[font-size: 0.85rem]{valueY}";
  
      return series;
  }
  
  
  createSeries("inno", "Innovación");
  createSeries("cg", "Testigo");
  
  
  
  grafica.cursor = new am4charts.XYCursor();
  // Legend
  grafica.legend = new am4charts.Legend();
  grafica.legend.fontSize = 12;
  grafica.legend.position = "top";
  
  
  }); 


// Capacitación
am4core.ready(function() {

    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("PEG", am4charts.PieChart);
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
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
    var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;
    
    // Create hover state
    var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
    
    // Slightly shift the shadow and make it more prominent on hover
    var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;
    
    // Add a legend
    chart.legend = new am4charts.Legend();
  
    chart.legend.valueLabels.template.text = "";
    chart.legend.position = "bottom";
    chart.responsive.enabled = true;
  
 


  
    chart.data = 
    [
      {
        gen: "Hombres",
        value: 0
      },
      {
        gen: "Mujeres",
        value: 0
      },
    ];
});

am4core.ready(function() {
  
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("PER", am4charts.XYChart);
   
    // Add data
    chart.data = [{
      "tipo": "Productores",
      "numero":   0,
    },
    {
      "tipo": "Técnicos",
      "numero":   0,
    },
    {
      "tipo": "Otros",
      "numero":   0,
    }];
  
    
    
    chart.colors.list = [
      am4core.color("#72a1c6"),
      am4core.color("#539b9d"),
      am4core.color("#927def"),
      am4core.color("#f9d5a5"),
      am4core.color("#9a3671")
    ];
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tipo";
    
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.valign = "top";
    categoryAxis.renderer.labels.template.fontSize = 12;
    categoryAxis.renderer.grid.template.strokeWidth = 0;
    //dateAxis.renderer.grid.template.location = 0;
    //dateAxis.renderer.minGridDistance = 30;
    
    var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = "Número de participantes";
    valueAxis1.max=85
    valueAxis1.min=0
  //disable horizontal lines    
  valueAxis1.renderer.grid.template.strokeWidth = 0;
  
  //disable vertical lines
  
  
  
    
    // Create series
    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = "numero";
    series1.dataFields.categoryX = "tipo";
    series1.yAxis = valueAxis1;
    series1.name = "numero";
    series1.tooltipText = "[bold font-size: 20]{valueY}[/]";
    series1.fill = chart.colors.getIndex(0);
    series1.strokeWidth = 0;
    series1.clustered = true;
    series1.columns.template.width = am4core.percent(40);
    var labelBullet = series1.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.dy = -10;
    labelBullet.label.text = "[font-size:0.85rem]{valueY} ";
    
     series1.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
      
  
    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    
    // Add legend

    
  
  
});

