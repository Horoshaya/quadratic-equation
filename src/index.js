module.exports = function solveEquation(equation) {
	equation = equation.split('^2 ');
	equation = equation.join('');
	equation = equation.split(' * x');

	for (var i = 0; equation.length - 1 >= i; i++) {
		var elem = equation[i].split(' ');
		elem = elem.join('');
		equation[i] = elem;
	}

	equation = equation.map(Number);

	var x = [];
		D = equation[1] * equation[1] - 4 * equation[0] * equation[2];

	x[0] = Math.round((- equation[1] + Math.sqrt(D)) / (2 * equation[0]));
	x[1] = Math.round((- equation[1] - Math.sqrt(D)) / (2 * equation[0]));

	x.sort(function(a,b) {
		return a - b;
	});

	return x;
}
