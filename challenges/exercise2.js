export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	// Your code here!
	return nums.map((num) => num*num)
	  };
	  
	


export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Your code here!
	
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!

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
	const firstarray=arr1.length;
	const secondarray=arr2.length;
	let emptyarray=[];
	if(firstarray>secondarray){
		for(let i=0;i<firstarray;i++){
			for(let j=o;j<secondarray;j++){
				if(arr1[i]===arr2[j]){
					emptyarray=emptyarray.concat(arr2[j]);
				}
			}
		}
	}
	
}
