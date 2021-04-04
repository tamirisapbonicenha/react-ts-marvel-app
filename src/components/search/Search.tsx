import React from 'react';
import { Box, Button, Typography, Grid, TextField } from '@material-ui/core';
import useStyles from './Search.styles';

export default function Search() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" className={classes.text} color="textPrimary">
        Procure por heróis! Um bom exemplo seria "Homem Aranha"
      </Typography>
      <Box mt={2}>
        <form noValidate autoComplete="off">
          <Grid container justify="center">
            <Grid item md={5}>
              <TextField
                name="search"
                id="name"
                label="Busque por heróis"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item md={1}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                disableElevation
                fullWidth
              >
                Buscar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
