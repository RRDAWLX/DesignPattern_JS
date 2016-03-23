requirejs(['Extend'], function(Extend){
	var obj = {
		a: 'a',
		1: 1,
		arr: [1, 'a'],
		b: null,
		c: undefined,
		d: true,
		f: function () {},
		r: /^abc$/g,
		o: {
			t: 5
		}
	}
	
	console.log('obj:');
	console.log(obj);
	
	var clone = Extend.clone(obj);
	console.log('clone: ');
	console.log(clone);
	
	var deepClone = Extend.deepClone(obj);
	console.log('deep clone: ');
	console.log(deepClone);
});
