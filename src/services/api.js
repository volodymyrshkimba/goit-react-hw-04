import axios from "axios";

export const requestPhotoByKey = (keyWord, page) => {
  const axiosParams = {
    params: {
      page: page,
      per_page: 5,
      query: keyWord,
      orientation: "landscape",
      client_id: "_cEZO8aU1C92VerVD8fgjS-e5kaWbfs7zX1oTmKEH-E",
    },

    baseURL: "https://api.unsplash.com/",
  };

  return axios.get("/search/photos", axiosParams);
};
