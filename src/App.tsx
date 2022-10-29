import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getShipsList } from "./GraphQl/ships";

import "./App.sass";
import { ShipInterface } from "./types/ship";
import ShipList from "./components/ShipList";
function App() {
    const [ships, setShips] = useState<ShipInterface[]>([]);
    const { loading, error, data } = useQuery(getShipsList);
    console.log(data);
    useEffect(() => {
        if (data?.ships.length > 0) {
            setShips(data.ships);
        }
    }, [data]);

    return (
        <div className="App">
            <ShipList ships={ships} />
        </div>
    );
}

export default App;
