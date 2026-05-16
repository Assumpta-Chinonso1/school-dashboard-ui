import TableSearchPage from '@/components/TableSearch';

const TeacherListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/*Top*/}
      <div className="">
        <h1 > All Teachers</h1>
        <div className="">
          <TableSearchPage />
          <div className="">
            
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