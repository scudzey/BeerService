import React, {Fragment} from 'react';
import { CssBaseline, LinearProgress, Box } from "@material-ui/core";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
      },
    cardHeader: {
      color:"#f1f2f4",
      backgroundColor: "#646e82"
    },
    imageContainer:{
        backgroundColor:"#e8e7e3",
        padding:0, 
        height: 180, 
        minWidth:'10%',
    },
    cardContent: {
        backgroundColor: "#e8e7e3",
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%',
        justifyContent: 'left'
    },
    cardBeerDescription: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    
  }));

const getPints = item => {
    let pintsRemaining = ((item.currentCapacity/6) /473.176).toFixed(2)
    return pintsRemaining
}

const getPercentage = item => {
    let percentage = ((item.currentCapacity / item.maxCapacity) * 100).toFixed(2)
    return percentage
}

const renderTitle = tap => {
    return (
        `Tap: ${tap.tapIndex + 1} \n
        `
    )
}

const renderSubHeader = tap => {
    return `ABV: ${tap.currentBeer.abv}% -- IBU:${tap.currentBeer.ibu}`
}

const renderPints = tap => {
    return `Pints: ${getPints(tap)}`
}

const renderPercentage = tap => {
    return `${getPercentage(tap)}%`
}

const styles = {
    backGroundBox: {
        position: 'absolute',
        backgroundColor: 'black' ,
        color: 'white',
        opacity: .5,
        top: 8, 
        left: '15%', 
        transform: 'translateX(-50%)'
     },
    overlay: {
        position: 'absolute',
        color: 'white',
        top: 8, 
        left: 0, 
        
     },
}

export default function TapElement({taps}) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <div style={{ padding: 20 }}>
            <Grid container spacing={5} alignItems="flex-end">
            { taps.map(tap => (
                <Grid item key={tap.name} xs={12} md={4}>
                <Card style={{position:'relative'}} >
                    <CardContent className={classes.imageContainer}>
                        <CardMedia className={classes.cardMedia} image={tap.currentBeer.imageURL} />
                        <div style={styles.overlay}>
                        <Box display="column" alignItems="center" style={{backgroundColor:"black", opacity:.75, padding:10}}>
                            <Box style={{backgroundColor:"transparent", opacity:1}}>
                                <Typography variant="h4" align="left" style={{opacity:1}}>
                                    {tap.currentBeer.title}
                                </Typography>
                            </Box> 
                            <Box style={{backgroundColor:"transparent", opacity:1, padding:0}}>
                                <Typography  variant="h6" align="left">
                                    {renderSubHeader(tap)}
                                </Typography>
                            </Box>
                            
                        </Box>
                        
                            
                        </div>
                    </CardContent>
                    <CardContent width="100%" className={classes.cardContent}>
                        <Box width="100%" display="flex" alignItems="center">
                            <Box width="100%" mr={1}>
                            <LinearProgress variant="determinate" value={getPercentage(tap)} />
                            </Box>
                            <Box minWidth={35}>
                                <Typography  variant="body2" color="textPrimary">
                                    {renderPercentage(tap)}
                                </Typography>
                            </Box>
                        </Box>  
                    </CardContent>
                    <CardContent width="100%" className={classes.cardContent}>
                        <div  className={classes.cardBeerDescription}>                          
                            <ul style={{display: 'inline-block'}}>
                                <Typography width="100%" component="li" variant="h6" color="textSecondary" align="left">
                                    {tap.currentBeer.description}
                                </Typography >
                            </ul>
                        </div>  
                    </CardContent>
                    
                </Card>
                </Grid>
            ))}
            </Grid>
            </div>
        </React.Fragment>
    )
}