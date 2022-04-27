var constructor=function(){
	        var nombre='edu';
         	var edad=21;
         var obj={
         	
         	mostrar:function(){
         		alert(nombre)
         	},
         	cambiar:function(valor){
                 nombre=valor
         	},
         };
         return obj;
};
var objeto1=constructor();
objeto1.cambiar('melissa');
objeto1.mostrar();


