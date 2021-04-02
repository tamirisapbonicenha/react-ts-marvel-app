import React, { useEffect } from 'react';
import { api } from '../../services/api';

export default function ContainedButtons() {
  useEffect(() => {
    api
      .get('/comics')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}
