export function shuffleArray(arr: any[]): any[] {
  return arr.reduce(
    (newArr, _, i) => {
      const rand = i + ( Math.floor( Math.random() * (newArr.length - i) ) );
      [newArr[rand], newArr[i]] = [newArr[i], newArr[rand]]
      return newArr
    }, [...arr]
  )
}

export function arrRandomMultiple<T>(arr: T[], count: number, picked?: T): T[] {
  if (arr.length <= count) {
    throw "wrong arguments"
  }
  const randomArr: T[] = [];
  if (picked) randomArr.push(picked);
  while (randomArr.length < count) {
    const newPick = arr[Math.floor(Math.random() * arr.length)];
    if (!randomArr.find(item => JSON.stringify(item) === JSON.stringify(newPick))) {
      randomArr.push(newPick);
    }
  }
  return randomArr;
}
