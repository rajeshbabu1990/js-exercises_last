export function getFillings(sandwich) 

{
	if (sandwich === undefined) throw new Error('ingredients is required');
	return sandwich.fillings;
 }

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	return person.city === 'Manchester';
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!

	return Math.ceil(people / 40);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!

	return arr.filter(animal => animal === 'sheep').length;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	if (person.address && person.address.postCode)
	 {
		return person.address.postCode.startsWith('M1');
	}
	return false;
}

