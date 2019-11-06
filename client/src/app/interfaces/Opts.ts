export interface Opts {
  limit?: number;
  pagination?: {
    page: number;
    perPage: number;
  };
  types?: {
    core?: boolean;
    hacks?: boolean;
  };
}
