import { useState, useEffect } from "react";

const useFetchById = (id, url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/${id}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [id, url]);

  return { data, error };
};

export default useFetchById;
