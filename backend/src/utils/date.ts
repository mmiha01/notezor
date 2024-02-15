export function getUnixTimestampInSeconds(): number {
  return Math.floor(Number(new Date()) / 1000);
}
