prerequisites

- google workspace
  - workspace admin with the following permissions
    - assignage of domain-wide delegation
- google calendar api enabled
  - calendar read
  - calendar event read write
- google gmail api enabled
  - gmail send
- google service account with access to following:
  - google calendar api
    - with the ff. scope
      - calendar read
      - calendar event read write
  - google's domain-wide delegation

setup

- environments
  - EXTENSIONS_GOOGLE_AUTH_MODE (required)
    - values
      - oauth,
      - service
    - default: service
  - EXTENSIONS_GOOGLE_OAUTH_PROJECT_ID (required if auth mode is 'oauth')
  - EXTENSIONS_GOOGLE_OAUTH_CLIENT_ID (required if auth mode is 'oauth')
  - EXTENSIONS_GOOGLE_OAUTH_CLIENT_SECRET (required if auth mode is 'oauth')
  - EXTENSIONS_GOOGLE_OAUTH_REFRESH_TOKEN (required if auth mode is 'oauth')
  - EXTENSIONS_GOOGLE_OAUTH_TOKEN_PATH (required if auth mode is 'oauth')
    - file path for storing credentials
    - must be provided in its absolute path (e.g starting with '/')
    - default: /directus/oauth-token.json
  - EXTENSIONS_GOOGLE_SA_KEYFILE_PATH (required if auth mode is 'service')
    - file path of the google service account credentials
    - must be provided in its absolute path (e.g starting with '/')
  - EXTENSIONS_GOOGLE_SA_CLIENT (optional)
    - requires google workspace's domain-wide delegation of authority
    - the gmail address that serves as the impersonated account
