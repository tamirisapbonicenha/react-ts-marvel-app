import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Box, Grid, Typography } from '@material-ui/core';
import {
  charactersSelector,
  fetchCharacterById,
  fetchSeriesCharacter,
} from '../../state/charactersSlice';
import useStyles from './CharacterDetail.style';

export default function CharacterDetail(props: any) {
  const classes = useStyles();
  let { id } = useParams<any>();
  const { loading, character, series, error } = useSelector(charactersSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacterById(id));
    dispatch(fetchSeriesCharacter(id));
  }, [dispatch, id]);

  if (loading && character.length === 0) return <p>Carregando...</p>;

  return (
    <Box>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Box mb={3} className={classes.contentChar}>
          {character.length > 0 && (
            <>
              <Typography gutterBottom variant="h3" component="h2">
                {character[0].name}
              </Typography>
              <Box className={classes.imageChar}>
                <img
                  src={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`}
                  alt="Imagem do superman caminhando indicando o carregamento da página"
                />
              </Box>
            </>
          )}
        </Box>
        <Box my={5} className={classes.contentSeries}>
          <div className={classes.divider}></div>
          <Box my={5}>
            <Typography variant="h4" component="h2">
              Séries que o personagem participou
            </Typography>
          </Box>
          <Grid container justify="center" alignItems="flex-start" spacing={2}>
            {series.map((serie: any) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={character.id}>
                <Box className={classes.imageSerie} mb={1}>
                  <img
                    src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                    alt={`Imagem da série ${serie.title}`}
                  />
                </Box>
                <Typography variant="h6" component="p">
                  {serie.title}
                </Typography>
              </Grid>
            ))}
            {series.length === 0 && (
              <Typography variant="h6" component="h2">
                O personagem não teve participação em nenhuma série.
              </Typography>
            )}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
