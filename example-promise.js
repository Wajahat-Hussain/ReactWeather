function getTempCallback(location, callback) {
	callback(undefined, 78);
	callback('City Not Found');
} 

getTempCallback("Karachi", function(err, temp){
	if(err){
		console.log('error', err);
	}
	else {
		console.log('success',temp);
	}

});

function getTempPromise(location){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(14);
			reject('City Not Found');
		},1000);
	});
}
getTempPromise("Karachi").then(function(temp){
	console.log('Success!',temp);
},
	function(err){
		console.log('Error!',err);
	}
);

function addNumber(a,b) {
	return new Promise(function(resolve,reject){
		if(typeof a === 'number' && typeof b === 'number'){
				resolve(a + b);
		}
		else {

			reject('Please provide Number Types');
		}
	});
}

addNumber(4,'Asajn sn Ma').then(function(sum){
		console.log('Success',sum)
	},function(err){
		console.log('Error',err);
	}
);