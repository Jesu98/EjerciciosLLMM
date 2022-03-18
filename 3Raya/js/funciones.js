function cargarTabla(cuerpo)
{
	let casillas=document.getElementsByTagName('td');
	for  (i =0; i<casillas.length; i++) 
	{
	casillas[i].style.height="50px";
	casillas[i].style.width="50px";
	casillas[i].style.padding="0px";
	casillas[i].style.textAlign="center";
	}	
}
let turno=1;
function clickTurno(casilla)
{
	if (casilla.innerHTML=="X" || casilla.innerHTML=="O") {
		alert("Haga click en otra casilla");
	}
	else{
	if (turno==1) {
		turno=0
		casilla.innerHTML="X";
	}
	else
	{
		turno=1
		casilla.innerHTML="O";
	}
}
}
