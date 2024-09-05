am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    // Create chart instance
    var chart = am4core.create("CO2", am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "Parcela": "Innovación vs Testigo",
      "Innovación": 1698,
      "Testigo": 3723

    }];
  
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "Parcela";
    categoryAxis.renderer.labels.template.disabled ="true";
    //categoryAxis.renderer.minGridDistance = 20;
  
    
    
    var label = categoryAxis.renderer.labels.template;
    label.truncate = true;
    label.maxWidth = 400;
    label.tooltipText = "{category}";
    
    
    var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = "[font-size:12px] Kilogramos de dióxido de carbono por hectárea";
    valueAxis1.min = 0;
    valueAxis1.tooltip.disabled = false;
    valueAxis1.renderer.grid.template.disabled = false;
  
    
    
    // Create series
    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = "Innovación";
    series1.dataFields.categoryX = "Parcela";
    series1.yAxis = valueAxis1;
    series1.name = "Innovación";
    series1.columns.template.tooltipText = "[font-size:15px]{name}\n [bold]{valueY}[/] CO[baseline-shift: sub; font-size: 10;]2[/]e (kg/ha)";
    series1.fill = chart.colors.getIndex(0);
    series1.strokeWidth = 0;
    series1.clustered = true;
    series1.columns.template.width = am4core.percent(30);
    
    
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "Testigo";
    series2.dataFields.categoryX = "Parcela";
    series2.yAxis = valueAxis1;
    series2.name = "Testigo";
    series2.columns.template.tooltipText = "[font-size:15px]{name}\n [bold]{valueY}[/] CO[baseline-shift: sub; font-size: 10;]2[/]e (kg/ha)";
    series2.fill = chart.colors.getIndex(0).lighten(0.5);
    series2.strokeWidth = 0;
    series2.clustered = true;
    series2.columns.template.width = am4core.percent(30);
    series2.toBack();
    
    
    // Add cursor
  
    
    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    
    });
  