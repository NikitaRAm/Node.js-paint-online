import React from "react";
import Canvas from './Canvas'
import Toolbar from './Toolbar'
import SettingBar from './SettingBar'

const General = () => {
    return (
        <div>
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
        </div>
    );
};

export default General;