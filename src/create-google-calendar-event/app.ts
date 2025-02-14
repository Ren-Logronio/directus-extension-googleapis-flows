import { defineOperationApp } from "@directus/extensions-sdk";
import coalesceDateRange from "../helpers/coalesce-date-range";
import getTimezones from "../helpers/get-timezones";

export default defineOperationApp({
  id: "create-google-calendar-event",
  name: "Create GCalendar Event",
  icon: "calendar_add_on",
  description:
    "Utility for Google Calendar API for adding events in the calendar",
  overview: ({ summary, location, startTimestamp, endTimestamp }) => {
    return [
      {
        label: "Summary",
        text: summary || "No Summary",
      },
      {
        label: "Location",
        text: location || "Unknown Location"
      },
      {
        label: "Schedule",
        text: coalesceDateRange(startTimestamp, endTimestamp),
      },
    ];
  },
  options: [
    {
      field: "client",
      name: "Client Email",
      type: "string",
      meta: {
        interface: "input",
        width: "half-left",
        note: "Will overwrite existing env client email",
      },
    },
    {
      field: "calendar",
      name: "Calendar",
      type: "string",
      schema: {
        default_value: "primary",
      },
      meta: {
        interface: "input",
        width: "half-right",
      },
    },
    {
      field: "attendees",
      name: "Attendees",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
        note: "List email separated by comma ','",
      },
    },
    {
      field: "summary",
      name: "Summary",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
        required: true,
      },
    },
    {
      field: "description",
      name: "Description",
      type: "text",
      schema: {
        default_value: "No description",
      },
      meta: {
        width: "full",
        interface: "input-rich-text-html",
      },
    },
    {
      field: "location",
      name: "Location",
      type: "string",
      schema: {
        default_value: "Online",
      },
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "start",
      name: "Start Date",
      type: "dateTime",
      meta: {
        width: "half-left",
        required: true,
      },
    },
    {
      field: "end",
      name: "End Date",
      type: "dateTime",
      meta: {
        width: "half-right",
        required: true,
      },
    },
    {
      field: "timezone",
      name: "Timezone",
      type: "string",
      meta: {
        required: true,
        interface: "select-dropdown",
        options: {
          choices: getTimezones(),
        },
      },
    },
  ],
});
