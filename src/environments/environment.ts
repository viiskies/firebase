// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: "AIzaSyCu399gmxBjgYbt-ohiaM9P33pCfMQOq3I",
		authDomain: "mytodoapp-12e3c.firebaseapp.com",
		databaseURL: "https://mytodoapp-12e3c.firebaseio.com",
		projectId: "mytodoapp-12e3c",
		storageBucket: "mytodoapp-12e3c.appspot.com",
		messagingSenderId: "439783987973"
	}
};
