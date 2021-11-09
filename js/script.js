document.getElementById("boton").addEventListener("click", function(){
		var nombre = document.getElementById("nombre").value;
		var apellidos = document.getElementById("apellidos").value;
		var edad = document.getElementById("edad").value;
		
		var pais = document.getElementById("pais").value;
		var fecha = document.getElementById("fecha").value;
		var color = document.getElementById("color").value;
		var cuenta = document.getElementById("cuenta").value;
		
		var imagen = document.getElementById("imagen").value;
		var comentarios = document.getElementById("comentarios").value;
		
		
  alert('Nombre: '+nombre +' Apellidos: '+apellidos +' Edad: ' + edad+ ' País: '+pais+ ' Fecha naciemiento: '+ fecha+ ' Cuenta: ' + cuenta+ ' Comentarios: ' +comentarios+' Color: '+ color);
  
  
  document.getElementById("n").innerHTML = nombre;
  document.getElementById("a").innerHTML = apellidos;
  document.getElementById("e").innerHTML = edad;
  document.getElementById("f").innerHTML = fecha;
  document.getElementById("c").innerHTML = cuenta;
  document.getElementById("co").innerHTML = comentarios;
  document.getElementById("col").innerHTML = color;
  
 });
 