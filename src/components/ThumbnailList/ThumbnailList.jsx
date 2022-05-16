import React from "react";
import "./ThumbnailList.css"
import { ThumbnailImage } from "../ThumbnailImage/ThumbnailImage.jsx";

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }

    return urls;
}

export const imageUrls = getImageUrls();

function ThumbnailList () {
    const imageUrls = getImageUrls();
    
    return <ul className = "thumbnail-list">
        {
            imageUrls.map(url => (
                <li>
                    <ThumbnailImage imageUrl = {url} />
                </li>
            ))
        }
    </ul>
}

export { ThumbnailList }