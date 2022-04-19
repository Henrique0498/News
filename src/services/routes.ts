export const API_URL = "https://newsapi.org/v2/";

export function GET_LIST_HOME_PAGE() {
  return {
    url: API_URL + 'top-headlines?country=br&category=business&apiKey=e1f24bbfb26a40f18a05bdf1328bb7ee',
    options: {
      method: "GET"
    },
  };
}