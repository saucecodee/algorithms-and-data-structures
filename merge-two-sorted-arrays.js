function mergeArr(array1, array2) {
     const len1 = array1.length, len2 = array2.length
     const merged = new Array(len1 + len2)
     let ind1 = 0, ind2 = 0;

     for (let i = 0; i < merged.length; i++) {
          if (ind1 >= len1 || array1[ind1] > array2[ind2])
               merged[i] = array2[ind2++]
          else
               merged[i] = array1[ind1++]
     }

     return merged
}

let b = [1, 2, 3, 4, 7, 1000]
let c = [0, 1, 2, 5, 8, 9, 939]

console.log(mergeArr(b, c))

