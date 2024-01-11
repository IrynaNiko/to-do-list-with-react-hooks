import * as React from "react";

import RootContainer from "./containers/RootContainer";

/** Context API */
import AuthContextProvider from "./contexts/AuthContext";
import ToDoContextProvider from "./contexts/ToDoContext";
import * as Sentry from "@sentry/react";

Sentry.init({
  environment: "production",
  release: process.env.npm_package_version,
  dsn: "https://8cb1aa872bc15da19dad46584064911b@o4506554459750400.ingest.sentry.io/4506554463289344",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

function App() {
  return (
    <AuthContextProvider>
      <ToDoContextProvider>
        <RootContainer />
      </ToDoContextProvider>
    </AuthContextProvider>
  );
}

export default App;