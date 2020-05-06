import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { getStoryBookCollection } from './action';
import StoryLineItem from './subcomponents/StoryLineItem';
import SearchBox from './subcomponents/StorySearchBox';
import PaginationController from '../utils/PaginationController';
import Fab from '@material-ui/core/Fab';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    fabu: {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 5
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function StoryBookCollection(props) {
    const classes = useStyles();
    const { storyCollection, isLoading, error } = useSelector(state => ({
        storyCollection: state.storyCollectionData.storyCollection,
        isLoading: state.storyCollectionData.isLoading,
        error: state.storyCollectionData.error
    }), shallowEqual);
    const {nbPages} = storyCollection;
    const dispatch = useDispatch();
    function getStoryCollection(query, tags, page) {
        dispatch(getStoryBookCollection(query, tags, page));
    }
    function handleSearch(query){
        dispatch(getStoryBookCollection(query, tags, page));
    }
    function gotoPage(pageNum){
        setPage(pageNum);
        //dispatch(getStoryBookCollection(query, tags, pageNum));
    }
    const [query, setQuery] = useState('');
    const [tags, setTags] = useState('story');
    const [page, setPage] = useState(0);

    function scrollTop() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    //initial calls on mount but stops re-render only on change of query, tags, page 
    useEffect(() => {
        getStoryCollection(query, tags, page);
    }, [query, tags, page]);

    return (
        <React.Fragment>
            <h1> Stories</h1>
            <SearchBox handleSearch={handleSearch}/>
            <Grid item lg={12} xs={12} md={12}><PaginationController gotoPage={gotoPage} nbPages={nbPages}/></Grid>
            <Fab onClick={scrollTop} className={classes.fabu} color="primary" aria-label="add">
                <ArrowUpward />
            </Fab>
            {isLoading && <p><span>Loading</span></p>}
    {error && <p style={{color: 'purple', margin: '1rem'}}><i>{error.response.data.responseDescription+ 'So fetching from Offline Storage'}</i></p>}
            {!isLoading && <Grid container direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={2}>

                {storyCollection &&storyCollection.hasOwnProperty('hits')&&  storyCollection.hits.map(data => <StoryLineItem key={data.objectID} data={data} />)}
            </Grid>}
        </React.Fragment>

    )

}

