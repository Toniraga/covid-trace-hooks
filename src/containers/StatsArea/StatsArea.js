import React from 'react'

import StatsOne from '../StatsOne/StatsOne'
import StatsTwo from '../StatsTwo/StatsTwo';
import classes from './StatsArea.module.css'


const StatsArea = () => {
        return (
            <div className={classes.StatsArea}>
                <div className={classes.line}>
                    <StatsOne />
                </div>
                <div className={classes.chart}>
                    <StatsTwo />
                </div>
            </div>
        )
}


export default StatsArea;
