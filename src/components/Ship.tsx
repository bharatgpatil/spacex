import React from "react";
import "./Ship.scss";
import { ShipInterface } from "../types/ship";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
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
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <Img alt={ship.image} src={ship.image} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid
                                item
                                xs
                                container
                                direction="column"
                                spacing={2}
                            >
                                <Grid item xs>
                                    <Typography
                                        gutterBottom
                                        variant="subtitle1"
                                        component="div"
                                    >
                                        {ship.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {ship.home_port}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {ship.id}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        sx={{ cursor: "pointer" }}
                                        variant="body2"
                                    >
                                        {ship.type}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" component="div">
                                    {ship.year_built}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </>
    );
};

export default ShipsList;
