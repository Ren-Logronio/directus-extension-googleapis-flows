import timezones from "../constants/timezones";

export default function getTimezones() {
  return timezones.map((timezone) => ({
    text: timezone.label,
    value: timezone.tzCode,
  }));
}
