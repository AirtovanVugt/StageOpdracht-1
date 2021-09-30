var getallen = document.getElementById("Getallen");
var theModulo = document.getElementById("TheModulo");
var check = document.getElementById("Check");
var uitslag = document.getElementById("Uitslag");

check.onclick = function ValidateNumber(){
	var nummers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	var getal = getallen.value.split("");
	var verder = [];
	for(i=0; i<=getal.length-1; i++){
		if(nummers.includes(getal[i])){
			verder.push(getal[i]);
		}
	}
	if(verder.length <= 5 || verder.length >= 15){
		alert("te veel of te weinig cijfers.");
	}
	else{
		var aftellen = [];
		var antwoorden = [];
		for(j=verder.length; j>=1; j--){
			aftellen.push(j);
		}
		var optellen = 0;
		for(i=0; i<=verder.length-1; i++){
			var antwoord = verder[i] * aftellen[i];
			antwoorden.push(antwoord);
			optellen = optellen + antwoorden[i];
		}
		var einde = optellen % theModulo.value;
		if(einde == 0){
			uitslag.innerHTML = "Valid";
		}
		else{
			uitslag.innerHTML = "Invalid";
		}
	}
}