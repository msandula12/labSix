function convertTemp(temp, tempType) {
	var newTemp;
	if (tempType === "C") {
		newTemp = (temp - 32) * 5/9;
		console.log("The converted temperature is " + newTemp + " degrees Celsius.");
	} else if (tempType === "F") {
		newTemp = temp * 9/5 + 32;
		console.log("The converted temperature is " + newTemp + " degrees Fahrenheit.");
	}
}

convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(-40, "F");