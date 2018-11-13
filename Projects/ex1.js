//A();
var b;
function C() {
	console.log("OOPS!");
}

function E(f) {
	console.log("E");
	f();
	var f = F;
}

var A = function() {
	console.log("A");
	B();
};

var C;

function G() {
	console.log("G");
	//H();

	var H = (function() {
		console.log("H");
		I();
	})();
}

var D = d;

function d() {
	console.log("D");
	E(F);
}

function I() {
	console.log("I");
	J();
	J();
}

B = function() {
	console.log("B");
	C();
};

var F = function() {
	console.log("F");
	G();
};
var window = [];
var rest = "KLMNOPQRSTUVWXYZ".split("");
for (var i=0; i<rest.length; i++) {
	(function(i){
		// define the current function
		window[rest[i]] = function() {
			console.log(rest[i]);
			if (i < (rest.length-1)) {
				window[rest[i+1]]();
			}
		};
	})(i);
}

var J = function() {
	J = function() {
		console.log("J");
		window[rest[0]]();
	};
};

C = function() {
	console.log("C");
	D();
};
(function () { A()})(); 