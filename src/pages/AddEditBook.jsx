import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookForm from '../Components/BookForm';
import useBooks from '../hooks/useBooks';

const AddEditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBook, updateBook, fetchBookById } = useBooks();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      fetchBookById(id).then(data => setInitialData(data));
    }
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      if (id) {
        await updateBook(id, formData);
      } else {
        await addBook(formData);
      }
      navigate('/');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">
        {id ? 'Edit Book' : 'Add New Book'}
      </h2>
      <BookForm 
        onSubmit={handleSubmit} 
        initialData={initialData} 
      />
    </div>
  );
};

export default AddEditBook;