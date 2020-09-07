const arraySum = (arr, num) => {
	const sumArray = [];
	const array = arr.sort();
	for (let i = 0; i < array.length; i++) {
		const remNum = num - array[i];
		let start = i + 1;
		let end = array.length - 1;
		while (start < end) {
			const sum = array[start] + array[end];
			if (sum === remNum) {
				sumArray.push([array[i], array[start], array[end]]);
				break;
			} else if (sum < remNum) {
				start++;
			} else {
				end--;
			}
		}
	}
	return sumArray;
};
