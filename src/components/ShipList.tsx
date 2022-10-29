import React from "react";

import { ShipInterface } from "../types/ship";
import Ship from "./Ship";

interface ShipsListProps {
    ships: ShipInterface[];
}
export const ShipList: React.FC<ShipsListProps> = ({ ships }) => {
    return (
        <div className="">
            {ships.map((sp: ShipInterface) => (
                <Ship ship={sp} key={sp.id} />
            ))}
            ;
        </div>
    );
};

export default ShipList;
