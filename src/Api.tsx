import axios from "axios";

export const GetAllResponse = (query: string) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=39218752-bcba823567459f86f19b89d4f&q=${query}`
    )
    .then((response) => {
      const resonseString = JSON.stringify(response.data.hits);

      return JSON.parse(resonseString);
    });
};
