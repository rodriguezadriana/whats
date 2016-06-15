/*var mensaje = [
{
	mensaje: 'contestame'
	persona : 'andy'
}
{
	mensaje: 'contestame'
	persona : 'joel'
}
];

var conversacion = 'andy';

$(document).ready(function(){

	consol.log(':D');

	for (var i =0; i< mensajes.length; i++){
		var temp =mensajes[i];

		if (conversacion == temp.persona){
		$('#contenedor').append(temp.persona);
	}
}*/

/* Funcion del Buscador de Palabras */
$(document).on("ready", main);
function main() {
	$("#tfBuscar").on("keyup", buscar); //es como el onclick del input
}
function buscar(){
	var tarjetas = $(".tarjeta"); //La clase del Contenedor
	var texto = $("#tfBuscar").val(); //El ID del Buscador
	texto = texto.toLowerCase(); //Devuelve el valor en Minisculas de la cadena...
	tarjetas.show(); //Mostramos los Resultados
	$(".resultados").show(); //Mostramos el Resultado Automatico
	for(var i=0; i< tarjetas.size(); i++){
		var contenido = tarjetas.eq(i).text();
		contenido = contenido.toLowerCase();
		var index = contenido.indexOf(texto);
	if(index == -1){
		tarjetas.eq(i).hide(); //Ocultamos los Resultados que no Concuerden con lo escribido
		$(".resultados").hide(); //Ocultamos los Resultados
		}
	}
}

/* Estilos del buscador al Hacer click */
var click = 0; //creamos la variable
$(".Buscador").click(function(){ //detectamos el click
    if(click == 0){ //si la variable es igual a 0
        click = 1; //cambiamos su valor a 1
        $(".Buscador").animate({ //hacemos la animcacion de alargar el ancho del Buscador
		width: "30%"
		});
        $(".Buscador").css({ //aplicamos los nuevos estilos
        "border": "1px solid #ff0000",
		"box-shadow": "0px 0px 5px 0px #ff0000"
        });
    }
    else { //sino
        click = 0; //reiniciamos la variable
        $(".Buscador").animate({//devolvemos los estilos originales
		width: "20%"/* valor inicial */
		});
        $(".Buscador").css({ //devolvemos los estilos originales
        "border": "1px solid #DDDDDD", /* valor inicial */
		"box-shadow": "none" /* valor inicial */
        });
    }
});

// Hacemos la Function para Recargar los Resultados
function resultados(){

/* Contador de Resultados */
var n = $(".tarjeta").length;
$("span.resultados").text("Se encontraron " + n + " Resultados.");
}

// Establecemos el temporizador a 1 segundos
timer = setInterval("resultados()", 1000);


//esto es para agregar el mensaje//
window.onload = function() {

  // Get references to elements on the page.
  var form = document.getElementById('message-form');
  var messageField = document.getElementById('message');
  var messagesList = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var closeBtn = document.getElementById('close');


  // Create a new WebSocket.
  var socket = new WebSocket('ws://echo.websocket.org');


  // Handle any errors that occur.
  socket.onerror = function(error) {
    console.log('WebSocket Error: ' + error);
  };


  // Show a connected message when the WebSocket is opened.
  socket.onopen = function(event) {
    socketStatus.innerHTML = 'Connected to: ws://echo.websocket.org';
    socketStatus.className = 'open';
  };


 

  // Show a disconnected message when the WebSocket is closed.
  socket.onclose = function(event) {
    socketStatus.innerHTML = 'Disconnected from WebSocket.';
    socketStatus.className = 'closed';
  };


  // Send a message when the form is submitted.
  form.onsubmit = function(e) {
    e.preventDefault();

    // Retrieve the message from the textarea.
    var message = messageField.value;

    // Send the message through the WebSocket.
    socket.send(message);

    // Add the message to the messages list.
    messagesList.innerHTML += '<li class="sent"><span class="contacto">Laboratoria:</span>' + message +
                              '</li>';

    // Clear out the message field.
    messageField.value = '';

    return false;
  };


  // Close the WebSocket connection when the close button is clicked.
  closeBtn.onclick = function(e) {
    e.preventDefault();

    // Close the WebSocket.
    socket.close();

    return false;
  };

};




