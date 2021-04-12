interface ErrorObject {
  status: string,
  message: string,
}
interface ErrorMessages<T> {
  [Key: string]: T;
}

export const errorsHandle: ErrorMessages<ErrorObject> = {
  MissingParameter: {
    status: '409',
    message: 'Você deve fornecer uma chave de usuário!',
  },
  InvalidParameter: {
    status: '401',
    message: 'Os parâmetros enviados estão incorretos.',
  },
  MethodNotAllowed: {
    status: '405',
    message: 'O método HTTP utilizado não é permitido.',
  },
  Forbidden: {
    status: '403',
    message: 'Você não tem acesso.',
  },
}
