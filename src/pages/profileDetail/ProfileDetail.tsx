import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export default function ProfileDetail(props: any) {
  let { id } = useParams<any>();
  useEffect(() => {
    api
      .get(`/characters/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return <h1>Página de detalhe do perfil!</h1>;
}
