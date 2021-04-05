import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const {
    name,
    id,
    thumbnail: { path, extension },
  } = character;

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`Imagem do herói ${name}`}
          height="210"
          image={`${path}.${extension}`}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          color="primary"
          onClick={() =>
            history.push({
              pathname: `/char/${id}`,
              state: { detail: 'some_value' },
            })
          }
        >
          Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
