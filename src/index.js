module.exports = function solveEquation(equation) {
	let equationNumbers = equation.split('^2 ').join('').split(' * x');

	for (let i = 1, equationLength = equationNumbers.length; equationLength > i; i++) {
		equationNumbers[i] = equationNumbers[i].split(' ').join('');;
	}

	let x = [],
		D = equationNumbers[1] * equationNumbers[1] - 4 * equationNumbers[0] * equationNumbers[2];

	x[0] = Math.round((- equationNumbers[1] + Math.sqrt(D)) / (2 * equationNumbers[0]));
	x[1] = Math.round((- equationNumbers[1] - Math.sqrt(D)) / (2 * equationNumbers[0]));

	x.sort((a,b) => {return a - b});

	return x;
}
