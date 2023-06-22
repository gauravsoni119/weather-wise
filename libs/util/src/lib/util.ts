export function getFullWindDirection(dir: string) {
  const DIRECTIONS = {
    N: 'North',
    E: 'East',
    W: 'West',
    S: 'South',
  } as const;
  return [...dir]
    .map((char) => DIRECTIONS[char as keyof typeof DIRECTIONS])
    .join(' ');
}

export function getMaxElement<TItem = unknown>(elements: TItem[]) {
  const countMap: Record<string, number> = {};
  let maxElementCount = 1;
  let maxElement: TItem | null = null;
  for (const element of elements) {
    const elementToString = JSON.stringify(element);
    countMap[elementToString] = (countMap[elementToString] ?? 0) + 1;
    if (countMap[elementToString] > maxElementCount) {
      maxElementCount = countMap[elementToString];
      maxElement = element;
    }
  }
  return maxElement;
}
