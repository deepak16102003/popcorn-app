import React from "react";
import MovieList from "./MovieList";
import styles from "../styles/Box1.module.css";

function Box1() {
    return (
        <div className={styles.box1}>
            <MovieList />
        </div>
    );
}

export default Box1;
