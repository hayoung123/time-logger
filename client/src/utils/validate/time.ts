export const hourValidate = (hour: string) => {
  if (+hour > 24) return '23';
  if (+hour < 0) return '';
  return hour;
};

export const minuteValidate = (minute: string) => {
  if (+minute >= 60) return '59';
  if (+minute < 0) return '';
  return minute;
};
