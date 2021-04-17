export type Error = {
  code: string;
  message: string;
};

export type ErrorRawData = {
  data: Error;
};

export type InitialState = {
  loading: boolean;
  error: Error | null;
  characters: Character[];
  character: Character[];
  characterOnClient?: null;
  series: [];
  pagination: {
    total: number;
    count: number;
    offset: number;
    limit: number;
  };
}

export type Character = {
  id: number;
  name: string;
  description: string;
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
  total: 0;
  count: 0;
  offset: 0;
  limit: 0;
};

export type Search = {
  params: {
    name: string;
  }
}

export type Series = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}