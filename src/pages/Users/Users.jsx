import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { UserCard } from "../../components";

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  const fetchUsersData = async () => {
    try {
      const response = await axios.get(API_URL.USERS_API);
      const data = await response.data.results;
      setUsersData(data);
      console.log(data)
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {usersData?.map((user, index) => (
          <UserCard
            key={index}
            name={user?.name}
            gender={user?.gender}
            hairColor={user?.hair_color}
            skinColor={user?.skin_color}
            vehicles={user?.vehicles?.length}
          />
        ))}
      </div>
    </>
  );
};

export default Users;
