var p = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve('message 01');		
	}, 3000);
});

p.then(function(msg){
	console.log(msg);
});