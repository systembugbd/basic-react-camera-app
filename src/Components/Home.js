import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'

import Camera from './Camera'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
  },
}))


export default function Home() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Typography>Open Your Camera</Typography>
      <Camera />
    </div>
  );
}
