import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../../utils/Card';

export default function RecipeReviewCard({ data }) {
    const { title, url, author, points, objectID, created_at, num_comments } = data;
    return (
        <Grid item xs={8} md={6} lg={3}>
            <Card title={title} url={url} author={author} points={points} objectID={objectID} created_at={created_at} num_comments={num_comments} />

        </Grid>

    );
}