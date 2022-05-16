import React from "react";
import "./PhotoViewer.css";

function PhotoViewer (props) {
    return <div>
        <img 
            src = {props.imageUrl}
            alt = "main"
            className = "main-photo"
        />
    </div>
};

export { PhotoViewer };