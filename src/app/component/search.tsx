import React from 'react';

interface SearchProps {
  onSearch: (arg: string) => void
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
      className='relative rounded-full bg-white px-2 border-4 border-black w-full'
    />
  );
};

export default Search;
