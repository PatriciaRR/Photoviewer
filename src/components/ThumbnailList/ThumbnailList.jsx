import React from "react";

function ThumbnailListViewer (props) {
    return <div>
        <img 
            src = {props.imageUrl}
            alt = "thumbnail"
            className = "thumbnail-photo"
        />    
    </div>
}

export {ThumbnailListViewer};