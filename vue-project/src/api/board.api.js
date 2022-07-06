import axios from "axios";

export const BoardApiService = {
  async fetch() {
    const json = await axios.get(
      "https://api.jsonbin.io/v3/b/62c2de75f023111c706291bb/latest",
      {
        headers: {
          "X-Master-Key": import.meta.env.VITE_APP_API_KEY,
        },
      }
    );
    return json.data.record;
  },
  async put(columns) {
    const json = await axios.put(
      "https://api.jsonbin.io/v3/b/62c2de75f023111c706291bb",
      columns,
      {
        headers: {
          "X-Master-Key": import.meta.env.VITE_APP_API_KEY,
          "Content-Type": "application/json",
          "X-Bin-Versioning": false,
        },
      }
    );
    return json.data.record;
  },
};
