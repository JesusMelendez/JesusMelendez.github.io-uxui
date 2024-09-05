

const responsivo = {responsive: true, locale: 'es', displaylogo: false,	autosizable: true}
/*
d3.csv("./js/fertilizacion.csv", function(err, rows){

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
    y: accumulate(unpack(rows, 'fertilizacion').map(Number)),
    marker: {color: '#17BECF'}
  }
  
  
  let seriesData = [series1];
  console.log(seriesData)
  var layout = {
    title: 'Fecha de fertilización (acumulado)',
    xaxis: {
      autorange: true,
      range: ["2021-04-01", "2021-08-15"],
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
      title:"Número de aplicaciones",
      autorange: false,
      range: [0, 70],
      type: 'linear'
    }
  };
  
  Plotly.newPlot('serieActividades',seriesData,layout,responsivo);
  })*/
  
  var data = [{
    values: [185.99,
      11.50,
      166.54,
      0
      ],
    labels: ['Enterrado','Foliar','Inyectado','Superficial'],
    type: 'pie',
    automargin: true,
    hole: .4,
  }];
    
  Plotly.newPlot('etapa', data,responsivo);

 

  

  
  
  
  var proM = {
    x: ['Fertilizante Químico',	
    'Fertilizante Orgánico/Biológico',	
    'Mejoradores de suelo'
      ],  
    y: [324,0,0
      ],
    name: 'hectáreas',
    type: 'bar',
    marker: {
        color: '#26927b',
        width: 1
      }
  };


  var datosPro = [ proM, responsivo];
  
  const layout1 = {
    margin:{
      autoexpand:true,
      b:180,
      r:120
    },
    autosize:true,
    barmode: 'stack',
    title: {
        text: '',
        font:{
            family:'Helvetica Neue, Helvetica, Arial, sans-serif',
            size: 16
        },
        xref:0.05
    },
    xaxis:{
        title:{
            text:'',
            font:{
                family:'Helvetica Neue, Helvetica, Arial, sans-serif',
                size:50
            }
        }
    },
    yaxis:{
        title:{
            text:'Superficie (ha)',
            font:{
                family:'Helvetica Neue, Helvetica, Arial, sans-serif',
                size:12
            }
        }
    },        
  };
  
Plotly.newPlot('producbio', datosPro, layout1, responsivo);

// let texto = {
//   annotations:[
//     {
//       xref: 'paper',
//       yref: 'paper',
//       x: 0.0,
//       y: 1.05,
//       xanchor: 'left',
//       yanchor: 'bottom',
//       text: 'Main Source for News',
//       font:{
//         family: 'Arial',
//         size: 30,
//         color: 'rgb(37,37,37)'
//       },
//       showarrow: false
//     },
//     {

//       annotations: [{
    
//         xref: 'paper',
    
//         yref: 'paper',
    
//         x: 0,
    
//         xanchor: 'right',
    
//         y: 1,
    
//         yanchor: 'bottom',
    
//         text: 'X axis label',
    
//         showarrow: false
    
//       }, {
    
//         xref: 'paper',
    
//         yref: 'paper',
    
//         x: 1,
    
//         xanchor: 'left',
    
//         y: 0,
    
//         yanchor: 'top',
    
//         text: 'Y axis label',
    
//         showarrow: false
    
//       }]
//     }
//   ]
// };
var info = [{
  values: [0,324,0,0],
  labels: ['Análisis de suelo',		
    'Tablas de referencia',		
    'Green seeker',		
    'Franja rica'		
    ],
  type: 'pie',
  name: 'Parcelas',
  automargin: true,
  hole: .4
}];
  


Plotly.newPlot('analisissuelo',info,responsivo);




// Capacitación
am4core.ready(function() {
    am4core.addLicense('ch-custom-attribution');
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
        value: 84
      },
      {
        gen: "Mujeres",
        value: 8
      },
    ];
});
am4core.ready(function() {
    am4core.addLicense('ch-custom-attribution');
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("PER", am4charts.XYChart);
   
    // Add data
    chart.data = [{
      "tipo": "Productores",
      "numero":   73,
    },
    {
      "tipo": "Técnicos",
      "numero":   19,
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


var actiPreSuelo = {
  x: ['Una única aplicacion','Dos aplicaciones','Tres o mas aplicaciones'],
  y: [0,277.0,47.4], 
  name: 'Actividades',
  type: 'bar',
  marker: {
      color: '#1c306a',
      width: 1
    }
};



var datosCombus = [actiPreSuelo];

const estiloCombus = {
  barmode: 'stack',
  title: {
      text: '',
      font:{
          family:'Helvetica Neue, Helvetica, Arial, sans-serif',
          size: 16
      },

  },
  xaxis:{
      title:{
          text:'',
          font:{
              family:'Helvetica Neue, Helvetica, Arial, sans-serif',
              size:8
          },
          xref:0.05
      }
  },
  yaxis:{
      title:{
          text:'Superficie (ha)',
          font:{
              family:'Helvetica Neue, Helvetica, Arial, sans-serif',
              size:12
          }
      }
  }        
};

Plotly.newPlot('apnitro', datosCombus, estiloCombus, responsivo);
