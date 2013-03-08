window.rms.moduleA = function(win, doc, $, _, Modernizr){

	var compiledModuleATemplate = Handlebars.getTemplate('/modules/moduleA/moduleA.hbs');

	//private properties
	var privateValue = 'privateValue';
	var privateMethod = function(){
		return privateValue;
	};

	//public properties
	var publicValue = 'publicValue';
	var publicMethod = function(){
		return publicValue;
	};

	//initalize
	var initialize = function(){

		var moduleADataAndView = compiledModuleATemplate({ name : 'I am module A' });

		$('body').append(moduleADataAndView);

		console.log(privateValue,privateMethod(),publicValue,publicMethod());

	}();

	console.log(this); //here this is rms object

	//public interface
	return {
		publicValue:publicValue,
		publicMethod:publicMethod
	};

}.call(window.rms, window, document, jQuery, _, Modernizr /*, omitted undefined here */);
