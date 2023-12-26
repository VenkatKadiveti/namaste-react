import { useEffect, useState } from "react";
import API_URLS from "../apiUrls";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(API_URLS.BASE_URL + API_URLS.RESTAURANT_MENU, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getBody()),
    });
    const responseData = await data.json();
    setResInfo(responseData);
  };

  const getBody = () => {
    return {
      pageType: "REGULAR_MENU",
      lat: 12.9351929,
      lng: 77.62448069999999,
      restaurantId: resId,
    };
  };

  return resInfo;
};

export default useRestaurantMenu;
