requirejs(['Interface'], function(Interface){
	var myInterface = new Interface('myInterface', ['a', 'b']),
		obj = {
			a: function (){}
		};

	Interface.ensureImplements(obj, myInterface);
});
