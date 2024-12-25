"use client";

import { useRouter } from "next/navigation";

const Search: React.FC = () => {
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;

    if (term === "") {
      router.replace('/');
    } else {
      router.replace(`/search?query=${term}`);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search"
      className="border rounded-full px-4 py-1 w-full md:w-2/3 text-gray-700"
      onChange={handleSearch}
    />
  );
};

export default Search;
