import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';
import BookTable from '../Components/BookTable';
import SearchAndFilter from '../Components/SearchAndFilter';
import Pagination from '../Components/Pagination';
import useBooks from '../hooks/useBooks';
import LoadingSkeleton from '../Components/LoadingSkeleton';

const Dashboard = () => {
  const {
    books,
    loading,
    error,
    pagination,
    filters,
    deleteBook,
    setPage,
    setFilter
  } = useBooks();
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Book Dashboard</h1>
        <Link
          to="/add"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
          Add Book
        </Link>
      </div>

      <SearchAndFilter filters={filters} setFilter={setFilter} />

      {loading && <LoadingSkeleton />}
      {error && <p className="text-red-500 p-4 bg-red-50 rounded">{error}</p>}

      <BookTable books={books} onDelete={deleteBook} pagination={pagination}/>

      <Pagination
        currentPage={pagination.page}
        totalPages={Math.ceil(pagination.total / pagination.limit)}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Dashboard;