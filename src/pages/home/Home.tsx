import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCharacters,
  charactersSelector,
} from '../../state/charactersSlice';
import { Container, Box, Grid } from '@material-ui/core';
import loadingImage from '../../images/loading.gif';
import { CharacterCard, Search, Pagination } from '../../components';

export default function Home() {
  const { loading, characters, error } = useSelector(charactersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters({ params: { offset: 0 } }));
    // dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <Container>
      <Box pb={6}>
        <Search />
      </Box>
      <Box pt={3}>
        <Grid container justify="center" alignItems="center" spacing={2}>
          {loading ? (
            <Box mb={2}>
              <img
                src={loadingImage}
                alt="Imagem do superman caminhando indicando o carregamento da página"
              />
            </Box>
          ) : (
            characters.map((character: any) => (
              <Grid item sm={6} md={4} key={character.id}>
                <CharacterCard character={character} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
      <Box py={6}>
        <Pagination />
      </Box>
    </Container>
  );
}
