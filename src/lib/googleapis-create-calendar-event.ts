import { GoogleAuth, OAuth2Client } from "google-auth-library";
import { GCalendarEventSchema } from "../schema/gcalendar-event-schema";
import { JSONClient } from "google-auth-library/build/src/auth/googleauth";
import { calendar as googleCalendar } from "@googleapis/calendar";
import delimitedEmailsToArray from "../helpers/delimited-emails-to-array";

export const createGCalendarEvent = async (
  {
    calendar: calendarName,
    summary,
    attendees,
    description,
    end,
    location,
    start,
    timezone: timeZone,
  }: GCalendarEventSchema,
  auth: GoogleAuth<JSONClient> | OAuth2Client,
) => {
  try {
    if (!summary) throw new Error("Summary is required");
    if (!start) throw new Error("Event starting date is required");
    if (!end) throw new Error("Event end date is required");
    if (!timeZone) throw new Error("Timezone is required");
    const calendarId = calendarName || "primary";
    const calendar = googleCalendar({ version: "v3", auth });
    const event = {
      summary: summary,
      location: location || "Unknown Location",
      description: description || "No description",
      start: {
        dateTime: start,
        timeZone,
      },
      end: {
        dateTime: end,
        timeZone,
      },
      attendees: delimitedEmailsToArray(attendees),
    };
    const response = await calendar.events.insert({
      calendarId,
      requestBody: event,
    });
    if (response.status >= 400)
      throw new Error(`googleapis err - ${response.statusText}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error creating new gcalendar event - ${error}`);
  }
};
