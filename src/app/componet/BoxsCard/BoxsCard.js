import CardBox from "./CardBox";
import fetchCars from "./fetchCars";

const BoxsCard = async (Make) => {
  let data = await fetchCars(Make);

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {/* <div> */}
      {data && data.length > 0 ? (
        // <div></div>
        data.map((car, index) => {
          return (
            <div key={index}>
              <CardBox car={car} />
            </div>
          );
        })
      ) : (
        // </div>
        <div className="text-center font-bold m-auto">
          No Car In Make : {Make.Make} <p>The Problem From The Api </p>{" "}
        </div>
      )}
    </div>
  );
};

export default BoxsCard;
