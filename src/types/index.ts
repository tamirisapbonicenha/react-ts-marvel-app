export type Character = {
  name: string;
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type Paginate = {
  params: {
    offset: number;
  }
}

export type Pagination = {
  total: 0,
  count: 0,
  offset: 0,
  limit: 0,
};

export type Search = {
  params: {
    name: string,
  }
}

export type Series = {
  title: string;
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export type InitialState = {
  loading: boolean,
  error: string,
  characters: Character[],
  character: Character[],
  characterOnClient?: {},
  series: [],
  pagination: {
    total: number,
    count: number,
    offset: number,
    limit: number,
  },
}