import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ListedItem from "./ListedItem/ListedItem";
import { motion } from "framer-motion";

const useQuery = () => new URLSearchParams(useLocation().search);

const AllUsedCars = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const query = useQuery();
  const make = query.get("make");
  const model = query.get("model");
  const category = query.get("category");

  const fetchAds = async () => {
    const urlParams = new URLSearchParams();
    if (make) urlParams.append("make", make);
    if (model) urlParams.append("model", model);
    if (category) urlParams.append("category", category);
    urlParams.append("page", page);

    try {
      const response = await axios.get(
        `http://localhost:7000/allusedcars?${urlParams.toString()}`
      );
      if (page === 1) {
        setAds(response.data.ads);
      } else {
        setAds((prevAds) => [...prevAds, ...response.data.ads]);
      }
      setHasMore(response.data.hasMore);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching ads:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, [make, model, category, page]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-red-900">
        <p className="text-dark-100 text-xl font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-10 md:mx-24 py-20">
      <div className="text-dark-text w-full h-full mb-20">
        <motion.div
          className="text-xl sm:text-2xl mb-10 font-semibold text-dark-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
          }}
        >
          Used Cars For Sale In Pakistan
        </motion.div>

        <div className="flex flex-wrap">
          {ads?.length > 0 ? (
            ads.map((ad) => <ListedItem key={ad._id} adId={ad._id} ad={ad} />)
          ) : (
            <div className="w-full text-center mt-5 p-12">
              <h2>No listings available. Please check back soon.</h2>
            </div>
          )}
        </div>

        {hasMore && (
          <button
            onClick={() => setPage((prevPage) => prevPage + 1)}
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllUsedCars;
