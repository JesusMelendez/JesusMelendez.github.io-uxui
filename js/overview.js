//los demas
const t1 ='./js/t1.json';
const t2 ='./js/t2.json';
//capacitacion data
const t3 ='./js/t3.json';
const t4 ='./js/t4.json';
const t5 ='./js/t5.json';
const t6 ='./js/t6.json';


//main func
async function getData(url){

    let informacion = await fetch(url);
    let respuesta = await informacion.json();
    return respuesta;

}
async function contador(){
    await   $('.counter-count').each(function () {
           $(this).prop('Counter',0).animate({
               Counter: $(this).text()
           }, {
               duration: 500,
               easing: 'swing',
               step: function (now) {
         var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
                   $(this).text(Math.ceil(now));
                 $(this).text(parseFloat(now).toLocaleString(size));
               }
           });
         });
};
function sumValue(set_datos){
 
    let sumados = [];
    set_datos.forEach(element => {
    let subset = element.RESULTS;
    // console.log(subset);
    

    let suma = subset.map(item => item.val).reduce((prev, curr) => prev + curr, 0)
    
    // console.log(suma)
 
    sumados.push(suma)

    // console.log(sumados);
    return sumados;

    
    });
    let total = sumados.reduce((prev, curr)=>prev + curr,0).toFixed(0)
    // console.log(total)
    return Number(total);



};
function sumHa(set_datos){
 
    let sumados = [];
    set_datos.forEach(element => {
    let subset = element.RESULTS;
    // console.log(subset);
    

    let suma = subset.map(item => item.surface).reduce((prev, curr) => prev + curr, 0)
    
    // console.log(suma)
 
    sumados.push(suma)

    // console.log(sumados);
    return sumados;

    
    });
    let total = sumados.reduce((prev, curr)=>prev + curr,0).toFixed(0)
    // console.log(total)
    return Number(total);



};
function sumEve(set_datos){
 
    let sumados = [];
    set_datos.forEach(element => {
    let subset = element.RESULTS;
    // console.log(subset);
    

    let suma = subset.map(item => item.numero).reduce((prev, curr) => prev + curr, 0)
    
    // console.log(suma)
 
    sumados.push(suma)

    // console.log(sumados);
    return sumados;

    
    });
    let total = sumados.reduce((prev, curr)=>prev + curr,0).toFixed(0)
    // console.log(total)
    return Number(total);



};
//execute
async function overview(){


    let farm_ha_even = await getData(t1);

    let productores_y1 = farm_ha_even.KPI_SET[0].OBSERVATIONS;

    let acumulado_prod_y1 = sumValue(productores_y1);

    let productores = document.getElementById('productores');
    productores.innerHTML = acumulado_prod_y1;
    
    
    /***Hectareas **/

    let infra_y1 = farm_ha_even.KPI_SET[3].OBSERVATIONS;
    let acumulado_infra_y1=sumValue(infra_y1);
    let hectareas = document.getElementById('hectareas');
    hectareas.innerHTML = acumulado_infra_y1;
    
    //ha AC
    let surface_ac = await getData(t3);
    let sur_ac_y1 = surface_ac.KPI_SET[0].OBSERVATIONS;
    let acumulado_surAc_y1=sumHa(sur_ac_y1);
    let ac_ha = document.getElementById('AC_ha');
    ac_ha.innerHTML = acumulado_surAc_y1;

    /**Eventos **/

    let even_t2 = await getData(t2);
    let even_t4 = await getData(t4);
    let even_t5 = await getData(t5);
    let even_t6 = await getData(t6);

    let acu_asis_evt1 = farm_ha_even.KPI_SET[24].OBSERVATIONS;
    let acu_asis_evt3 = surface_ac.KPI_SET[2].OBSERVATIONS;

    let acu_asis_evt2 = even_t2.KPI_SET[3].OBSERVATIONS;
    let acu_asis_evt4 = even_t4.KPI_SET[5].OBSERVATIONS;
    let acu_asis_evt5 = even_t5.KPI_SET[4].OBSERVATIONS;
    let acu_asis_evt6 = even_t6.KPI_SET[3].OBSERVATIONS;


    let sum_as_t1 = sumEve(acu_asis_evt1);
    let sum_as_t3 = sumEve(acu_asis_evt3);

    let sum_as_t2 = sumEve(acu_asis_evt2)
    let sum_as_t4 = sumEve(acu_asis_evt4)
    let sum_as_t5 = sumEve(acu_asis_evt5)
    let sum_as_t6 = sumEve(acu_asis_evt6)




    let suma_ciclos_asis_eve = sum_as_t1+sum_as_t2 +sum_as_t3+ sum_as_t4 + sum_as_t5 + sum_as_t6;
    console.log(suma_ciclos_asis_eve);
    let eventos  = document.getElementById('asistentes');
    eventos.innerHTML = suma_ciclos_asis_eve; 
    contador()
};
overview();