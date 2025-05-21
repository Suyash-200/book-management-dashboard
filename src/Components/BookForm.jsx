import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const BookForm = ({ 
  onSubmit, 
  initialData = null, 
  isSubmitting 
}) => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          {...register('title', { required: 'Title is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Author</label>
        <input
          {...register('author', { required: 'Author is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        />
        {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Genre</label>
        <select
          {...register('genre', { required: 'Genre is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        >
          <option value="">Select Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Published Year</label>
        <input
          type="number"
          {...register('publishedYear', { 
            required: 'Year is required',
            min: { value: 1000, message: 'Year must be after 1000' },
            max: { value: new Date().getFullYear(), message: 'Year cannot be in future' }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        />
        {errors.publishedYear && <p className="text-red-500 text-sm">{errors.publishedYear.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          {...register('status', { required: 'Status is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        >
          <option value="">Select Status</option>
          <option value="Available">Available</option>
          <option value="Issued">Issued</option>
        </select>
        {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isSubmitting ? 'Saving...' : 'Save Book'}
      </button>
    </form>
  );
};

export default BookForm;