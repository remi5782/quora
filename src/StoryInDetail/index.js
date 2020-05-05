import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import { getStoryItem } from './action';
import TreeViewComp from '../utils/TreeView';
export default function StoryInDetail(props) {
    console.log('itemEach', props.match.params['id']);
    const itemId = props.match.params['id'];
    const dispatch = useDispatch();
    const { isLoading, itemData } = useSelector(state => ({
        isLoading: state.storyItemData.isLoading,
        itemData: state.storyItemData.itemData
    }), shallowEqual)
    const { title, author, url, text, points } = itemData;
    useEffect(() => {
        dispatch(getStoryItem(itemId))
    }, [itemId])
    return (
        <div>
            {isLoading && 'Loading...'}
            {!isLoading && (<Paper variant='outlined' square style={{ display: 'flex', flexDirection: 'column' }} >
                <h4 style={{ textAlign: 'start' }}>{title}<Link to={url}>{`(${url})`}</Link></h4>
                <p style={{ textAlign: 'start' }}>{`${points} points by ${author} `}</p>
                <TextareaAutosize
                    style={{
                        height: '144px',
                        width: '356px',
                        /* align-content: flex-start; */
                        padding: '1rem',
                        margin: '1rem'
                    }}
                    rowsMax={4}
                    rowsMin={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue={text}
                />
                <Button style={{width: '150px', margin:'1rem'}}variant="contained" color="secondary">
  Add Comment
</Button>
            </Paper>)}

            {!isLoading && <><h5 style={{ textAlign: 'start' }}>Other Comments</h5><TreeViewComp data={itemData} /></>}
        </div>
    )
}