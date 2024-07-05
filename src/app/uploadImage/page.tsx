"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/app/utils/cn";

export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedImage) {
      console.log("Selected image:", selectedImage);
    } else {
      console.error("Please select an image first.");
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setSelectedImage(file);

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          setImageUrl(reader.result as string);
        }
      };
    }
  };

  return (
    <div className="max-w-md mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black text-white dark:bg-white border border-zinc-500">
      <h2 className="font-bold text-4xl text-white dark:text-neutral-200 text-center">
        Glow Up
      </h2>
      <form
        className="my-8 "
        onSubmit={handleSubmit}
        style={{ padding: "1rem" }}
      >
        <LabelInputContainer>
          <Label htmlFor="image" className="text-white">
            Image
          </Label>
          <Input id="image" type="file" onChange={handleImageChange} />
        </LabelInputContainer>
       <div className="pt-10"> <button
          className="bg-gradient-to-br relative group/btn bg-zinc-900 hover:bg-zinc-600 w-full text-white rounded-md h-10 font-medium ]"
          type="submit"
        >
          Submit &rarr;
        </button></div>
      </form>
      {imageUrl && <img src={imageUrl} alt="Selected Image" />}
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
