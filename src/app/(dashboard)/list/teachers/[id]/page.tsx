import Image from "next/image";

const SingleTeachersPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
        
        {/*LEFT*/}
        <div className="w-ful xl:w-2/3">

        {/*TOP*/}
        <div className="flex flex-col lg:flex-row gap-4">

        {/*USER INFO CARD*/}
        <div className="bg-assumDevs py-6 px-4 rounded-md flex-1 flex  gap-4">
          <div className="w-1/2">
          <Image src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover" />
          </div>
          <div className="w-2/3 flex flex-col justify-between gap-4">
          <h1 className="text-xl font-semibold">Peters Dominic</h1>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">

            <div className="">
              <Image sr="/blood.png" alt="" width={14} height={14} />
              <span>A+</span>
            </div>
            <div className="">
              <Image sr="/blood.png" alt="" width={14} height={14} />
              <span>A+</span>
            </div>
            <div className="">
              <Image sr="/blood.png" alt="" width={14} height={14} />
              <span>A+</span>
            </div>
            <div className="">
              <Image sr="/blood.png" alt="" width={14} height={14} />
              <span>A+</span>
            </div>

          </div>
          </div>
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