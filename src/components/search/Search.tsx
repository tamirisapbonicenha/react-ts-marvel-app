import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography, Grid, TextField } from '@material-ui/core';
import { fetchCharacterByName } from '../../state/charactersSlice';
import useStyles from './Search.styles';

export default function Search() {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (!search) return;

    dispatch(fetchCharacterByName({ params: { name: search } }));
  }

  return (
    <>
      <Typography variant="h6" className={classes.text} color="textPrimary">
        Procure por heróis! Um bom exemplo seria "Homem Aranha"
      </Typography>
      <Box mt={2}>
        <form autoComplete="off" onSubmit={handleFormSubmit}>
          <Grid container justify="center">
            <Grid item md={5}>
              <TextField
                name="search"
                id="name"
                label="Busque por heróis"
                variant="outlined"
                size="small"
                value={search}
                fullWidth
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item md={1}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                disableElevation
                fullWidth
                type="submit"
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
