import React from "react";
import "./Ship.scss";
import { ShipInterface } from "../../../types/ship";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface ShipProps {
    ship: ShipInterface;
    view: string
}

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

export const ShipsList: React.FC<ShipProps> = ({ ship, view }) => {
    return (
         <Grid item xs={12} md={view === "grid" ? 4: 12} lg={view === "grid" ? 4: 12} className="ship-card" spacing={3} >
            <Grid className="content">
                <Img alt={ship.image} src={ship.image} />
            </Grid>
            <Grid className="content details">
                <Typography
                    className="ship-title"
                    gutterBottom
                    variant="h6"
                    component="div"
                >
                    {ship.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {ship.home_port}
                 </Typography>
                <Typography variant="body2" color="text.secondary">
                    {ship.id}
                </Typography>

                <Typography variant="body2">{ship.type}</Typography>

                <Typography variant="subtitle1" component="div">
                    {ship.year_built}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ShipsList;
