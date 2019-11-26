import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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

const Counter = ({ counter, inc, dec, rnd, reset }) => {
    const classes = useStyles();
    return (
        <main className='circle-container'>
            <Grid container className={classes.gridContainer} spacing={2}>
                <Grid item xs={12} className={classes.gridItem}>
                    <CardContent>
                        <Typography variant="h1" gutterBottom>{counter}</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <CardActions>
                        <Button
                            onClick={inc}
                            variant="contained"
                            color="secondary">
                            Inc
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button
                            onClick={dec}
                            variant="contained"
                            color="secondary">
                            Dec
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button
                            onClick={rnd}
                            variant="contained"
                            color="secondary">
                            Rnd
                        </Button>
                        <Button
                            onClick={reset}
                            variant="contained"
                            color="secondary">
                            Reset
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
        </main>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

export default connect(mapStateToProps, actions)(Counter);