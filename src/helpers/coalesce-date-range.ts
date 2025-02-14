import { format } from "date-fns-tz";
import { isSameDay, isSameHour } from "date-fns";

export default function coalesceDateRange(start: string, end: string) {
  if (!start && !end) return "Not Set";
  if (start.trim().startsWith('{') || end.trim().startsWith('{')) return "TBD";
  if (!start && !!end) return `End - ${format(end, "Pp")}`;
  if (!!start && !end) return `Start - ${format(start, "Pp")}`;
  if (isSameDay(start, end)) {
    if (isSameHour(start, end)) {
      return `${format(start, "P - hh:mm aaa")} - ${format(end, "hh:mm aaa")}`;
    }
    return `${format(start, "P - hh aaa")} - ${format(end, "hh aaa")}`;
  }
  return `${format(start, "P")} - ${format(end, "P")}`;
}
