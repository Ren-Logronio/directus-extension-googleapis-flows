export type GCalendarEventSchema = {
  calendar: string;
  attendees: string | null;
  summary: string;
  description: string;
  location: string;
  start: string | null;
  end: string | null;
  timezone: string | null;
};
