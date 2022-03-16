function validarTitulo()
{
	var peli=document.getElementById('titulo').value;
	var longitud=peli.length;	
	if (longitud>=4)
	{
		alert('Has elegido la pelicula '+peli);
	}
	else
	{
		alert('La pelicula debe tener al menos 4 caracteres');
	}	
}
var lista_pelis=["Histórica","Acción","Suspense"];
function cargarGenero()
{
	var objeto_select=document.getElementById("genero");
	for (i=0; i<lista_pelis.length; i++) 
	{
		var genero=document.createElement('option');
		genero.value=lista_pelis[i];
		genero.innerHTML=lista_pelis[i];
		objeto_select.appendChild(genero);
	}
}



function enviarPeli()
{
	var peli=document.getElementById('titulo').value;
	var longitud=peli.length;
	var genero=document.getElementById("genero").value;	
	if (longitud>=4)
	{
		alert('Se va a registrar la pelicula '+peli+ ' de género '+genero+'.');
	}
	
}