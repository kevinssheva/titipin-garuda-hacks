"use client";

import { Input } from "postcss";
import Dropzone from "./components/Dropzone";
import EditForm from "./components/EditForm";

const ProfileEdit = () => {
  const onFileUpload = (file: File) => {
    console.log(file);
  };

  return (
    <div className="my-28 container max-w-[60rem] mx-auto px-10">
      <h1 className="text-3xl font-semibold text-mariner-600 pl-6">
        Edit Profile
      </h1>
      <div className="bg-white shadow-xl px-7 py-7 rounded-lg my-4">
        <EditForm
          profilePicture="https://i.pravatar.cc/300"
          fullName="Kevin Sebastan"
          email="kevinssheva@gmail.com"
          phoneNumber="08123456789"
          country="Indonesia"
          region="Jawa Tengah"
          city="Semarang"
        />
      </div>
    </div>
  );
};

export default ProfileEdit;
