export const getError = (error) => {
  const errorMessage =
    "Uw data kan momenteel niet verwerkt worden probeer het nogmaals";

  if (error.name === "Fetch User") {
    return error.message;
  }

  if (!error.response) {
    console.error(`API ${error.config.url} not found`);
    return errorMessage;
  }
  // if (process.env.NODE_ENV === "development") {
  //   console.error(error.response.data);
  //   console.error(error.response.status);
  //   console.error(error.response.headers);
  // }
  if (error.response.data && error.response.data.errors) {
    return error.response.data.errors;
  }

  return errorMessage;
};
