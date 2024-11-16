
import BoxsCard from "./componet/BoxsCard/BoxsCard";
import GetdataList from "./componet/GetdataList";

const page = async ({ searchParams }) => {
  let { Make } = searchParams;


  return (
    <>
      {/* Hero  */}

      <main className="container   m-auto px-4 lg:px-24 ">
        <h1 className="font-bold text-2xl">Serach Cars Yoy Need </h1>
        <p>Lorem Just Taks About Cars </p>

        {/* List top Filter  */}
        <div className="mt-3">
          <GetdataList />
        </div>

        {/* Resulte filter  */}
        <div className="mt-2">
          {/* <Suspense fallback={<div>Loding </div>}> */}
          <BoxsCard Make={Make} />
          {/* </Suspense>s */}
        </div>
      </main>

      {/* Fotter  */}
    </>
  );
};

export default page;
