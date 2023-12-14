import React, { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const NewThisWeek = () => {
  const { id } = useParams();
  const [productbook, setProductbook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}/product`
        );
        if (response.data) {
          console.log(response.data);
          setProductbook(response.data);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER}/product/${productId}`
      );

      if (response.data.alert) {
        // Reload the data after successful deletion
        // fetchData();
      } else {
        console.log("Error deleting product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  // console.log(process.env.REACT_APP_SERVER);
  // const apiUrl = `${process.env.REACT_APP_SERVER}/uploadProduct`;
  // console.log(apiUrl);

  return (
    <div>
      <div className="w-full h-[420px] px-14 py-2 ">
        <div className="w-full h-full shadow-lg ">
          <div className="flex justify-between px-4">
            <p className="pt-4 mb-2 text-xl hover:text-emerald-500 cursor-pointer">
              Mới trong tuần
            </p>
            <p className="pt-5 text-emerald-600  mb-2 text-sm decoration-emerald-600 hover:underline cursor-pointer">
              XEM TẤT CẢ
            </p>
          </div>

          <hr className="px-6 bg-gray-100 " />
          <div className="flex gap-5 overflow-scroll scroll-smooth transition-all">
            {loading ? (
              <p className="text-center mt-20 ml-[570px]">
                <Spinner className="h-10 w-10 text-gray-900/50" color="blue" />
              </p>
            ) : (
              productbook.map((item) => {
                return (
                  <Card
                    key={item._id}
                    imageBook={item.imageBook}
                    nameBook={item.nameBook}
                    author={item.author}
                    publishing={item.publishing}
                    onDelete={() => handleDelete(item._id)}
                    // onEdit={() => handleEdit(item._id)}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewThisWeek;
