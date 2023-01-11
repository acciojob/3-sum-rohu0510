function threeSum(arr, target) {
  //your code here
	arr.sort((a, b) => a-b);

	let csum= Infinity;
	for(let i=0; i<arr.length-2; i++){
		let l=i+1, r=arr.length-1;
		while (l <r) {
			let currsum = arr[i]+arr[l]+arr[r];
			if(Math.abs(currsum - target) < Math.abs(csum-target)){
				csum = currsum;
			}
			if(currsum < target){
				l++;
			}
			else{
				r++;
			}
		}
	}
	return csum;
}

module.exports = threeSum;
