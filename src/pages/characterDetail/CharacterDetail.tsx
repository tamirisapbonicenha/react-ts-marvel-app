import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Box,
  Grid,
  Typography,
  Button,
  Drawer,
  TextField,
} from '@material-ui/core';
import {
  charactersSelector,
  fetchCharacterById,
  fetchSeriesCharacter,
  fetchCharacterOnLocalStorage,
} from '../../state/charactersSlice';
import useStyles from './CharacterDetail.style';

export default function CharacterDetail() {
  const classes = useStyles();
  let { id } = useParams<any>();
  const [showEditForm, setShowEditForm] = useState(false);
  const [characterName, setCharacterName] = useState('');
  const { loading, character, series, error, characterOnClient } = useSelector(
    charactersSelector
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacterById(id));
    if (localStorage.getItem(id) !== null) {
      let char = localStorage.getItem(id) || '';
      dispatch(fetchCharacterOnLocalStorage(JSON.parse(char)));
    }
    dispatch(fetchSeriesCharacter(id));
  }, [dispatch, id]);

  const handleSaveForm = (e: any) => {
    e.preventDefault();
    if (characterName === '') return;
    localStorage.setItem(id, JSON.stringify({ name: characterName }));
  };

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
                {characterOnClient.length > 0
                  ? characterOnClient[0].name
                  : character[0].name}
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
        <Box textAlign="center">
          <Typography variant="h6" component="p">
            Viu algo errado?
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            disableElevation
            onClick={() => setShowEditForm(true)}
          >
            Edite os dados do herói
          </Button>
        </Box>
        <Box my={5} className={classes.contentSeries}>
          <div className={classes.divider}></div>
          <Box my={5} textAlign="center">
            <Typography variant="h4" component="h2">
              Séries que o personagem participou
            </Typography>
          </Box>
          <Grid container justify="center" alignItems="flex-start" spacing={2}>
            {series.map((serie: any) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={serie.id}>
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
      <Drawer
        anchor="right"
        open={showEditForm}
        onClose={() => setShowEditForm(false)}
      >
        {character.length > 0 && (
          <>
            <Formik
              initialValues={{
                name: character[0].name || '',
              }}
              validate={(values) => {
                const errors: any = {};
                if (!values.name) {
                  errors.name = 'O campo é obrigatório';
                }
                return errors;
              }}
              enableReinitialize
              onSubmit={(values, { setSubmitting }) => {
                localStorage.setItem(id, JSON.stringify([values]));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                  <Typography variant="h5" component="h4" gutterBottom>
                    Dados do herói
                  </Typography>
                  <Box mt={2} mb={1}>
                    <TextField
                      type="text"
                      name="name"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      helperText={errors.name}
                      fullWidth
                    />
                  </Box>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="large"
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                  >
                    Salvar
                  </Button>
                </form>
              )}
            </Formik>
          </>
        )}
      </Drawer>
    </Box>
  );
}
