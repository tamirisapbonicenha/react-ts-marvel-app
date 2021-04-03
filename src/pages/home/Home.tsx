import React, { useState, useEffect } from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import { CharacterCard, Search } from '../../components';
import { api } from '../../services/api';

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api
      .get('/characters')
      .then((response) => {
        setCharacters(response.data.data.results);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Box pb={6}>
        <Search />
      </Box>
      <Box pt={3}>
        <Grid container justify="center" alignItems="center" spacing={2}>
          {characters.map((character) => (
            <Grid item sm={6} md={4}>
              <CharacterCard character={character} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
