import React from 'react';
import { Box, Typography } from '@material-ui/core';
import loadingImage from '../../images/loading.gif';
import useStyles from './Loader.styles';

export default function Loader(): JSX.Element {
  const classes = useStyles();

  return (
    <Box textAlign="center">
      <img
        src={loadingImage}
        className={classes.image}
        alt="Imagem do superman caminhando indicando o carregamento da página"
      />
      <Typography color="textPrimary" variant="h6" component="p">
        Carregando...
      </Typography>
    </Box>
  );
}
