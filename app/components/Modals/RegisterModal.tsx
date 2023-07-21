"use client";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import Modal from "./Modal";
import Input from "../Inputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import Dropdown from "../Inputs/Dropdown";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    country: "",
    region: "",
  });

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
      <Dropdown
        name="Country"
        id="country"
        value={userData.country}
        onChange={(e) => setUserData({ ...userData, country: e.target.value })}
        option={["Indonesia", "Singapore", "Malaysia", "Japan"]}
      />
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
