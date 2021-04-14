import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography, Grid, TextField } from '@material-ui/core';
import { fetchCharactersByName } from '../../state/charactersSlice';

export default function Search() {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;

    dispatch(fetchCharactersByName({ params: { name: search } }));
  };

  return (
    <>
      <Box textAlign="center">
        <Typography color="textPrimary" variant="h5">
          Procure por personagens! Um bom exemplo seria "Spider-man"
        </Typography>
      </Box>
      <Box mt={2}>
        <form autoComplete="off" onSubmit={handleFormSubmit}>
          <Grid container justify="center">
            <Grid item md={5}>
              <TextField
                id="name"
                name="search"
                label="Busque por personagens"
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
