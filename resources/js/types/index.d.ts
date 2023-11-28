export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User;
  };
  core: {
    laravelVersion?: string;
    phpVersion?: string;
    appVersion?: string;
    isProduction: boolean;
    isLocal: boolean;
  }
};

interface LaravelPagination {
  url?: string;
  label: string;
  active: boolean;
}

interface LaravelResponse {
  current_page: number;
  data: any[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: LaravelPagination[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: string;
  to: number;
  total: number;
};
