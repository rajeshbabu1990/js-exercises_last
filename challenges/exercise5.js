/* 
⚠️
⚠️ See exercise5.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
	if (arr === undefined) throw new Error('arr is required');

	const multiples = arr.map(x => ((x % 3 === 0) || (x % 5 === 0)) ? x : 0);
	const sum = multiples.reduce((x, y) => x + y);
	return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. 
 * A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
	if (str === undefined) throw new Error('str is required');
	if(str.length === 0) throw new Error('str is required');

	const DNAChars = "cgta"
	for(const letter of str) {
		if(DNAChars.indexOf(letter.toLowerCase()) === -1) {
			return false;
		}
	};
	return true;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, 
 * T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
	if (str === undefined) throw new Error('str is required');
	if (!isValidDNA(str)) throw new Error('str must be a valid DNA string');

	str = str.toUpperCase();
	let complimentaryStr = "";
	for(const letter of str) {
		switch(letter) {
			case 'T': 
				complimentaryStr += "A";
				break;
			case "C": 
				complimentaryStr += "G";
				break;
			case 'G': 
				complimentaryStr += "C";
				break;
			case "A":
				complimentaryStr += "T";
				break;
		}
	}

	return complimentaryStr;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. 
 * A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
	if (n === undefined) throw new Error('n is required');

	if(n === 1) {
		return false;
	};

	for(let i = 2; i < 10; i++) { 
		if(i === n) {
			continue;
		}
		if(n % i === 0) {
			return false;
		}
	};

	return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. 
 * The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
	if (n === undefined) throw new Error('n is required');
	if (fill === undefined) throw new Error('fill is required');

	let matrix = new Array(n);
	for(let i = 0; i < n; i++) {
		matrix[i] = new Array(n);
		matrix[i].fill(fill);
	};

	return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. 
 * The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
	if (staff === undefined) throw new Error('staff is required');
	if (day === undefined) throw new Error('day is required');

	let numberOfStaff = 0;
	staff.forEach(colleague => (colleague.rota.findIndex(rotaDay => rotaDay === day) !== -1) ? numberOfStaff += 1 : numberOfStaff);

	return numberOfStaff >= 3;
};