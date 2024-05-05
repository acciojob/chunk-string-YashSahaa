function stringChop(str, size) {
  // your code here
	let arr = []
	if(str.length==0) return arr
	let i = 0
	let count = 0
	for (let s of str) {
		if(count==size){
			i++
			count=0
		}
		if(arr[i]!=undefined){
			arr[i]+=s
		}
		else arr.push(s)
		count++
	}
	return arr
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
