let arr = [2,3,4,5,6]
let val = 4
let head = 0
let tail = arr.length-1

function search(arr, val, head, tail){
 
 let mid = Math.floor((head+tail)/2)

 if(head>tail){
    return
 }

 if(arr[mid]===val){
    return true
 }

 if(arr[mid]<val){
    return search(arr, val,mid+1, tail)
}else{
    return search(arr, val,head,mid)
}
}

const Search = search(arr,val,head,tail)

console.log(Search);