import React from "react";

import "./ViewSwitcher.scss";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface ViewSwitcherProps {
    setView: (view: string) => void;
    view: string;
}
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
    view,
    setView,
}) => {
    const handleChange = (event: any, nextView: string) => {
        setView(nextView);
        console.log(nextView);
    };

    return (
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
    );
};

export default ViewSwitcher;
