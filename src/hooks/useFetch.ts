import React from "react";

interface useFetchProps {
  url: string,
  options: object
}

export const useFetch = <Data = object>() => {
  const [data, setData] = React.useState<Data>();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async ({url, options}:useFetchProps) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) {
        throw new Error(json.message);
      }
    } catch (err: any) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);

      return { response, json };
    }
  }, []);

  return { data, error, loading, request };
};