export interface SearchRes {
  total_count: number;
  incomplete_results: boolean;
  items: Array<Repository>;
}

export interface Repository {
  id: string;
  full_name: string;
  description: string;
  owner: Author;
  html_url: string;
  stargazers_count: number;
}

export interface Author {
  id: string;
  avatar_url: string;
  html_url: string;
}
