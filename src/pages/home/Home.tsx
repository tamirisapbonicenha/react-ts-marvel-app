import React, { useMemo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCharacters,
  charactersSelector,
} from '../../state/charactersSlice';
import { Container, Box, Grid, Typography } from '@material-ui/core';
import { Character } from '../../types';
import { Search, Loader, CharacterCard, Pagination } from '../../components';

export default function Home(): JSX.Element {
  const [offset, setOffset] = useState(0);
  const { loading, characters, error, pagination } = useSelector(
    charactersSelector
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters({ params: { offset: offset } }));
  }, [dispatch]);

  const pageCount = useMemo(
    () => Math.ceil(pagination.total / pagination.limit),
    [pagination]
  );

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    dispatch(
      fetchCharacters({ params: { offset: selectedPage * pagination.limit } })
    );
    setOffset(selectedPage);
  };

  const isLoading = loading && !error;
  const isNoResults = !loading && !characters.length && !error;
  const isResults = !loading && characters.length > 0 && !error;

  return (
    <Container>
      <Box pb={6}>
        <Search />
      </Box>
      {isLoading && (
        <Box mb={2}>
          <Loader />
        </Box>
      )}
      {isNoResults && (
        <Typography color="textPrimary" variant="h6" component="h2">
          Não encontramos nenhum resultado, que tal tentar por "loki".
        </Typography>
      )}
      {isResults && (
        <>
          <Box pt={3}>
            <Grid container justify="center" alignItems="center" spacing={2}>
              {characters.map((character: Character) => (
                <Grid item sm={6} md={4} key={character.id}>
                  <CharacterCard character={character} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box py={6}>
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
              forcePage={offset}
            />
          </Box>
        </>
      )}
      {error && <span>Error</span>}
    </Container>
  );
}
