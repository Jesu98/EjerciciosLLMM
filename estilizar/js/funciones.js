function creaCampos()
{
	var contenedor=document.getElementById('contenedor_campo');
	var objeto_input=document.createElement('input');
	objeto_input.type="text";
	objeto_input.placeholder="Insertar nombre";
	contenedor.appendChild(objeto_input);
	objeto_input.onblur=function()
	{
		var longitud=objeto_input.value.length;
		if (longitud>=4)
		{
		alert('El nombre tiene '+longitud+' letras.');
		alert_correcto=document.getElementById("contenedor_aviso");
		alert_correcto.className=("alert alert-success");
		alert_correcto.innerHTML=("CORRECTO");
		}
		else
		{
		alert('El nombre debe tener al menos 4 letras.');
		alert_incorrecto=document.getElementById("contenedor_aviso");
		alert_incorrecto.className=("alert alert-danger");
		alert_incorrecto.innerHTML=("INCORRECTO");	
		}
	}
}	