import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = (page) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = "https://test.create.diagnal.com/data/page";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${API_URL}${page}.json`);
        setData((prevData) => [
          ...prevData,
          ...result.data.page["content-items"].content,
        ]);
        setTitle(result.data.page["title"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return { data, title, loading };
};
