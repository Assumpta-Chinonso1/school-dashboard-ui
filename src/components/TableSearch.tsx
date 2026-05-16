import Image from "next/image";

const TableSearchPage = () => {
  return (
              <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 p-2">
                <Image src="/search.png" alt="" width={14} height={14} />
                <input type="text" placeholder="Search..." />
              </div>
   
  );
};

export default TableSearchPage;