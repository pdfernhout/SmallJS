// Invoke the start method on a new TodoApp ST object.

let moduleName: string = "./Script/Todo.js";
import( moduleName )
	.then( module => { module.stTodoApp$class.$new().$start() } );
