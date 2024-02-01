export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	const NumsArr = [];
	nums.forEach(num => { num < 1 ? NumsArr.push(num) : NumsArr});

	return NumsArr;
};

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	
	const findNames = [];
	names.forEach(name => { name.startsWith(char) ? findNames.push(name) : findNames});

	return findNames;
};

export function findVerbs(words) {
	if (!words) throw new Error('words is required');

	const foundVerbs = [];
	words.forEach(word => { word.startsWith('to ') ? foundVerbs.push(word) : foundVerbs});

	return foundVerbs;
};

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');

	const integers = [];
	nums.forEach(num => { num % 1 === 0 ? integers.push(num) : integers});

	return integers;
};

export function getCities(users) {
	if (!users) throw new Error('users is required');
	
	const cityArray = [];
	users.forEach(user => { cityArray.push(user.data.city.displayName) });

	return cityArray;
};

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	
	const squareRoots = [];
	// Although this could be done as follows on one line, 
	// for readability reasons, I have used a longer version. 
	// nums.forEach(num => { squareRoots.push(Math.round(Math.sqrt(num) * 100) / 100) })

	nums.forEach(function (num) { 
		let square = Math.sqrt(num);
		square = Math.round(square * 100) / 100;
		squareRoots.push(square);
	});

	return squareRoots;
};

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	
	const resultSentences = [];
	// Case insensitive search for the str in the current sentence
	sentences.forEach(sentence => { sentence.toLowerCase().indexOf(str) !== -1 ? resultSentences.push(sentence) : resultSentences})
	
	return resultSentences;
};

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	
	const longestSides = [];

	triangles.forEach(triangle => { 
		// Reduce each array of sides to the largest (longest) and store the result
		longestSides.push(
			triangle.reduce((x, y) => (x > y ) ? x : y)) });

	return longestSides;
};