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
