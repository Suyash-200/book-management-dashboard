import { useState, useEffect, useCallback, useRef } from "react";
import {
  getBooks,
  createBook,
  updateBook,
  getBookById,
  deleteBook as apiDeleteBook,
} from "../services/api";
import { toast } from "react-hot-toast";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [error, setError] = useState(null);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });

  const [filters, setFilters] = useState({
    search: "",
    genre: "",
    status: "",
  });

  const searchTimeout = useRef(null);

  const fetchBooks = useCallback(
    async (paramsOverride = {}) => {
      try {
        setLoading(true);
        setError(null);

        const pageToUse = paramsOverride.page ?? pagination.page;

        const params = {
          title: filters.search,
          genre: filters.genre,
          status: filters.status,
          page: pageToUse,
          limit: pagination.limit,
        };

        const { data, total } = await getBooks(params);
        setBooks(data);
        setPagination((prev) => ({ ...prev, total }));
      } catch (err) {
        setError(err.message || "Unknown error");
        toast.error("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    },
    [
      filters.search,
      filters.genre,
      filters.status,
      pagination.page,
      pagination.limit,
    ]
  );

  useEffect(() => {
    fetchBooks();
  }, [filters.genre, filters.status, filters.search]);

  const addBook = async (book) => {
    try {
      setLoading(true);
      await createBook(book);
      toast.success("Book added successfully");
      fetchBooks();
    } catch (err) {
      setError(err.message);
      toast.error("Failed to add book");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchBookById = async (id) => {
    try {
      setLoading(true);
      const response = await getBookById(id);
      setCurrentBook(response.data);
      return response.data;
    } catch (err) {
      setError(err.message);
      toast.error("Failed to fetch book");
    } finally {
      setLoading(false);
    }
  };

  const updateExistingBook = async (id, book) => {
    try {
      setLoading(true);
      await updateBook(id, book);
      toast.success("Book updated successfully");
    } catch (err) {
      setError(err.message);
      toast.error("Failed to update book");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteBook = async (id) => {
    try {
      setLoading(true);
      await apiDeleteBook(id);
      toast.success("Book deleted successfully");
      fetchBooks();
    } catch (err) {
      setError(err.message);
      toast.error("Failed to delete book");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const setPage = (page) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  const setFilter = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setPagination((prev) => ({ ...prev, page: 1 }));
  };

  return {
    books,
    loading,
    error,
    pagination,
    filters,
    fetchBooks,
    fetchBookById,
    addBook,
    updateBook: updateExistingBook,
    deleteBook,
    setPage,
    setFilter,
  };
};

export default useBooks;
