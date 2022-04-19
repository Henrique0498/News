import { newsNotice } from "./news";

export interface homePage  {
  status: string,
  totalResults: number,
  articles: newsNotice[]
}

