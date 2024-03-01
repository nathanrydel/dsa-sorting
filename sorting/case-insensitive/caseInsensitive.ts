/** Sort array of strings in-place, case-insensitively. Returns array. */

function caseInsensitiveSort(arr: string[]): string[] {
  arr.sort(function(a:string, b:string): number{
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    if(lowerA < lowerB){
      return -1;
    }
    if(lowerA > lowerB){
      return 1;
    }
    return 0;
  })
  return arr;
}

export { caseInsensitiveSort };