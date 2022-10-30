import React from "react";
import "../ShipList.scss";
import { ShipInterface } from "../../../types/ship";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
interface ShipProps {
    ship: ShipInterface;
}

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

export const ShipsList: React.FC<ShipProps> = ({ ship }) => {
    return (
        <>
            <div className="col">
                <Paper
                    sx={{
                        p: 2,
                        margin: "auto",
                        maxWidth: 500,
                        flexGrow: 1,
                    }}
                >
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
                </Paper>
            </div>
        </>
    );
};

export default ShipsList;
