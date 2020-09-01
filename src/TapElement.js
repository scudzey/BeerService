import React, {Fragment} from 'react';
import { CssBaseline } from "@material-ui/core";
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
    cardContent: {
        backgroundColor: "#f1f2f4"
    },
    cardMedia: {
        height: 0, 
        paddingTop: '56.25%',
        justifyContent: 'center'
    },
    cardBeerDescription: {
      display: 'flex',
      justifyContent: 'center',
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

const renderSubHeader = tap => {
    return `ABV: ${tap.currentBeer.abv}% -- IBU:${tap.currentBeer.ibu}`
}

const renderPints = tap => {
    return `Pints: ${getPints(tap)}`
}

const renderPercentage = tap => {
    return `${getPercentage(tap)}%`
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
                <Card >
                    <CardHeader
                        title={tap.currentBeer.title}
                        subheader={renderSubHeader(tap)}
                        titleTypographyProps={{align:'center'}}
                        subheaderTypographyProps={{align:'center'}}
                        className={classes.cardHeader}

                    >
                    </CardHeader>
                    <CardContent className={classes.cardContent}>
                     
                      <CardMedia className={classes.cardMedia} image={tap.currentBeer.imageURL} />
                      
                      <div className={classes.cardBeerDescription}>
                          
                          <ul>
                            <Typography component="li" variant="h3" color="textPrimary">
                                {renderPercentage(tap)}
                            </Typography >
                            <Typography component="li" variant="h4" color="textPrimary">
                                {renderPints(tap)}
                            </Typography >
                            <Typography component="li" variant="h6" color="textSecondary">
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