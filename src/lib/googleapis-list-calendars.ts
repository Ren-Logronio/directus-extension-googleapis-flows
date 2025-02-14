import { GoogleAuth } from "google-auth-library";
import { JSONClient } from "google-auth-library/build/src/auth/googleauth";
import { calendar as googleCalendar } from "@googleapis/calendar";

// export const listCalendars = async (
//   calendarName: string,
//   auth: GoogleAuth<JSONClient>,
// ) => {
//   try {
//     const calendar = googleCalendar({ version: "v3", auth });
//     const response = await calendar.events.list({
//       calendarId: "www.reinhart@gmail.com",
//     });
//     if (response.status >= 400)
//       throw new Error(`googleapis err - ${response.statusText}`);
//     console.log("CALENDAR LIST", JSON.stringify(response.data, null, 4));
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error occured while getting the calendar list - ${error}`);
//   }
// };
