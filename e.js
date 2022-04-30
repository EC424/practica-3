var edgardo={
	nombre:'edgardo',
	edad:23,
	mostrar:function(){
		alert(this.nombre)
	},
};
var empleado=Object.create(edgardo);
empleado.mostrar();
empleado.cambiar=function(nuevonombre){
	this.nombre=nuevonombre;
};
empleado.cambiar('luis');
empleado.mostrar();

var empleado2=Object.create(empleado);
empleado2.mostrar;