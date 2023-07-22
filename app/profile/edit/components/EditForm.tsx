"use client";

import Input from "@/app/components/Inputs/Input";
import Dropzone from "./Dropzone";
import { useMemo, useState } from "react";
import { City, Country, State } from "country-state-city";
import Dropdown, {
  DropdownOptionProps,
} from "@/app/components/Inputs/Dropdown";
import Button from "@/app/components/Button";

interface EditFormProps {
  profilePicture: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  region: string;
  city: string;
}

const EditForm: React.FC<EditFormProps> = ({
  profilePicture,
  fullName,
  email,
  phoneNumber,
  country,
  region,
  city,
}) => {
  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    country: {
      code: "",
      value: country,
    },
    region: {
      code: "",
      value: region,
    },
    city: {
      code: "",
      value: city,
    },
  });

  const countries = Country.getAllCountries();

  const states = useMemo(() => {
    return State.getStatesOfCountry(userData.country.code);
  }, [userData.country]);

  const cities = useMemo(() => {
    return City.getCitiesOfState(userData.country.code, userData.region.code);
  }, [userData.country, userData.region]);

  const onFileUpload = (file: File) => {
    setFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <h1 className="font-semibold text-2xl">Profile Photo</h1>
      <div className="w-11/12 max-w-[15rem] mx-auto my-5">
        <Dropzone onFileUpload={onFileUpload} />
      </div>
      <h1 className="font-semibold text-2xl">Public Profile</h1>
      <div className="flex flex-col gap-5 my-5">
        <Input
          id="fullName"
          label="Name"
          disabled={isLoading}
          required
          value={userData.fullName}
          onChange={handleChange}
        />
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          value={userData.email}
          onChange={handleChange}
          required
        />
        <Input
          id="phoneNumber"
          label="Phone Number"
          disabled={isLoading}
          value={userData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <h1 className="text-2xl font-semibold">Location</h1>
      <div className="flex gap-2 my-5 w-full">
        <Dropdown
          label="Country"
          value={userData.country}
          onChange={(newValue: DropdownOptionProps) =>
            setUserData({
              ...userData,
              country: newValue,
              region: {
                code: "",
                value: "",
              },
              city: {
                code: "",
                value: "",
              },
            })
          }
          options={countries.map((country) => {
            return {
              code: country.isoCode,
              value: country.name,
            };
          })}
        />
        <Dropdown
          label="Country"
          value={userData.region}
          onChange={(newValue: DropdownOptionProps) =>
            setUserData({
              ...userData,
              region: newValue,
              city: { code: "", value: "" },
            })
          }
          options={states.map((state) => {
            return {
              code: state.isoCode,
              value: state.name,
            };
          })}
        />
        <Dropdown
          label="Country"
          value={userData.city}
          onChange={(newValue: DropdownOptionProps) =>
            setUserData({ ...userData, city: newValue })
          }
          options={cities.map((city) => {
            return {
              code: city.stateCode,
              value: city.name,
            };
          })}
        />
      </div>
      <Button label="Save" onClick={() => {}} />
    </div>
  );
};

export default EditForm;
