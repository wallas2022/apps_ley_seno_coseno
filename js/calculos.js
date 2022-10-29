$(document).ready(function(){

  const angulocompleto = 180;

  dibujar_triangulo("?","?","?");
    $("#angulo_a").change(function(){
      dibujar_triangulo($(this).val());

    });

    $("#btn_calcular").on("click",function(){
    // inicializacion de variables
     var resultado = 0
     var html = "";
     var angulo_a =0;
     var angulo_b = 0;
     var angulo_c = 0;

     var lado_a =0;
     var lado_b = 0;
     var lado_c = 0;

      angulo_a = $("#angulo_a").val();
      angulo_b = $("#angulo_b").val();
      angulo_c = $("#angulo_c").val();
   
      lado_a = $("#lado_a").val();
      lado_b = $("#lado_b").val();
      lado_c = $("#lado_c").val();
       // Valores conocidos 

      html = valores_conocidos(angulo_a,angulo_b, angulo_c, lado_a, lado_b, lado_c);

       // Caso 1 AAL -- Tenemos Angulo 1 y angulo 2 
       if ( angulo_a > 0 && angulo_c > 0 && (lado_c > 0 || lado_a > 0 ) ){
          
        lado_a = AAL(angulo_a,angulo_c,lado_c);
        $("#lado_a").val(lado_a.toFixed(2));
        
         // Calculo de angulos teniendo dos conocidos 
   
            if( angulo_a == 0 && (angulo_b  > 0 && angulo_c > 0)){
                
              angulo_a = parseFloat(180 - (angulo_b + angulo_c));
              $("#angulo_a").val(angulo_a);
              lado_a = AAL(angulo_a,angulo_c,lado_c);
              html += " <tr>"+
              "<td>Paso #1: Aplicamos Ley de Senos para encontra lado a </td>"+
             "</tr>";
             html += " <tr>"+
              "<td> c/sin(C) = a/sin(A) </td>"+
             "</tr>";
              $("#lado_a").val(lado_a.toFixed(2));
            }// fin del if
            if( angulo_b == 0 && (angulo_a  > 0 && angulo_c > 0)){
           
                // si tenenemos dos angulos y falta uno calculamos el valor del tercero
                angulo_b = encontrar_angulo(angulo_a,angulo_c)
                $("#angulo_b").val(angulo_b);
                lado_b = AAL(angulo_c,angulo_a,lado_a);
                $("#lado_b").val(lado_b.toFixed(2));

            }// fin del if
            if( angulo_c == 0 && (angulo_a  > 0 && angulo_b > 0)){
                
              angulo_c = encontrar_angulo(angulo_a,angulo_c)
              $("#angulo_c").val(angulo_c);
              lado_c = AAL(angulo_c,angulo_b,lado_b);
              html += " <tr>"+
              "<td>Paso #1: Aplicamos Ley de Senos para encontra lado a </td>"+
             "</tr>";
             html += " <tr>"+
              "<td> c/sin(C) = b/sin(B) </td>"+
             "</tr>";
              $("#lado_c").val(lado_c.toFixed(2));

            }// fin del if
 

   }// fin del if

    // Caso 2 AAL -- Tenemos Angulo 1 y angulo 2 
    if ( angulo_a > 0 && angulo_b > 0 && (lado_b > 0 || lado_a > 0 )){

      lado_c = AAL(angulo_a,angulo_b,lado_c);
      $("#lado_c").val(lado_c.toFixed(2));
      
       // Calculo de angulos teniendo dos conocidos 
 
          if( angulo_c == 0 && (angulo_b  > 0 && angulo_a > 0)){
              
            angulo_c = encontrar_angulo(angulo_a,angulo_b)
            $("#angulo_c").val(angulo_c);
            lado_a = AAL(angulo_a,angulo_b,lado_b);
            $("#lado_a").val(lado_a.toFixed(2));
          }// fin del if
          if( angulo_b == 0 && (angulo_a  > 0 && angulo_c > 0)){
              // si tenenemos dos angulos y falta uno calculamos el valor del tercero
              angulo_b = encontrar_angulo(angulo_a,angulo_c)
              $("#angulo_b").val(angulo_b);
              lado_b = AAL(angulo_c,angulo_a,lado_a);
              console.log("--->"+lado_b);
              $("#lado_b").val(lado_b.toFixed(2));

          }// fin del if
          if( angulo_c == 0 && (angulo_a  > 0 && angulo_b > 0)){
              
            angulo_c = encontrar_angulo(angulo_a,angulo_c)
            $("#angulo_c").val(angulo_c);
            lado_c = AAL(angulo_c,angulo_b,lado_b);
            $("#lado_c").val(lado_c.toFixed(2));

          }// fin del if


 }// fin del if

 // Caso 2 AAL -- Tenemos Angulo 1 y angulo 2 
    if ( angulo_a > 0 && angulo_b > 0 && lado_b > 0 ){

      lado_c = AAL(angulo_a,angulo_b,lado_b);
      $("#lado_c").val(lado_c.toFixed(2));
      
       // Calculo de angulos teniendo dos conocidos 
 
          if( angulo_c == 0 && (angulo_b  > 0 && angulo_a > 0)){
              
            angulo_c = encontrar_angulo(angulo_a,angulo_b)
            $("#angulo_c").val(angulo_c);
            lado_a = AAL(angulo_c,angulo_b,lado_b);
            $("#lado_a").val(lado_a.toFixed(2));
          }// fin del if
          if( angulo_b == 0 && (angulo_a  > 0 && angulo_c > 0)){
              // si tenenemos dos angulos y falta uno calculamos el valor del tercero
              angulo_b = encontrar_angulo(angulo_a,angulo_c)
              $("#angulo_b").val(angulo_b);
              lado_b = AAL(angulo_c,angulo_a,lado_a);
              $("#lado_b").val(lado_b.toFixed(2));

          }// fin del if
          if( angulo_c == 0 && (angulo_a  > 0 && angulo_b > 0)){
              
            angulo_c = encontrar_angulo(angulo_a,angulo_c)
            $("#angulo_c").val(angulo_c);
            lado_c = AAL(angulo_c,angulo_b,lado_b);
            $("#lado_c").val(lado_c.toFixed(2));

          }// fin del if


 }// fin del if

 // CASO SENO LLL cuando tenemos solo los 3 lados sin ningun angulo 

    if((lado_a > 0 && lado_b > 0 && lado_c > 0) && (angulo_a == 0 && angulo_b == 0 && angulo_c == 0)){
    
      angulo_a = LLL(lado_a,lado_b, lado_c, "#angulo_a");
      angulo_b = LLL(lado_b,lado_c, lado_a,"#angulo_b");
      angulo_c = encontrar_angulo(angulo_a,angulo_b)
       $("#angulo_c").val(angulo_c);

    }

    // CASO SENO LAL cuando conocemos dos lados y un angulo 
   var ladomenor = 0;
    if(lado_a > 0 && lado_b > 0 && angulo_c > 0){

       lado_c = LAL(lado_a,angulo_c,lado_b);
       $("#lado_c").val(lado_c);
        //encontrar el lado mas pequeño entre lado a y lado c
        if( lado_a > lado_b){
          ladomenor = lado_a;
        }
        else{

          ladomenor = lado_b;

        }
          rad = grados_radianes(angulo_c);
          anguloC = Math.sin(rad);
          console.log("anguloC: "+ anguloC);
          C = (ladomenor*anguloC) / lado_c;
          console.log("lado menor: "+ladomenor);
          console.log("C:"+C);
          angulo = Math.asin(C);
          console.log("anguloC: "+angulo);
          grados = radianes_grados(angulo);
          $("#angulo_a").val(grados.toFixed(2));
          angulo_b = encontrar_angulo(grados,angulo_c);
          $("#angulo_b").val(angulo_b.toFixed(2));
    }

    if(lado_a > 0 && lado_c > 0 && angulo_b > 0){

      lado_b = LAL(lado_a,angulo_b,lado_c);
      $("#lado_b").val(lado_b);
   

      //encontrar el lado mas pequeño entre lado a y lado c
        if( lado_a > lado_c){
              ladomenor = lado_a;
            
        }
        else{

           ladomenor = lado_c;

        }
        rad = grados_radianes(angulo_b);
        console.log("Rad: "+ rad);
        anguloA = Math.sin(rad);
        console.log("anguloA: "+anguloA);
        A = ladomenor*(anguloA / lado_b);
        console.log("A: "+ A);
        angulo = Math.asin(A);
        console.log("angulo b: "+ angulo)
        grados = radianes_grados(angulo);
        $("#angulo_a").val(grados.toFixed(2));
        angulo_c = encontrar_angulo(grados,angulo_b);
        $("#angulo_c").val(angulo_c.toFixed(2));

   }

   if(lado_b > 0 && lado_c > 0 && angulo_a > 0){

    lado_a = LAL(lado_b,angulo_a,lado_c);
    $("#lado_a").val(lado_a);
     //encontrar el lado mas pequeño entre lado a y lado c
     if( lado_b > lado_c){
      ladomenor = lado_b;
        }
        else{

          ladomenor = lado_c;

        }
        rad = grados_radianes(angulo_a);
        anguloB = Math.sin(rad);
        console.log("anguloB: "+ anguloB);
        B = (ladomenor*anguloB) / lado_a;
        console.log("B:"+B);
        console.log("lado_b: "+ lado_a);
        angulo = Math.asin(B);
        console.log("angulo B: "+ angulo);
        grados = radianes_grados(angulo);
        $("#angulo_b").val(grados.toFixed(2));
        angulo_c = encontrar_angulo(grados,angulo_a);
        $("#angulo_c").val(angulo_c.toFixed(2));
    }

    // CASO 5 AAL 

    if(angulo_a > 0 && angulo_b > 0 && lado_c > 0){

       // encontrar el tercer angulo
       rad = grados_radianes(angulo_a);
       rad1 = grados_radianes(angulo_b);
       angulo_c = encontrar_angulo(angulo_a,angulo_b);
       rad2 = grados_radianes(angulo_c);
       $("#angulo_c").val(angulo_c.toFixed(2));

       total = (lado_c / Math.sin(rad2));
       console.log("total: "+ total);
       lado_b = (Math.sin(rad)*lado_c)/ Math.sin(rad2);
       $("#lado_b").val(lado_b.toFixed(2));
       console.log("lado_b: "+ lado_b);
       lado_a= (Math.sin(rad1)*lado_b)/ Math.sin(rad);
       $("#lado_a").val(lado_a);



    }
/*
    if(angulo_a > 0 && angulo_c > 0 && lado_b > 0){

      // encontrar el tercer angulo
      angulo_b = encontrar_angulo(angulo_a,angulo_c);
      rad = grados_radianes(angulo_b);
      rad1 = grados_radianes(angulo_a);
      rad2 = grados_radianes(angulo_c);
      $("#angulo_b").val(angulo_b.toFixed(2));

      total = (lado_c / Math.sin(rad2));
       console.log("total: "+ total);
       lado_c = (Math.sin(rad)*lado_b)/ Math.sin(rad);
       $("#lado_c").val(lado_c.toFixed(2));
       console.log("lado_c: "+ lado_b);
       lado_a= (Math.sin(rad2)*lado_c)/ Math.sin(rad1);
       $("#lado_a").val(lado_a);

      

   }*/
   
   dibujar_triangulo($(this).val());

      $("#solucion").html(html);
      dibujar_triangulo($(this).val());


    });
  });




  /**
   * autor 
   * 26-10-2022
   * Funcion Dibujar Triangulo con canvas HTML 5
   */
  function dibujar_triangulo(angulo_a,angulo_b,angulo_c){

    $("#cavas_triangulo").html("");
    var canvas = document.getElementById("canvas_triangulo");
    var ctx = canvas.getContext("2d");
    

    // dibujamos el triangulo
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo(60,30);
    ctx.lineTo(25,400);
    ctx.lineTo(400,475);
    ctx.closePath();
    ctx.stroke();
    
    // grados A
    ctx.beginPath();
    ctx.arc(38,50,45,0.2,0.4*Math.PI);
    ctx.stroke();

    // grados B
    ctx.beginPath();
    ctx.arc(25,410,35,11,0*Math.PI);
    ctx.stroke();

    // grados C
    ctx.beginPath();
    ctx.arc(405,455,45,0.9*Math.PI,-0.8*Math.PI);
    ctx.stroke();

    // texto Angulos A 
    ctx.font = "30px Arial";
    ctx.fillText("A", 45, 25); 
    ctx.fillText(angulo_a, 70, 140);

    // texto Angulos B 
    ctx.font = "30px Arial";
    ctx.fillText("B", 0, 415); 
    ctx.fillText(angulo_b, 60, 380); 

    // texto Angulos C 
    ctx.font = "30px Arial";
    ctx.fillText("C", 400, 500); 
    ctx.fillText(angulo_c, 310, 435); 


      // texto lado a 
      ctx.font = "30px Arial";
      ctx.fillText("a", 160, 455);
      //respuesta a
      ctx.fillText("?", 190, 460);
      
      // texto lado b
      ctx.font = "30px Arial";
      ctx.fillText("b", 235, 250);
      ctx.fillText("?", 260, 250);
      
      // texto lado c 
      ctx.font = "30px Arial";
      ctx.fillText("c", 15, 250); 
      ctx.fillText("?", 45, 250); 
      



  }

  /**
   *  autor Walter Rene Rosales 
   *  25-10-2022
   *  Funcion AAL:  para cuando se conocen dos ángulos y un lado, pero este último no se encuentra entre los vértices de los ángulos conocidos, por ejemplo: ángulos A y B y lado a.  
   */
  function AAL(angulo1, angulo2, lado){
   
    var x = 0
    var grado1 = grados_radianes(angulo1);
 
    var grado2 = grados_radianes(angulo2);

    var x1 = lado/Math.sin(grado2);
    console.log(x1);
    var x2 = Math.sin(grado1);
    console.log(x2);
    x = x1*x2;

    
    return x;

  }

  //*** lll lados son angulos */
   function LLL(lado_1,lado_2,lado_3,id){
    cos_A = 0;
    angulo_A  = 0;

    console.log(Math.pow(lado_1,2) );
    console.log(Math.pow(lado_2,2) );
    console.log(Math.pow(lado_3,2) );
    console.log(Math.pow(lado_2,2) + Math.pow(lado_3,2) - Math.pow(lado_1,2));
    total2 = 2*(lado_2 * lado_3);
   

    cos_A = (Math.pow(lado_2,2) + Math.pow(lado_3,2) - Math.pow(lado_1,2)) / total2
    console.log(cos_A);
   
    angulo_A = Math.acos(cos_A);
    gradosA = radianes_grados(angulo_A);
    console.log(gradosA);
    $(id).val(gradosA.toFixed(2));
    return gradosA.toFixed(2);

   }

   /**
    *  Funcion LAL 
    */

   function LAL(lado1,angulo1,lado2){

      var total = 0
      total1 = (Math.pow(lado1,2) + Math.pow(lado2,2)) 
      console.log(total1);
      total2 = (2*lado1*lado2 )
      console.log(total2);
      radianes = grados_radianes(angulo1);
      total4 = Math.cos(radianes);
      console.log("--->" + total4);

      total5 = total4 * total2;
      console.log(total5);
      total3= total1 - total5;
      console.log(total3);
      total = Math.sqrt(total3);
      console.log(total);
      return total.toFixed(2);
   }

   /**
   *  autor Walter Rene Rosales 
   *  25-10-2022
   *  Funcion LLA:  para cuando se conocen dos ángulos y un lado, pero este último no se encuentra entre los vértices de los ángulos conocidos, por ejemplo: ángulos A y B y lado a.  
   */
    function LLA(lado_a, lado_b, angulo_a){
   
      var x = 0
      var grado1 = grados_radianes(angulo_a);
  
      var x1 = lado/Math.sin(grado2);
      console.log(x1);
      var x2 = Math.sin(grado1);
      console.log(x2);
      x = x1*x2;
      return x;
  
    }
  /**
   * autor 
   * Funcion 
   */
  
  /**
   *  Autor
   *  Funcion que convierte grados a radiantes
   */
  function grados_radianes(grados){
   var  radianes = parseFloat(grados * (Math.PI / 180))
   return radianes
  }

  
  /**
   *  Autor
   *  Funcion que convierte radianes a grados
   */
   function radianes_grados(radianes){
    var  grados = parseFloat(radianes * (180/Math.PI ))
    return grados
   }

  /**
   * Autor 
   * Function calculo el angulo restante cuando existen dos conocidos 
   * 
   */
  function encontrar_angulo(angulo1,angulo2){
    angulo3 = 180 - angulo1 - angulo2;
    return angulo3
  }

  function valores_conocidos(angulo_a,angulo_b, angulo_c, lado_a, lado_b, lado_c){
       html = "";

       html += "<tr><td>";

       if(angulo_a > 0){
        html += " <p>angulo A = "+angulo_a+" </p>";
     
       }
       if(angulo_b > 0){
        html += " <p>angulo B = "+angulo_b+" </p>";
     
       }
       if(angulo_c > 0){
        html += " <p>angulo C= "+angulo_c+" </p>";
     
       }
       if(lado_a > 0){
        html += " <p>lado a = "+lado_a+" </p>";
     
       }
       if(lado_b > 0){
        html += " <p>lacdo b = "+lado_b+" </p>";
     
       }
       if(lado_c > 0){
        html += " <p>lado c= "+lado_c+" </p>";
     
       }

       html += "</td></tr>";

       return html;


  }