const SingleTeachersPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
        
        {/*LEFT*/}
        <div className="w-ful xl:w-2/3">

        {/*TOP*/}
        <div className="flex flex-col lg:flex-row gap-4">

        {/*USER INFO CARD*/}
        <div className="bg-assumDevs py-6 px-4 rounded-md flex-1 flex  gap-4">
          <div className="w-1/2"></div>
          <div className="w-2/3"></div>
        </div>
        
        {/*SMALL CARD*/}
        <div className="flex-1"></div>

        </div>
        {/*BOTTOM*/}
        <div className="">Schedule</div>
        </div>


        {/*RIGHT*/}
        <div className="w-full xl:w-1/3">r</div>
        
        </div>
  );
};

export default SingleTeachersPage;