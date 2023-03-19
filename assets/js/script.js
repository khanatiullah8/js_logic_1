																				// logic no. 1 //

// var n = 7;
// for (var i = 1; i <= n; i += 2) {
// 	for (var k = i; k < n; k++) {
// 		document.write('&nbsp;');
// 	}
// 	for (var j = 1; j <= i; j++) {
// 		if (j % 2 === 0) {
// 			document.write('A');
// 			continue;
// 		}
// 		document.write('*');
// 	}
// 	document.write('<br>');
// }

																				// logic no. 2 //

// var n = 9;
// for (var i = 1; i <= n; i++) {
// 	for (var j = 1; j <= n; j++) {
// 		if (i == 1 && j == 5 ||
// 			i == 3 && j == 4 ||
// 			i == 3 && j == 6 ||
// 			i == 5 && j == 3 ||
// 			i == 5 && j == 7 ||
// 			i == 7 && j == 2 ||
// 			i == 7 && j == 8 ||
// 			i == n) {
// 			document.write('*');
// 			continue;
// 		}
// 		document.write('&nbsp;&nbsp;')
// 	}
// 	document.write('<br>');
// }

																				// logic no. 3 //

												//1st method
// var n = 3;
// var a = 1;
// for (var i = 1; i <= n; i++) {
// 	for (var j = 1; j <= i; j++) {
// 		document.write(j ** a + " ");
// 	}
// 	document.write('<br>');
// 	a++;
// }

												//2nd method
// var n = 3;
// for (var i = 1; i <= n; i++) {
// 	for (var j = 1; j <= i; j++) {
// 		document.write(Math.pow(j, i) + " ");
// 	}
// 	document.write('<br>');
// }

																				// logic no. 4 //

// var n = 9;
// for (var i = 1; i <= n; i++) {
// 	for (var j = 1; j <= (n + 1); j++) {
// 		if (i == 2 && j > 4 && j < 7 ||
// 			i == 3 && j > 3 && j < 8 ||
// 			i == 4 && j > 2 && j < n ||
// 			i == 5 && j > 1 && j < (n + 1) ||
// 			i == 6 && j > 2 && j < n ||
// 			i == 7 && j > 3 && j < 8 ||
// 			i == 8 && j > 4 && j < 7) {
// 			document.write('&nbsp;&nbsp;')
// 			continue;
// 		}
// 		document.write('*');
// 	}
// 	document.write('<br>');
// }

																				// logic no. 5 //

// var n = 10;
// for (var i = 1; i <= n; i++) {
// 	for (var j = 1; j <= n; j++) {
// 		if (i == 1 && j != 1 && j != n ||
// 			i == 2 && j > 2 && j < 9 ||
// 			i == 3 && j > 3 && j < 8 ||
// 			i == 4 && j > 4 && j < 7 ||
// 			i == 7 && j > 4 && j < 7 ||
// 			i == 8 && j > 3 && j < 8 ||
// 			i == 9 && j > 2 && j < 9 ||
// 			i == n && j != 1 && j != n) {
// 			document.write('&nbsp;&nbsp;')
// 			continue;
// 		}
// 		document.write('*');
// 	}
// 	document.write('<br>');
// }

																				// logic no. 6 //

// var n = 6;
// for (var i = 1; i <= n; i++) {
// 	for (var j = 1; j <= i; j++) {
// 		document.write('#');
// 	}
// 	document.write('<br>');
// }

																				// logic no. 7 //

// var n = 9;
// var a = 0;
// var b = 0;
// for (var i = 1; i <= n; i += 2) {
// 	for (var k = i; k < n; k++) {
// 		document.write('&nbsp;');
// 	}
// 	for (var j = 1; j <= i; j++) {
// 		if (j > (i - a)) {
// 			document.write(i - b + a);
// 		} else {
// 			document.write(j + a);
// 		}
// 		b++;
// 	}
// 	document.write('<br>');
// 	a++;
// 	b = 0;
// }