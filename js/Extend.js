define(function(){
	var Extend = {
		/* 类式继承 */
		classExtend: function (subClass, superClass) {
			var Super = function () {};
			Super.prototype = superClass.prototype;
			subClass.prototype = new Super();
			subClass.prototype.constructor = subClass;
			
			subClass.superClass = superClass.prototype;		// 为什么不是 subClass.superClass = superClass?
			if(superClass.prototype.constructor == Object.prototype.contructor){
				superClass.prototype.constructor = superClass;
			}
		},
		
		/* 原型链继承：浅复制 */
		clone: function (obj) {
			var Sub = function () {};
			Sub.prototype = obj;
			return new Sub();
		},
		
		/* 原型链继承：深复制 */
		deepClone: function (obj) {
			var Sub = function () {};
			Sub.prototype = obj;
			var sub = new Sub();
			
			for(var i in obj){
				if(obj.hasOwnProperty(i)){
					if(obj[i] !== null && typeof obj[i] == 'object'){	// 只对 Object 和 Array 进行深复制
						if(Object.prototype.toString.call(obj[i]) == '[object Array]'){
							sub[i] = obj[i].concat();
						}else{
							sub[i] = arguments.callee(obj[i]);
						}
					}
				}
			}
			
			return sub;
		}
	};
	
	return Extend;
});
