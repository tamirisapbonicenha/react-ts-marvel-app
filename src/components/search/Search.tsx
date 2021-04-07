import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography, Grid, TextField } from '@material-ui/core';
import { fetchCharacterByName } from '../../state/charactersSlice';
import useStyles from './Search.styles';

export default function Search() {
  const classes = useStyles();
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;

    dispatch(fetchCharacterByName({ params: { name: search } }));
  };

  return (
    <>
      <Typography variant="h6" className={classes.text} color="textPrimary">
        Procure por personagens! Um bom exemplo seria "Spider-man"
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
