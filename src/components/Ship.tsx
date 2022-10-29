import React from "react";
import "./Ship.sass";
import { ShipInterface } from "../types/ship";

interface ShipProps {
    ship: ShipInterface;
}

export const ShipsList: React.FC<ShipProps> = ({ ship }) => {
    return (
        <>
            <div className=""> {ship.name}</div>
            <img src={ship.image} />
        </>
    );
};

export default ShipsList;
