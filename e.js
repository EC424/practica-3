//OBJETOS
/*NOTACION LITERAL DE DECLARACION DE UN OBJETO
 var obj={
	nombre:'eduardo',
	edad:30,
	mostrar:function(){
	  alert(this.nombre);
	},
 };
 obj.mostrar();
 */

/*CONTRUCTORES
  Un contructor es usado para crear copias del objeto que contienen , los contructores se declaran como 
  funciones anónimas.
  var contructor=function(){
	var obj={
	   nombre:'eduardo',
	   edad:30,
	   mostrar:function(){
	      alert(this.nombre)
	   },
	};
  };
  var objeto1=contructor();
  objeto1.mostrar();
   */

/*OPERADOR NEW
  Es un tipo de contructor especial, se define el objeto como una funcion y para crear un objeto de usa new ;
  se usara this parareferenciar todo dentro de la funcion objeto .
  function miobjeto(){
	this.nombre='eduardo';
	this.edad=30;
	mostrar=function(){
	   alert(this.nombre);
	};
  };
  var empeado= new miobjeto();
  empleado.mostrar();
  */

/*HERENCIA
  Se le llama asi por que los objetos que siguen en la linea e¡heredan las propiedades y metodos 
  del objeto prototipo que contiene "Object.create(prototipo de objeto)"
  ejem:

  var objeto={
	nombre:'eduardo',
	mostrar:function(){
	   alert(this.nombre);
	},
  };
  var empleado=Object.create(objeto);
  empleado.nombre='Santiago'
  empleado.mostrar();

  NOTA:empleado es el nuevo objeto q¡creado y el cual hereda todas las propiedades y métodos del objeto que en 
  este caso hace el papel de protito para la cracion de otrso objetos , si creamos otro objeto y este usa de 
  prototipo a empleado, todos los cambios echos en empleado que lo diferencian de objeto los heredara dicho 
  objeto.
  */