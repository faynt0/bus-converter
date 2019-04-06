function convert(){
	var textA = document.getElementById('text-input').value.split('\n');
	//var expName = /[A-Za-z0-9]+/;
	var expValue = /[0-9]+\/[0-9]+(\/[0-9]+)?/;
	var tempA = [];
	var outputS = '';
	
	textA.forEach(function(item){
		var valueS = item.match(expValue)[0];
		var textS = item.replace(' ' + valueS,'');
		var keyS = valueS.replace(/\/.+/,'');
		valueS = valueS.replace(keyS +'/','');
		textS += ' ' + keyS;
		var newObj = {
			'title': textS,
			'size': valueS
		}
		var exists = Object.keys(tempA).some(function(k) {
			console.log(tempA[k]);
			return tempA[k].title == textS;
		});
	
		if (!exists){
			tempA.push(newObj);
		}
	});
	
	
	tempA.forEach(function(item){
		outputS += item.title + '/\n';
	});
	
	document.getElementById('text-output').value = outputS;
	console.log(tempA);
}