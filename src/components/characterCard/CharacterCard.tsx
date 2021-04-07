import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import { Character } from '../../types';
import useStyles from './CharacterCard.styles';

type CharacterProps = {
  character: Character;
};

export default function CharacterCard({
  character,
}: CharacterProps): JSX.Element {
  const classes = useStyles();
  const history = useHistory();
  const {
    name,
    id,
    thumbnail: { path, extension },
  } = character;

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        component="img"
        alt={`Imagem do personagem ${name}`}
        height="210"
        image={`${path}.${extension}`}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          {name}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          color="primary"
          onClick={() =>
            history.push({
              pathname: `/char/${id}`,
            })
          }
        >
          Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
