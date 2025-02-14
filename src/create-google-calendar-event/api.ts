import { defineOperationApi } from "@directus/extensions-sdk";
import { CreateGoogleCalendarEventHandler } from "../lib/operations-api";

export default defineOperationApi({
  id: "create-google-calendar-event",
  handler: CreateGoogleCalendarEventHandler,
});
