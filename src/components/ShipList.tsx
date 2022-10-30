import React, { useEffect, useState } from "react";
import { ShipInterface } from "../types/ship";
import Ship from "./Ship";
import "./ShipList.scss";
import ViewSwitcher from "./ViewSwitcher";
import { useLazyQuery } from "@apollo/client";
import { GET_SHIP_LIST } from "../GraphQl/ships";
import { Box, CircularProgress } from "@mui/material";

export const ShipList = () => {
    const [view, setView] = useState("grid");
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(0);
    const [ships, setShips] = useState<ShipInterface[]>([]);

    const [fetchMoreList, { loading, error, data }] = useLazyQuery(
        GET_SHIP_LIST,
        {
            fetchPolicy: "network-only",
            variables: {
                offset: page * 10,
                limit: 10,
            },
        }
    );

    useEffect(() => {
        setIsFetching(false);

        if (data?.ships.length > 0) {
            setShips((prevState) => [...prevState, ...data.ships]);
        }
    }, [data]);

    useEffect(() => {
        fetchMoreList();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        setPage(page + 1);
        fetchMoreList();
    }, [isFetching]);

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
            isFetching
        )
            return;
        setIsFetching(true);
    }
    return (
        <div className="container">
            <ViewSwitcher view={view} setView={setView} />
            {loading || isFetching ? (
                <Box sx={{ display: "flex" }} className="loader-container">
                    <CircularProgress className="loader" />
                </Box>
            ) : null}
            <div className={` wrapper ${view}`} id="wrapper">
                {ships.map((sp: ShipInterface, i) => (
                    <Ship ship={sp} key={i} />
                ))}
            </div>
            {error ? <div>Error loading data!</div> : null}
        </div>
    );
};

export default ShipList;
