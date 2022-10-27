import React from "react";
import * as ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
});

// Supported in React 18+
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

reportWebVitals();
