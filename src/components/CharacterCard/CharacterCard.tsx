import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import useStyles from './CharacterCard.styles';

export default function CharacterCard({ character }: any) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`Imagem do herói ${character.name}`}
          height="210"
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          title={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button color="primary">Detalhes</Button>
      </CardActions>
    </Card>
  );
}
