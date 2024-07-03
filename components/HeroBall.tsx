import React, { useState, useEffect } from 'react';
import styles from "@/styles/HeroBall.module.css";

const HeroBall = () => {
    return (
        <div className={styles.content}>
            <canvas
                className={styles.scene + " " + styles.scene__full}
                id="scene"
            >
            </canvas>
            <div className={styles.content__inner}>
                <h2 className={styles.content__title}>
                🚧Under🚧
                <br />
                Construction
                </h2>
            </div>
        </div>
    );
};

export default HeroBall;