import React from "react";
// import { cache } from "sharp";

const fetchCars = async (Make) => {
  let CarModal = Make.Make;
  // console.log(CarModal);

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${
    CarModal || "BMW"
  }`;

  // This is api from Rapid is Api => Cars Api Ninja
  // const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=Corolla`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "eb82efc58dmshdf3654723b86b9ap1c4343jsn5c83e087c6a6",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  let response = await fetch(url, options);
  let data = await response.json();

  // console.log(data);

  return data;
};

export default fetchCars;
// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=BMW';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'eb82efc58dmshdf3654723b86b9ap1c4343jsn5c83e087c6a6',
// 		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
