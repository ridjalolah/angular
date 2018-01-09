// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    firebase : {
        apiKey: "AIzaSyC_zj7_cTj6_fzF3NcLhqp4FxghaKbjIpo",
        authDomain: "tchat-system.firebaseapp.com",
        databaseURL: "https://tchat-system.firebaseio.com",
        projectId: "tchat-system",
        storageBucket: "tchat-system.appspot.com",
        messagingSenderId: "1035021930310"

    }
};
