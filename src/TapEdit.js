import React, { Fragment } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { Box, Button, Popover, TextField, Select, IconButton, MenuItem, makeStyles, Grid, Dialog, DialogContent, DialogActions, withStyles, InputLabel, FormControl } from "@material-ui/core";
import { API, graphqlOperation } from 'aws-amplify';
import { getBeerTap, listBeerDefinitions } from './graphql/queries';
import Autocomplete from '@material-ui/lab/Autocomplete'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close'


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

export default function TapEdit({tap, editCallback}) {

    const useStyles = makeStyles((theme) => ({
        '@global': {
            ul: {
              margin: 0,
              padding: 0,
              listStyle: 'none',
            },
          },
        popOverDisplay:{
            minWidth:300
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 300,
        },
      }));

    const kegSizes = [
        {title:"Empty", currentCapacity:0, maxCapacity:1},
        {title:"1 Gallon", currentCapacity:22712, maxCapacity:22712},
        {title:"2.5 Gallon", currentCapacity:56781, maxCapacity:56781},
        {title:"1/6 Barrel", currentCapacity:117300, maxCapacity:117300},
        {title:"1/4 Barrel", currentCapacity:176040, maxCapacity:176040},
        {title:"1/2 Barrel", currentCapacity:352020, maxCapacity:352020}
    ]

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [beerList, setBeerList] = React.useState(null);

    const [beerSelected, setBeerSelected] = React.useState(null);
    const [sizeSelected, setSizeSelected] = React.useState(0);
    const [indexSelected, setIndexSelected] = React.useState(null);
    
    const handleClick = (event) => {
        API.graphql(graphqlOperation(listBeerDefinitions)).then( result=> {
            setBeerList(result.data.listBeerDefinitions.items)
            setBeerSelected(result.data.listBeerDefinitions.items.find((opt) => {
                if (opt.id === tap.currentBeerID)
                    return opt;
            }))
            
            const foundIndex = (kegSizes.findIndex( (opt, index) => {
                if (opt.maxCapacity === tap.maxCapacity)
                    return index
            }))
            if (foundIndex === -1) {
                setSizeSelected(0);
            }  
            else
                setSizeSelected(foundIndex)
        })

        setAnchorEl(event.currentTarget)
    }
    
    const handlePopoverClose = (event) => {
        setAnchorEl(null);
    };
    const handlePopoverSave = (event) => {
        setAnchorEl(null);
        editCallback(tap, beerSelected.id, kegSizes[sizeSelected])
    };

    const handleBeerSelect = (event, value) => {
        setBeerSelected(value)
    }

    const handleSizeSelect = (event, value) => {
        setSizeSelected(event.target.value)
    }

    const renderSizeOption = () => {
        return (
            kegSizes.map((size, index) => (
                <MenuItem value={index} key={index}>{size.title}</MenuItem>
        )))
    }
    
    const open = Boolean(anchorEl);

    const classes = useStyles();
    return(
        <Fragment>
        
            <IconButton variant="contained" onClick={handleClick}>
                <EditIcon />
            </IconButton>
        
        <Popover
        id={tap.id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        className={classes.popOverDisplay}
        >
            <DialogTitle onClose={handlePopoverClose} >
                Edit Tap {(Number(tap.tapIndex) + 1)}
            </DialogTitle>
            <DialogContent dividers>
            
            <Grid container spacing={3} >
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            options={beerList}
                            getOptionLabel={ (option) => option.title}
                            value={beerSelected} 
                            renderInput={(params) => <TextField {...params} label="Beer selection" />} 
                            onChange={handleBeerSelect}
                            />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>

                        <InputLabel>Keg Size</InputLabel>
                        <Select fullWidth value={sizeSelected} onChange={handleSizeSelect}>
                            {renderSizeOption()}
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <Button type="submit" label="Submit"/>
                    </Grid>
                
            </Grid>
            
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handlePopoverSave} >
                    Save
                </Button>
            </DialogActions>
        
        </Popover>
    </Fragment>
    )
}