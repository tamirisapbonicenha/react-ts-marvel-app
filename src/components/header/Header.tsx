import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import useStyles from './Header.styles';

export default function Header(): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.cover} mb={3}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" className={classes.grid}>
          <Typography variant="h5" className={classes.title}>
            Conheça mais sobre os personagens da Marvel. Navegue, pesquise,
            aprenda e divirta-se!
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}
