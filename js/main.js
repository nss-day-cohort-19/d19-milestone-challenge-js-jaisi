console.log("i am here");

var button=document.getElementById("btn-tree");
var x = document.getElementById("btn-tree");
x.addEventListener("click", tree);

y=document.getElementById("height");
z=document.getElementById("char");

y.addEventListener('keyup', event);
z.addEventListener('keyup', event);



props={};

 function event(q){
 	console.log("enter was pressed");
 	//check to see if the enter key was pressed
	if (q.which === 13) {
	  console.log("i am within the if");
	   //if so, run the tree function
	   tree(props);
	}
 }




function tree(props){
	props.height = y.value;
	props.char = z.value;
	console.log("within the function",props.height,props.char);

	//var height = document.getElementById("height").value;
	console.log("height",props.height);
	//var char = document.getElementById("char").value;
	if(!props.height || !props.char){
		alert("There should be a value for both height and char");
		
	}
	else 
	{
		var tree = "";
		var blank= " ";

		console.log("char",props.char); 
		var j=props.height-1;
		for(i=0; i<props.height;i++){
			
			blank=blank.repeat(j);
			if (i===0){
 				tree += props.char;
 			}
 			else{
 				tree += props.char+props.char;
 			}
 
 			
 			console.log(blank+tree);
 			blank=" ";
 			j--;
 			
 		}
	}
}

