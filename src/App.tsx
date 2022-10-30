import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getShipsList } from "./GraphQl/ships";
import "./App.scss";
import { ShipInterface } from "./types/ship";
import ShipList from "./components/ShipList";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
    const [ships, setShips] = useState<ShipInterface[]>([]);
    const { loading, error, data } = useQuery(getShipsList);

    useEffect(() => {
        if (data?.ships.length > 0) {
            setShips(data.ships);
        }
    }, [data]);

    return (
        <div className="App">
            <Container maxWidth="lg">
                {loading ? (
                    <Box sx={{ display: "flex" }} className="loader-container">
                        <CircularProgress className="loader" />
                    </Box>
                ) : (
                    <ShipList ships={ships} />
                )}
                {error ? <div>Error loading data!</div> : null}
            </Container>
        </div>
    );
}

export default App;
