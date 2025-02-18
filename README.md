# Directus Extension Googleapis Flows

## Prerequisites

- **General**
  - google calendar api enabled
    - calendar read
    - calendar event read write
  - google gmail api enabled
    - gmail send
- **For OAuth2 Setup (Recommended)**
  - google cloud project with oauth2 client enabled
    - initial refresh token from oauth2 consent
      - with the following access
        - send email
        - read and write calendar

## Setup

**1. Clone Repository to extension directory**

 `git clone https://github.com/Ren-Logronio/directus-extension-googleapis-flows.git `

`npm i`

`npm run build`

**[2. Set up google Oauth2](https://support.google.com/cloud/answer/6158849?hl=en)**

1. Go to the [Google Cloud Platform Console](https://console.cloud.google.com/)
2. From the projects list, select a project or create a new one.
3. If the APIs & services page isn't already open, open the console left side menu and select  **APIs & services** .
4. On the left, click  **Credentials.**
5. Click  **New Credentials** , then select  **OAuth client ID** .
6. Select the appropriate application type for your project and enter any additional information required. Application types are described in more detail in the following sections.
7. If this is your first time creating a client ID, you can also configure your consent screen by clicking  **Consent Screen** . (The [following procedure](https://support.google.com/cloud/answer/6158849?hl=en#userconsent) explains how to set up the Consent screen.) You won't be prompted to configure the consent screen after you do it the first time.
8. Click **Create client ID**

**[3. Configure Oauth2 consent](https://developers.google.com/workspace/guides/configure-oauth-consent)**

1. In the Google Cloud console, go to **menu** > **Google Auth platform** >  **[Branding](https://console.cloud.google.com/auth/branding)**
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.cloud.google.com/auth/branding), [Audience](https://console.cloud.google.com/auth/audience), and [Data Access](https://console.cloud.google.com/auth/scopes). If you see a message that says  **Google Auth platform not configured yet** , click  **Get Started;**
3. If you're creating an app for use outside of your Google Workspace organization, click **Data Access** **>**  **Add or Remove Scopes.
   * Add The ff. scopes
     1. Send emails
     2. Read and write calendar
     3. Read and write calendar events

**[4. Generating OAuth2 Refresh token](https://developers.google.com/identity/protocols/oauth2#1.-obtain-oauth-2.0-credentials-from-the-dynamic_data.setvar.console_name.)**

> You can run `npm run auth` to get your refresh token from ***token.json***, given that you had provided ***credentials.json*** to the ***scripts*** directory.
>
> your credentials.json is found on **API's & Services > Credentials > OAuth2 2.0 Client Ids > Table Actions > Download > Download JSON**
>
> rename as ***credentials.json*** and place under the ***scripts*** directory

**5. Add Environment Variables to your directus project**

```
EXTENSIONS_GOOGLE_AUTH_MODE=oauth
EXTENSIONS_GOOGLE_OAUTH_PROJECT_ID=
EXTENSIONS_GOOGLE_OAUTH_CLIENT_ID=
EXTENSIONS_GOOGLE_OAUTH_CLIENT_SECRET=
EXTENSIONS_GOOGLE_OAUTH_REFRESH_TOKEN=
EXTENSIONS_GOOGLE_OAUTH_TOKEN_PATH=
```

Once directus is up and running, go to **Settings > Extensions**, and check if extension ***directus-extension-googleapis-flows*** is found.

## Sample *Create GCalendar Event* Operation Options

```json
{
  "attendees": "**@gmail.com, **@gmail.com,**@gmail.com",
  "summary": "test title",
  "description": "<p>No Description</p>",
  "location": "Gensan",
  "startTimestamp": "2025-02-17T13:24:00+08:00",
  "endTimestamp": "2025-02-17T17:00:00+08:00",
  "timezone": "Asia/Manila",
  "start": "2025-02-17T13:24:00+08:00",
  "end": "2025-02-17T17:00:00+08:00"
}
```

## Sample *Create GCalendar Event* Operation Payload

```json
{
  "kind": "calendar#event",
  "etag": "\"**\"",
  "id": "***",
  "status": "confirmed",
  "htmlLink": "https://www.google.com/calendar/event?eid=***",
  "created": "2025-02-17T05:24:55.000Z",
  "updated": "2025-02-17T05:24:55.272Z",
  "summary": "test title",
  "description": "<p>No Description</p>",
  "location": "**",
  "creator": {
    "email": "**@gmail.com",
    "self": true
  },
  "organizer": {
    "email": "**@gmail.com",
    "self": true
  },
  "start": {
    "dateTime": "2025-02-17T13:24:00+08:00",
    "timeZone": "Asia/Manila"
  },
  "end": {
    "dateTime": "2025-02-17T17:00:00+08:00",
    "timeZone": "Asia/Manila"
  },
  "iCalUID": "**@google.com",
  "sequence": 0,
  "attendees": [
    {
      "email": "**@gmail.com",
      "responseStatus": "needsAction"
    },
{
      "email": "**@gmail.com",
      "responseStatus": "needsAction"
    },
    {
      "email": "**@gmail.com",
      "responseStatus": "needsAction"
    }
  ],
  "reminders": {
    "useDefault": true
  },
  "eventType": "default"
}
```
