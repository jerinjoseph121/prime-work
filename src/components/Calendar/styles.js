function isNotMonth(day, value) {
  return !day.isSame(value, "month");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

export default function dayStyles(day, value) {
  if (isToday(day)) return "today";
  if (isNotMonth(day, value)) return "not-same-month";
  return "";
}
