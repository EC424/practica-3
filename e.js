var constructor=function(){
	var objeto={
	  nombre:'eduardo',
	  edad:30,
	  mostrarnombre:function(){
	  	alert(this.nombre+'tiene'+this['edad']);
	  },
	};
	return objeto;
};
constructor().mostrarnombre();