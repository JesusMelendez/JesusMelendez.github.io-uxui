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
        value: 0
      },
      {
        gen: "Mujeres",
        value: 0
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
      "numero":   0,
    },
    {
      "tipo": "Agregadores",
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
am4core.ready(function() {
  am4core.addLicense('ch-custom-attribution');
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("MP", am4charts.PieChart);
  
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
      gen: "Sí",
      value: 118
    },
    {
      gen: "No",
      value: 22
    },
  ];
});

const responsivo = {responsive: true, locale: 'es', displaylogo: false}

var r1 = [4000,
  1500,
  2000,
  4000,
  2000,
  2000,
  2000,
  6000,
  4000,
  2000,
  4000,
  2000,
  2000,
  2000,
  2000,
  4000,
  2000,
  2000,
  4000,
  1500,
  2000,
  2000,
  2000
  ];
var r2 = [2500,
  6000,
  3000,
  1500,
  1500,
  1500,
  2000,
  2000,
  4500,
  1500,
  1500,
  3500,
  1500,
  5500,
  1500,
  1500
  ];
var r3 = [2000,
  3000,
  1500,
  10000,
  2000,
  2000,
  2000,
  2000,
  2000,
  2000
  ];
var r4 = [1500,
  3000,
  6000,
  1500,
  1500,
  1500,
  4500,
  1500,
  1500,
  2000,
  2000
  ];
var r5 = [1500,
  1000,
  1000,
  6000,
  2000,
  1000,
  1000,
  2000,
  2000,
  ];


var trace1 = {
  y: r1,
  type: 'box',
  name:'Riego 1'
};


var trace2 = {
  y: r2,
  type: 'box',
  name:'Riego 2'
};

var trace3 = {
  y: r3,
  type: 'box',
  name:'Riego 3'
};
var trace4 = {
  y: r4,
  type: 'box',
  name:'Riego 4'
};
var trace5 = {
  y: r5,
  type: 'box',
  name:'Riego 5'
};

let layout = {
  yaxis: {
    title: 'Metros cúbicos por hectárea',
    zeroline: false
  }
};

var caja_bi = [trace1, trace2,trace3,trace4,trace5];

Plotly.newPlot('boxplot', caja_bi,layout,responsivo);