var constructor=function(nombreinicial){
	var obj={
		nombre:nombreinicial,
		edad:30,
		mostrardatos:function(){
			alert(this.nombre);
		},
		cambiardatos:function(nombrenuevo){
			this.nombre=nombrenuevo;
		},
	};
	return obj;
};
var empleado1=constructor('eduardo');
var empleado2=constructor('Gonzales');
var empleado3=constructor('Gamarra');
alert(empleado1.nombre+'\n'+empleado2.nombre+'\n'+empleado3.nombre);
alert(constructor('nombre1').nombre+'\n'+constructor('nombre2').nombre+'\n'+constructor('nombre3').nombre);
