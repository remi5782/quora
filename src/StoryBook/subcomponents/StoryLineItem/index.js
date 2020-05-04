import React from 'react';
export default function StoryLineItem({storyItem}){
    const {title, url, author, points, } = storyItem;
    return (
            <div>
                {title} {url} {author} {points}
            </div>
    )
}