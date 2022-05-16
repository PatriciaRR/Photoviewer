import React from "react";
import "./ThumbnailImage.css";

function ThumbnailImage(props) {
    return <img
            src={props.imageUrl}
            alt= "Thumbnail"
            className= "thumbnail"
        />
};

export { ThumbnailImage };