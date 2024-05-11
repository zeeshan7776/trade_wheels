import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/searchusedcars`
        );
        setRecords(response.data.ads);
      } catch (err) {
        console.error("Error fetching ads:", err);
      }
    };
    fetchAds();
  }, []);

  const handleSearch = async (event) => {
    const searchQuery = event.target.value;
    setInput(searchQuery);
    if (searchQuery.length > 2) {
      try {
        const response = await axios.get(
          `http://localhost:7000/searchusedcars`,
          {
            params: { search: searchQuery },
          }
        );
        setRecords(response.data.ads);
        navigate("/searchusedcars", { state: { records: response.data.ads } });
      } catch (error) {
        console.error("Error on search:", error);
      }
    }
  };

  return (
    <div>
      <div className="relative flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="w-full sm:w-full rounded-lg relative m-0 min-w-0 flex-auto border px-3 py-[0.25rem] text-base font-normal text-zinc-400 outline-none transition duration-200 ease-in-out focus:border-primary focus:text-zinc-400 focus:shadow-lg dark:border-dark-500 dark:text-zinc-200 dark:placeholder:text-zinc-600"
          placeholder="Search"
          aria-label="Search"
          value={input}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchInput;
