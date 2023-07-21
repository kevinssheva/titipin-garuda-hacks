"use client";

import { FcGoogle } from "react-icons/fc";
import { useCallback, useEffect, useMemo, useState } from "react";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import Modal from "./Modal";
import Input from "../Inputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import Dropdown, { DropdownOptionProps } from "../Inputs/Dropdown";
import { Country, State, City } from "country-state-city";

const RegisterModal = () => {
  console.log("RegisterModal");
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    country: {
      code: "",
      value: "",
    },
    region: {
      code: "",
      value: "",
    },
    city: {
      code: "",
      value: "",
    },
  });

  const countries = Country.getAllCountries();

  const states = useMemo(() => {
    console.log("MEMEK");
    return State.getStatesOfCountry(userData.country.code);
  }, [userData.country]);

  const cities = useMemo(() => {
    return City.getCitiesOfState(userData.country.code, userData.region.code);
  }, [userData.country, userData.region]);

  const onSubmit = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Titipin" subtitle="Create an account!" />
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
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        value={userData.password}
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
      <div className="flex gap-2">
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
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <div
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>
          Already have an account?
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Log in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
