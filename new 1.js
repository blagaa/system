var textfield;
var output;
var submit;
var molecule = ["NaCl","H2O","Ca(OH)2","Al2(SO4)","[Cu(NH3)4(H2O)2]SO4"];

function setup() {
	noCanvas();
	textfield = select ("#input");
	output = select ('#output')
	submit = select ("#submit");
	submit.mousePressed(newText);
}

function newText() {
	var s = textfield.value();
	var r - /a-z/gi;
	var m = molecule.match(r);
for (var i=0; 1 <= molecule.length <= 100; i++){
	createP(molecule[i]);
}
}	