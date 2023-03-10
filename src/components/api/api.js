import axios from "axios";
// https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab

const apikey = "PrcJl2cquT8b6PYWmRz99Nz8PGrcsg5r";

export const getData = async (endpoint) => {
  try {
    const response = await axios.get(
      `https://api.apilayer.com/exchangerates_data/${endpoint}`,
      {
        headers: {
          apikey,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);

    return { error: true };
  }
};
