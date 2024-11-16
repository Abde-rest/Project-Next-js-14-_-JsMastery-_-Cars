import SerchBar from "./SerchBar";
import FetchDataCars from "./FetchDataCars";
const GetdataList = async () => {
  let dataList = await FetchDataCars();


  // console.log(dataList);
  
  return <SerchBar dataList={dataList} />;
};

export default GetdataList;
