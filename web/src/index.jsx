import React from "react";
import ReactDOM from "react-dom";
import { App, AppConfigProvider } from "@councildataproject/cdp-frontend";

import "@councildataproject/cdp-frontend/dist/index.css";

const config = {
    firebaseConfig: {
        options: {
            projectId: "cdp-cdpdev-ntrbwppe",
        },
        settings: {},
    },
    municipality: {
        name: "cdpDev",
        timeZone: "America/Los_Angeles",
        footerLinksSections: [],
    },
    features: {
        // enableClipping: true,
    },
}

ReactDOM.render(
    <div>
        <AppConfigProvider appConfig={config}>
            <App />
        </AppConfigProvider>
    </div>,
    document.getElementById("root")
);