import type { OperationApiConfig } from "@directus/extensions";
import { GCalendarEventSchema } from "../schema/gcalendar-event-schema";

export type CreateGCalendarHandler =
  OperationApiConfig<GCalendarEventSchema>["handler"];
