import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },

  },
}));

export default function PaginationControlled({ currentPage,gotoPage, nbPages }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(currentPage);
  const handleChange = (event, value) => {
    setPage(value);
    gotoPage(value);
  };
console.log('currentPage',currentPage);
  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination color="secondary" variant='outlined' page={currentPage} count={nbPages? (nbPages-1): 1} page={page} onChange={handleChange} />
    </div>
  );
}