let map;
  
let view;


require([

    "esri/Map",
    "esri/layers/GeoJSONLayer", 
    //"esri/layers/CSVLayer",
    "esri/views/SceneView",
    "esri/core/promiseUtils",
    "esri/widgets/Home",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/widgets/Legend",
    "esri/core/Handles",
    "esri/widgets/Feature",
    'esri/widgets/Search'
    ], 
        function(Map, GeoJSONLayer,/*CSVLayer,*/ SceneView,promiseUtils,Home,
        BasemapGallery,Expand,Legend,Handles,Feature,Search) {

        const handles = new Handles();

        //archivo

        let url = './js/poly_consolidado_OI_23_24.geojson'

        const oi_template ={
          type : "simple-fill",
          color : "#ef3c48",
          outline : { 
              color : "white",
              width : 1.5
            }
        };
        const pv_template = {
          type : "simple-fill",
          color : "#14a751",
          outline : { 
              color : "white",
              width : 1.5
            }
        };


        const ae_mod_popup =   {
          title: "Plot {ID}",
          content: [{
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "Estado",
                  label: "State"
                },
                {
                  fieldName: "Municipio",
                  label: "Municipality"
                },
                {
                  fieldName: "Tipo.de.bitacora",
                  label: "Type of plot"
                },
                {
                  fieldName:"Innovaciones",
                  label:"Innovations"
                },
                {
                  fieldName: "Regimen.hidrico",
                  label: "Water use"
                },

                {
                  fieldName: "Superficie.sembrada",
                  label: "Sown cropland"
                },
                {
                  fieldName: "Cultivo",
                  label: "Register Crop"
                },
                {
                  fieldName: "Tipo.de.semilla.cultivo",
                  label: "Type of seed"
                },
                {
                  fieldName: "Nombre.variedad.utilizada",
                  label: "Name seed"
                },
                {
                  fieldName: "Superficie.Total.de.la.parcela",
                  label: "Total Cropland"
                }
              ]
          }]

      }

      
      
      
      
      
    //   const ai_popup =  {
    //     title: "Parcela {ID}",
    //     content: [{
    //         type: "fields",
    //         fieldInfos: [
    //           {
    //             fieldName: "Estado",
    //             label: "Estado"
    //           },
    //           {
    //             fieldName: "Municipio",
    //             label: "Municipio"
    //           },
    //           {
    //             fieldName: "Tipo.de.bitacora",
    //             label: "Tipo de parcela"
    //           },
    //           {
    //             fieldName: "Superficie.sembrada",
    //             label: "Superficie sembrada"
    //           },
    //           {
    //             fieldName: "Superficie.Total.de.la.parcela",
    //             label: "Superficie total"
    //           }
    //         ]
    //     }]



        const geojsonLayer = new GeoJSONLayer({
          url: url,

          opacity : 0.90, //test
          geometryType : "polygon", //test
          title:"",
          copyright: "Ingredion"
          //renderer: renderer //optional
        });

    // }
  

        geojsonLayer.popupTemplate = ae_mod_popup;

        function template_pop() {
          // Obtener el valor seleccionado del select
          var valorSeleccionado = select.value;
          
          // Actualizar el centro y el nivel de zoom del mapa
          switch (valorSeleccionado) {
            case "OI_2023_2024":
              view.center = [-107.64623847098305, 24.667757589780297];
              view.zoom = 12.052652255433804;
              break;
            case "PV_2023":
              view.center = [-102.99402283329239, 20.408126380236936];
              view.zoom = 13.584921765378848;
              break;
            case "OI_2022_2023":
              view.center = [-107.64623847098305, 24.667757589780297];
              view.zoom = 12.052652255433804;
              break;
            case "PV_2022":
              view.center = [-102.99402283329239, 20.408126380236936];
              view.zoom = 13.584921765378848;
              break;
            case "2022":
              view.center = [-107.528393225596, 24.596031365750203];
              view.zoom = 11.32175031488915;
              break;
              case "":
                view.center =  [-100.42128648434635, 23.921222506838383];
                view.zoom = 4.746438611076199;
                break;
            default:
              break;
          }
        }

        
        map = new Map({
          basemap: "satellite",
          //nuevo
          layers: [geojsonLayer]
          });


        const featureContainer = document.getElementById("features");
        const instructions = document.getElementById("instructions");
        view = new SceneView({
          container: "BT",
          center: [-100.42128648434635, 23.921222506838383],
          zoom: 4.746438611076199,
          map: map,
        popup: {
              autoOpenEnabled: false // We do not want the default popup to display
            }
          });

          geojsonLayer.renderer = {
            type: "unique-value",  
            defaultSymbol: {
              type: "polygon", 
              symbolLayers: [oi_template,pv_template]
            },
            field:"Ciclo",
            label:"Ciclo Agronómico",
                uniqueValueInfos :[
                  {
                    value :"Spring-Summer",
                    symbol: pv_template,
                    label:"Spring-Summer"
                  },
                  {
                    value :"Fall-Winter",
                    symbol: oi_template,
                    label:"Fall-Winter"
                  }
                ]
  
            };
            // geojsonLayer.renderer.parcela = "Tipo.de.bitacora"
            // console.log(geojsonLayer.renderer.parcela)
            var select = document.getElementById("filter");
            select.addEventListener("change", actualizarMapa);
            function actualizarMapa() {
              // Obtener el valor seleccionado del select
              var valorSeleccionado = select.value;
              
              // Actualizar el centro y el nivel de zoom del mapa
              switch (valorSeleccionado) {
                case "OI_2023_2024":
                  view.center = [-107.64623847098305, 24.667757589780297];
                  view.zoom = 12.052652255433804;
                  break;
                case "PV_2023":
                  view.center = [-102.99402283329239, 20.408126380236936];
                  view.zoom = 13.584921765378848;
                  break;
                case "OI_2022_2023":
                  view.center = [-107.64623847098305, 24.667757589780297];
                  view.zoom = 12.052652255433804;
                  break;
                case "PV_2022":
                  view.center = [-102.99402283329239, 20.408126380236936];
                  view.zoom = 13.584921765378848;
                  break;
                case "2022":
                  view.center = [-107.528393225596, 24.596031365750203];
                  view.zoom = 11.32175031488915;
                  break;
                  case "":
                    view.center =  [-100.42128648434635, 23.921222506838383];
                    view.zoom = 4.746438611076199;
                    break;
                default:
                  break;
              }
            }

            //popup
       // Use a function to format the content of the popup
       function formatContent(event) {
        const attributes = event.graphic.attributes;
        let text = "";
        // Only display the attributes if they exist
        // text += attributes.website
        //   ? `Brewery: <a href="${attributes.website}">${attributes.name}</a><br>`
        //   : `Brewery: ${attributes.name}<br>`;
        // text += attributes.address1 ? `Address:<br>${attributes.address1}<br>` : `Located in: `;
        // text += attributes.city && attributes.state ? `${attributes.city},${attributes.state}<br>` : ``;
        // text += attributes.phone !== null ? `Phone:${attributes.phone}` : ``;
        text += attributes.Estado ? `${attributes.Estado}` : ``
        text += attributes['Tipo.de.bitacora'] ?  `${attributes['Tipo.de.bitacora']}`:``
        text += attributes.Municipio ? `${attributes.Municipio}` :``
        text += attributes.Innovaciones ? `${attributes.Innovaciones}` : ``

        let textElement = new TextContent({
          text: text
        });
        return [textElement];
      }

            //dropdown.
            view.when().then(function() {
              view.whenLayerView(geojsonLayer).then(function(layerView) {
                const filterSelect = document.getElementById("filter");
                // filters the layer using a definitionExpression
                // based on a religion selected by the user
                filterSelect.addEventListener("change", function(event) {
                  const newValue = event.target.value;
                  const whereClause = newValue
                    ? "Anio.Bitacora = '" + newValue + "'"
                    : null;
                  layerView.filter = {
                    where: whereClause
                  };
                  // close popup for former cluster that no longer displays
                  view.popup.close();
                });
              });
            });

      // When view is ready
      view.when().then(function () {
        view.on("click", function (event) {
          // Remove any existing highlighted features
          handles.removeAll();

          // Clears the parent div's content
          featureContainer.innerHTML = ""
          // Call fetchFeatures and pass in the click event location
          view.popup.fetchFeatures(event).then(function (response) {

            // Iterate through all the returned features to access their
            // layerview and graphics
            response.promisesPerLayerView.forEach(function (fetchResult) {

              const layerView = fetchResult.layerView;
  
              // Iterate through the promise results to access its graphics
              fetchResult.promise.then(function (graphics) {

                // There is no associated popupTemplate with the basemap layer. If
                // the returned graphics.length is more than 0, create divs from
                // the returned graphics.
                if (graphics.length > 0) {

                  const groupDiv = document.createElement("div");
                  groupDiv.className = "container";
                  const layerTitle = document.createElement("h3");
                  layerTitle.innerHTML = layerView.layer.title;
                  groupDiv.appendChild(layerTitle);
                  featureContainer.appendChild(groupDiv);

                  // Iterate through all of the returned graphics from the resulting
                  // layer views, create a new feature, and append a new div for it.
                  graphics.forEach(function (graphic) {

                    // ImageryLayerView does not have highlight so check that it exists
                    // before calling it. Can also check if (layerView.layer.type === "feature").
                    if (typeof layerView.highlight === "function")  {
                      handles.add(layerView.highlight(graphic));
                    }
                    // const featureChild = new Feature({
                    //   container: document.createElement("div"),
                    //   graphic: graphic,
                    //   map: view.map,
                    //   spatialReference: view.spatialReference
                    // });
                    let featureChild;
                    if (graphic === null){


                    }else{
                      featureChild = new Feature({
                        container: document.createElement("div"),
                        graphic: graphic,
                        map: view.map,
                        spatialReference: view.spatialReference
                      });

                    };


                    groupDiv.appendChild(featureChild.container);

                    console.log(typeof(graphic.attributes))
                    console.log(Object.values(graphic.attributes))
                  });
                }

              });
            });
          });
        });
      });




    
        var homeBtn = new Home({
        view: view
        });

        const legend = new Legend({
          view: view,
          container: "legendDiv",
          layerInfos: [
            {
              layer: map,
              title: ""
            }
          ]
        });


        view.ui.remove("navigation-toggle");
        view.ui.remove("compass");

        var basemapGallery = new BasemapGallery({
            view: view,
            container: document.createElement("div")
        });



        var bgExpand = new Expand({
            view: view,
            content: basemapGallery
        });


        view.ui.move("zoom", "top-left");
        view.ui.add(bgExpand, "top-left");

        const searchWidget = new Search({
          view: view
        });

        view.ui.add(searchWidget, {
          position: "top-right"
        });
        view.ui.add(homeBtn, "top-left");

        view.ui.add("logoDiv", "bottom-right");



});