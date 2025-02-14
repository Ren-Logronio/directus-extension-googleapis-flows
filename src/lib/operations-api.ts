import { CreateGCalendarHandler } from "../schema/create-gcalendar-handler";
import {
  GOOGLE_CALENDAR_EVENTS,
  GOOGLE_CALENDAR_READONLY,
  GOOGLE_GMAIL_INSERT,
  GOOGLE_GMAIL_SEND,
} from "../constants/google-api-scopes";
import { authenticateGoogle } from "./googleapis-auth";
import { createGCalendarEvent } from "./googleapis-create-calendar-event";

export const CreateGoogleCalendarEventHandler: CreateGCalendarHandler = async (
  data,
  { env },
) => {
  try {
    const auth = authenticateGoogle(env, [
      GOOGLE_CALENDAR_READONLY,
      GOOGLE_CALENDAR_EVENTS,
      GOOGLE_GMAIL_SEND,
      GOOGLE_GMAIL_INSERT,
    ]);
    const result = createGCalendarEvent(data, await auth);
    return await result;
  } catch (error) {
    throw error;
  }
};
