
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {Link} from 'react-router-dom';
import { white } from 'material-ui/styles/colors';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      minHeight: 280
    },
    media: {
      height: 0,
      minHeight: 50,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cardContent:{
        minHeight: 85,
        fontSize: '0.75rem'
    },
    cardHeader:{
        background:'#3f51b5'
    }
  }));
export default function CardComp({ title,objectID, created_at, url, num_comments, points, author }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Link style={{ textDecoration: 'none', color: 'white'}} to={`/storyItem/${objectID}`}><CardActionArea>
                <CardHeader
                    className={classes.cardHeader}
                    title={<span style={{ fontSize: '1rem', color: 'white' }}>{title}</span>}
                    subheader={<span style={{ fontSize: '0.75rem', color: 'white' }}>Created on {created_at}</span>}
                />
            </CardActionArea></Link>


            <CardContent className={classes.cardContent}>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Link to={url}>{url}</Link>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon /> {points}
                </IconButton>
                <span> by {author}</span>
                <IconButton aria-label="comments">
                    <ChatBubbleOutlineIcon /> {num_comments}
                </IconButton>
            </CardActions>
        </Card>
    )
}
