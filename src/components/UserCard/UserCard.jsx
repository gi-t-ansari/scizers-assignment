import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { makeFirstLetterCapital, backgroundColor } from "../../config";

const UserCard = ({ name, hairColor, skinColor, gender, vehicles }) => {

  return (
    <Card
      className={`w-80 mb-4`}
      style={{
        backgroundColor:
          hairColor !== "n/a" || hairColor !== "none"
            ? hairColor === "blond"
              ? "#F2E9B6"
              : backgroundColor(hairColor)
            : "#ffffff",
        color: backgroundColor(hairColor) !== "black" ? "#000" : "#fff"
      }}
    >
      <CardHeader floated={false} className="h-2/4">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="mb-2 text-center">
          {name}
        </Typography>
        <div>
          <div className="flex justify-between items-center">
            <Typography className="font-medium opacity-70">
              Gender
            </Typography>
            <Typography variant="h6" className=" mb-2 text-center">
              {gender !== "n/a" ? makeFirstLetterCapital(gender) : "N/A"}
            </Typography>
          </div>
          <div className="flex justify-between items-center">
            <Typography className="font-medium opacity-70">
              Hair Color
            </Typography>
            <Typography variant="h6" className=" mb-2 text-center">
              {hairColor !== "n/a" ? makeFirstLetterCapital(hairColor) : "N/A"}
            </Typography>
          </div>
          <div className="flex justify-between items-center">
            <Typography className="font-medium opacity-70">
              Skin Color
            </Typography>
            <Typography variant="h6" className=" mb-2 text-center">
              {skinColor !== "n/a" ? makeFirstLetterCapital(skinColor) : "N/A"}
            </Typography>
          </div>
          <div className="flex justify-between items-center">
            <Typography className="font-medium opacity-70">
              Count of Vehicles
            </Typography>
            <Typography variant="h6" className="  text-center">
              {vehicles}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
