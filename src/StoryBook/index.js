import React, {useState, useEffect} from 'react';
import connect from 'react-redux';
import {getStoryBookCollection} from './action';
function StoryBookCollection(props){
    const {storyBookCollection, getStoryBookCollection} = props;
    const [query, setQuery] = useState('');
    const [tags, setTags] = useState('story');
    const [page, setPage] = useState(0);
    // const [storyBookCollectionData, setStoryBookCollection] = useState()
    useEffect((data)=>{
        getStoryBookCollection(query, tags, page);
    }, [props.storyBookCollection])
return (
    <div>Story Book Collection</div>
)

}
const mapDispatchToProps = (dispatch)=>({
    getStoryBookCollection: (query, tags, page)=> dispatch(getStoryBookCollection(query, tags, page))
});
const mapStateToProps = (state)=>({
    storyBookCollection : state.storyBookCollection
})
