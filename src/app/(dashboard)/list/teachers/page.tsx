import TableSearchPage from '@/components/TableSearch';
import Image from 'next/image';

const TeacherListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/*Top*/}
      <div className="">
        <h1 > All Teachers</h1>
        <div className="">
          <TableSearchPage />
          <div className="">
            <button>
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/*Top*/}
      <div className=""></div>
      {/*Top*/}
      <div className=""></div>
    </div>
  );
};

export default TeacherListPage;