import Image from "next/image";

const UserCards = ({type}: {type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-assumDevsPurple even:bg-assumDevsYellow p-4 flex-1'>
        <div className="">
            <span>2026/5</span>
            <Image src="/more.png" alt="" width={20} height={20} />
        </div>
        <h1>1,234</h1>
         h2
    </div>
  );
};

export default UserCards;