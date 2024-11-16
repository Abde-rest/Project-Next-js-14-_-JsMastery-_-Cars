const FetchDataCars = async () => {


  // List cars
  const url = "https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "eb82efc58dmshdf3654723b86b9ap1c4343jsn5c83e087c6a6",
      "x-rapidapi-host": "car-api2.p.rapidapi.com",
    },
  };

  let res = await fetch(
    url,

    options
  );
  let dataList = await res.json();

  // console.log(dataList.data);

  return dataList;
};

export default FetchDataCars;
