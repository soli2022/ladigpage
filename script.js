/*nuestro documento js, el cual vinculamos con la etiqueta scrip:src en nuestro index. el el que va,mos a usar para poder hacer que nuetras pagina web puede tener funcionalidades. 

con las variables podemos alamacenar cosas que se guardan en en memoria, serian como cajas/ baulues llamadas variables. 
pero no son visibles... entonces como hacemos que sean visibles , como hacemos para buscarlos,? como hacemos para saber cual es cada baul.... pues, la tenemos que declarar, tendra su declaracion, su nombre y asi la podemos buscar... 
ejemplo var nombre= "brenda" las comillas porque indica que es un texto lo que va entre comillas se llama string. los numero van sin "" 
se pueden agrupar variables, con la palabra funtcion la definimos con el nombre de funtcion y el nombre ejemplo funtcion nombre (y aca va el parametro ){aca va lo que queremos que haga esta funcion }  */


//ahora vamos a agregarle a nuestra web, una calculadora sencilla, usando el atributo onclick...


function mifuncion(){ // creamos nuestra funcion 
    let  x,y,suma,text; // declaramos nuestra variables, 4 dentro de una misma linea

    x = document.getElementById("num1").value; // llamamos nuestra varaible con el metodo getElementById que lo que hace es seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.
    //entonces para que  se utiliza el: id  identifica el elemento al vincularlo ya sea  en scripts u hojas de estilo (con CSS ... nuestro id es num1 y num2 que anteriormente hemos puesto en  nuestro input.
    y = document.getElementById("num2").value;



    
    suma = parseFloat(x)+parseFloat(y);// esta variable va hacer el calculo  de las variables anteriormente, con el metodo parsetFloat, analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.  por que ? por que los numero que introducimos en los que son los input siempre se converten en texto. entonces usando float los convierte en numero... y hace la suma en vez de concatenar.

    text= suma;// ahora la variable texto se convierte en la funcion de suma 

    document.getElementById("sumando").innerHTML = text;//aca llamamos el id de sumando. con innerHTML que  es una propiedad  nos permite leer un dato o asignarlo al contenido de un div y asiganamos  todo a la variable texto.
}



//vamos agregarle una funcionalidad a nustro formulario 
// inputs = document.getElementsByClassName(inputt); //aca le digo que me traiga todos los elemntos con ese nombre de clase. 
//ahora vamos  hacer un recorrido con una ciclo for.
 //for (var i =0; i < inputs.length;i++){//mi for se va a ejecutar de acuerdo a la cantidad de elementos que tenga con la clase input. hara el recorrido la cantidad de veces a los elemtos que halla 
  /////inputs[i].addEventListener('keyup',function(){
   //if(this.value.length>=1){
    //this.nextElementSibling.classList.add('fijar');
    //}else{
       // this.nextElementSibling.classList.remove('fijar')

 //   }
////} );//aca va cambiando automaticamente 

 //}



