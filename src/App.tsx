import React, { useEffect, useState } from "react";
import "./App.scss";
import ShipList from "./components/ShipList";
import Container from "@mui/material/Container";

function App() {
    return (
        <div className="App">
            <Container maxWidth="lg">
                <ShipList />
            </Container>
        </div>
    );
}

export default App;
