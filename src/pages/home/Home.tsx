import React, { useState, useEffect } from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import loadingImage from '../../images/loading.gif';
import { CharacterCard, Search, Pagination } from '../../components';
import { api } from '../../services/api';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setpages] = useState<any>({});

  useEffect(() => {
    setLoading(true);
    api
      .get('/characters')
      .then((response) => {
        setCharacters(response.data.data.results);
        setpages(response.data.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
            characters.map((character) => (
              <Grid item sm={6} md={4}>
                <CharacterCard character={character} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
      <Box py={6}>
        <Pagination
          itensPerPage={pages.count}
          totalItens={pages.total}
          currentPage={pages.offset}
          paginate={paginate}
        />
      </Box>
    </Container>
  );
}
