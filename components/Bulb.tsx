import React, { useState, useEffect } from 'react';
import styles from "@/styles/bulb.module.css";
import { useTheme } from "next-themes";


const Bulb = () => {
    const { theme } = useTheme()

    const [light, setLight] = useState(false);

    useEffect(() => {
        setLight(theme === 'dark');
    }, [theme]);

    return (
        <div className={`${styles.container} ${light ? styles.on : ""}`}>
            <div className={styles.light}
                onClick={() => setLight(!light)}
            >
                <div className=" rounded-md  bg-neutral-200">
                    <div className={styles.wire}></div>
                </div>
                <div className={styles.bulb}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Bulb;