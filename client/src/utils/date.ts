export const minToTime = (min: number): string => {
  const hour = ~~(min / 60);
  return `${addZero(hour)}h ${addZero(min % 60)}m`;
};

export const minToClockTime = (min: number | null): string => {
  if (!min) return '';
  const hour = ~~(min / 60);
  return `${addZero(hour)}시 ${addZero(min % 60)}분`;
};

export const DateToMin = (date: Date): number => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return hour * 60 + minutes;
};

const addZero = (num: number): string => {
  return num < 10 ? '0' + num : num + '';
};
