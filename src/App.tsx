import React from "react";
import { useQuery, gql } from "@apollo/client";

import "./App.sass";

export const LaunchDetailsDocument = gql`
    query launchDetails {
        launch(id: 1) {
            details
            id
            launch_date_utc
            launch_site {
                site_name_long
                site_name
            }
            links {
                flickr_images
                article_link
                mission_patch
                video_link
            }
            mission_name
            rocket {
                rocket_name
            }
        }
    }
`;

function App() {
    const { loading, error, data } = useQuery(LaunchDetailsDocument);
    console.log(data);

    return (
        <div className="App">
            <div className="sass">hi</div>
        </div>
    );
}

export default App;
