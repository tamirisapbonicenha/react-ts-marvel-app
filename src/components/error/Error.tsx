import React from 'react';
import { useSelector } from 'react-redux';
import ErrorIcon from '@material-ui/icons/Error';
import { charactersSelector } from '../../state/charactersSlice';
import { Box, Typography } from '@material-ui/core';
import { errorsHandle } from '../../constants/errorsMessages';

export default function Error(): JSX.Element {
  const {
    error: { code },
  } = useSelector(charactersSelector);

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <ErrorIcon color="error" />
      <Box ml={1}>
        <Typography color="textPrimary" variant="h6" component="p">
          {errorsHandle[code].message}
        </Typography>
      </Box>
    </Box>
  );
}
