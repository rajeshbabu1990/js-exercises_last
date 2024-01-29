export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	// Your code here!
	return nums.map((num) => num*num)
	  };
	  
	


export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Your code here!
	if (words.length === 0) {
		return '';
	  }
	
	  // Capitalize the first word and concatenate the rest
	  const camelCased = words.reduce((result, word, index) => {
		const isFirstWord = index === 0;
		const capitalizedWord = isFirstWord ? word : word.charAt(0).toUpperCase() + word.slice(1);
		return result + capitalizedWord;
	  }, '');
	
	  return camelCased;
	
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!

	const totalSubjects = people.reduce((total, person) => {
		return total + (person.subjects ? person.subjects.length : 0);
	  }, 0);
	
	  return totalSubjects;
	}



export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
	let ingredientarray=[];
	for(let i=1;i<menu.length;i++){
		ingredientarray=ingredientarray.concat(menu[i].ingredients);
	}
	return ingredientarray.some((element) => element=== ingredient);
	
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
	const duplicateNumbersArray = [];

	for (let i = 0; i < arr1.length; i++) {
	  for (let j = 0; j < arr2.length; j++) {
		if (arr1[i] === arr2[j] && !duplicateNumbersArray.includes(arr1[i])) {
		  duplicateNumbersArray.push(arr1[i]);
		}
	  }
	}
  
	return duplicateNumbersArray.sort();
  }
