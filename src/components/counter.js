import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, CardActions, Typography, CardContent } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    gridContainer: {
        flexGrow: 1,
    },
    gridItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    cardMedia: {
        height: "35vh",
    },
}));

const Counter = () => {
    const classes = useStyles();
    return (
        <main className='circle-container'>
            <Grid container className={classes.gridContainer} spacing={2}>
                <Grid item xs={12} className={classes.gridItem}>
                    <CardContent>
                        <Typography variant="h1" gutterBottom>0</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="secondary">
                            Inc
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="secondary">
                            Dec
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="secondary">
                            Rnd
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
        </main>
    );
};

export default Counter;