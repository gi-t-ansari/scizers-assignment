import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { UserCard } from "../../components";
import { Input } from "@material-tailwind/react";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = usersData.filter((user) =>
    user?.name.toLowerCase().includes(search.toLowerCase())
  );

  const fetchUsersData = async () => {
    try {
      const response = await axios.get(API_URL.USERS_API);
      const data = await response.data.results;
      setUsersData(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <>
      <div className="md:w-2/3 rounded-md bg-white md:mx-auto mx-4">
        <Input label="Search user by name" onChange={handleSearch}/>
      </div>
      <div className="flex justify-center items-center gap-6 mt-5 flex-wrap">
        {filteredData?.map((user, index) => (
          <UserCard
            key={index}
            name={user?.name}
            gender={user?.gender}
            hairColor={user?.hair_color}
            skinColor={user?.skin_color}
            vehicles={user?.vehicles?.length}
          />
        ))}
        {search && filteredData.length === 0 && <p>No user found</p>}
        {!usersData && <p>Loading....</p>}
      </div>
    </>
  );
};

export default Users;
