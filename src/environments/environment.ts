// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  googleSheetsApiKey: "AIzaSyARHGc4JQmYTI6Q6i--wzyaA8DDaZWfAVM",
  characters: {
    spreadsheetId: "14yWXMQpMrEzaOLX6hcqNfU-NhYiBX4LIlEcBdWezG0k",
    worksheetName: "Foglio1"
  }
};
