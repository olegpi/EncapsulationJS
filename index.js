var vehicleClass = (function () {	
	//private 
	let color = 'red';
	let price = 50000;
	let brand;

	function setBrand(b) {
		brand = b;
	}
	
	function setColor(c) {
		if(typeof c !== 'undefined'){
			color = c;
		}			
	}

	let getBrand = function (b) {
		setBrand(b);
		return brand;	
	}
	
	let getColor = function (c) {
		setColor(c);
		return color;	
	}
	
	// public 			
	return {
		vehiclePrice: price,
		vehicleBrand: getBrand,
		vehicleColor: getColor		 
	}
}());