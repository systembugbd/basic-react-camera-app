import React from 'react'
import {Breadcrumbs, Link, Typography} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'


const handleClick = () =>{

}

const useStyles = makeStyles((theme)=>({
     root: {
          paddingTop: theme.spacing(3)
     }
}))
const Breadcrumb = () => {

     const classes = useStyles();
     return (
          <div>
               <Breadcrumbs className={classes.root}  aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick}>
                    Material-UI
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                    </Link>
                    <Typography color="textPrimary">Breadcrumb</Typography>
                    </Breadcrumbs>
          </div>
     )
}

export default Breadcrumb
