console.log("i am here");

var button=document.getElementById("btn-tree");
var x = document.getElementById("btn-tree");
x.addEventListener("click", tree);

y=document.getElementById("height");
z=document.getElementById("char");

y.addEventListener('keyup', event);
z.addEventListener('keyup', event);
 
 function event(q){
 	console.log("enter was pressed");
 	//check to see if the enter key was pressed
	if (q.which === 13) {
	  console.log("i am within the if");
	   //if so, run the tree function
	   tree();
	}
 }




function tree(){
	console.log("within the function");
	var height = document.getElementById("height").value;
	console.log("height",height);
	var char = document.getElementById("char").value;
	if(!height || !char){
		alert("There should be a value for both height and char");
		
	}
	else 
	{
		tree = "";
		console.log("char",char); 

		for(i=0; i<height;i++){

			if (i===0){
				tree += char;
			}
			else{
				tree += char+char;
			}


			console.log(tree);
		}
	}
}

