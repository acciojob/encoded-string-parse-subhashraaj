const parseCode = (str) => {
	let splited = (str.split(0))
	let splited1 = [],obj={};
	//console.log(splited)
	for(let i=0;i<splited.length;i++){
		if(splited[i].length>1){
			splited1.push(splited[i]);
		}
	}
	//console.log(splited1);
	let keys = ["firstName", "lastName", "id"]
	for (let i=0;i<keys.length;i++){
		obj[keys[i]]=splited1[i];
	}
	console.log(obj);
};

// Do not change the code below
//const str = prompt("Enter str: ");
//alert(JSON.stringify(parseCode(str)));
