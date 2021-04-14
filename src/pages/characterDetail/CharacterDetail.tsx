import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Drawer,
  TextField,
} from '@material-ui/core';
import {
  charactersSelector,
  fetchCharactersById,
  fetchSeriesCharacter,
  setCharacterOnLocalStorage,
} from '../../state/charactersSlice';
import { Loader, Error } from '../../components';
import useStyles from './CharacterDetail.style';
import { Series } from '../../types';

export default function CharacterDetail(): JSX.Element {
  const classes = useStyles();
  let { id } = useParams<any>();
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [nameCharValue, setNameCharValue] = useState<string>('');
  const [descriptionCharValue, setDescriptionCharValue] = useState<string>('');
  const { loading, character, series, error } = useSelector(charactersSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersById(id));
    dispatch(fetchSeriesCharacter(id));
  }, [dispatch, id]);

  useEffect(() => {
    setNameCharValue(character[0]?.name);
    setDescriptionCharValue(character[0]?.description);
  }, [character]);

  const isCharsResults = !loading && character.length > 0 && !error;
  const isNoCharsResults = !loading && !character.length && !error;
  const isSeriesResults = !loading && series.length > 0 && !error;
  const isNoSeriesResults = !loading && !series.length && !error;

  if (loading && character.length === 0) {
    return (
      <Box mb={2}>
        <Loader />
      </Box>
    );
  }

  if (error) {
    return <Container>{error && <Error />}</Container>;
  }

  return (
    <Box>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {isCharsResults && (
          <>
            <Box mb={3} className={classes.contentChar}>
              <Typography color="textPrimary" variant="h3" component="h2">
                {character[0].name}
              </Typography>
              <Typography color="textPrimary" variant="body1" component="p">
                {character[0].description}
              </Typography>
              <Box className={classes.imageChar}>
                <img
                  src={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`}
                  alt="Imagem do superman caminhando indicando o carregamento da página"
                />
              </Box>
            </Box>
            <Box textAlign="center">
              <Typography color="textPrimary" variant="h6" component="p">
                Viu algo errado?
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                disableElevation
                onClick={() => setShowEditForm(true)}
              >
                Corrija os dados do personagem
              </Button>
            </Box>
          </>
        )}
        <Box my={5} className={classes.contentSeries}>
          <div className={classes.divider}></div>
          <Box my={5} textAlign="center">
            <Typography color="textPrimary" variant="h4" component="h2">
              Séries que o personagem participou
            </Typography>
          </Box>
          <Grid container justify="center" alignItems="flex-start" spacing={2}>
            {isSeriesResults &&
              series.map((serie: Series) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={serie.id}>
                  <Box className={classes.imageSerie} mb={1}>
                    <img
                      src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                      alt={`Imagem da série ${serie.title}`}
                    />
                  </Box>
                  <Typography color="textPrimary" variant="h6" component="p">
                    {serie.title}
                  </Typography>
                </Grid>
              ))}
            {isNoSeriesResults && (
              <Typography color="textPrimary" variant="h6" component="h2">
                O personagem não teve participação em nenhuma série.
              </Typography>
            )}
          </Grid>
        </Box>
      </Grid>

      <Drawer
        anchor="right"
        open={showEditForm}
        onClose={() => setShowEditForm(false)}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (nameCharValue === '') return;
            if (descriptionCharValue === '') return;
            dispatch(
              setCharacterOnLocalStorage({
                name: nameCharValue,
                description: descriptionCharValue,
              })
            );
          }}
          className={classes.form}
        >
          <Typography
            color="textPrimary"
            variant="h5"
            component="h4"
            gutterBottom
          >
            Dados do herói
          </Typography>
          <Box mt={2} mb={1}>
            <TextField
              id="name"
              name="name"
              label="Nome do personagem"
              type="text"
              variant="outlined"
              value={nameCharValue}
              onChange={(e) => setNameCharValue(e.target.value)}
              fullWidth
            />
          </Box>
          <Box mt={2} mb={1}>
            <TextField
              id="description"
              name="description"
              label="Descrição do personagem"
              className={classes.textArea}
              type="text"
              variant="outlined"
              value={descriptionCharValue}
              onChange={(e) => setDescriptionCharValue(e.target.value)}
              fullWidth
              multiline
              rows={10}
              rowsMax={10}
            />
          </Box>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            disableElevation
            fullWidth
          >
            Salvar
          </Button>
        </form>
      </Drawer>
    </Box>
  );
}
