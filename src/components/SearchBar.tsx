import { ChangeEvent, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import ProductList from './ProductList';
type Product = {
  id: number;
  title: string;
  image: string;
};

export const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');

      setProducts(response.data);
    };
    fetchData();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('event', event.target.value);
    setsearchTerm(event.target.value);
    setSearchResults(
      products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="searchTerm-wrapper flex items-center rounded-full border px-4 py-1 w-full bg-white shadow">
        <FaSearch className="text-blue-300 me-2" />
        <input
          type="text"
          placeholder="Type to search..."
          className="bg-transparent h-full w-full focus:outline-none"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {searchTerm !== '' && searchResults.length > 0 && (
        <ProductList products={searchResults} />
      )}
    </>
  );
};
