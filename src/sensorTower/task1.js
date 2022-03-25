// https://coderanch.com/t/705347/java/optimize-code
//An obvious improvement would be to let j go from i+1 to N-1.
// Also, although not really an optimization, consider distances, starting at N - 1. Now, for that distance there is only one candidate pair: A[0] and A[N-1]. If these are unequal then try distance N-2, with two possible candiate pairs, et cera. The advantage is that you can stop at the first match.
// And another way: create a Map<Integer, TreeSet<Integer>>, with the keys being the discrete values of A, and the value being the Set of indices of that value in A. Now, having that map, how would you find the maximum?

export function solution(A) {
  const N = A.length;
  let result = 0;
  let i, j;

  const map = A.reduce((map, val) => {
    map[val] = A.filter((elem)=> {
      return elem === val;
    });
    return map;
  }, {});

  console.log(map);



  for (i = 0; i < N; i++) {
    for (j = i+1; j < N; j++)
      if (A[i] === A[j]) {
        // console.log(`i ${i} j ${j} ${result}`)
        result = Math.max(result, Math.abs(i - j));
      }
  }

  return result;
}
