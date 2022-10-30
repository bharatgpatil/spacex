import React, { useEffect, useState } from "react";

import { ShipInterface } from "../types/ship";
import Ship from "./Ship";
import "./ShipList.scss";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface ShipsListProps {
    ships: ShipInterface[];
}
export const ShipList: React.FC<ShipsListProps> = ({ ships }) => {
    const [view, setView] = React.useState("grid");

    const handleChange = (event: any, nextView: string) => {
        setView(nextView);
        console.log(nextView);
    };

    return (
        <div className="">
            <div className="container">
                <ToggleButtonGroup
                    value={view}
                    exclusive
                    onChange={handleChange}
                    className="buttons"
                >
                    <ToggleButton value="list" aria-label="list">
                        <ViewListIcon />
                    </ToggleButton>
                    <ToggleButton value="grid" aria-label="grid">
                        <ViewModuleIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
                <div className={` wrapper ${view}`} id="wrapper">
                    {ships.map((sp: ShipInterface) => (
                        <Ship ship={sp} key={sp.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShipList;
