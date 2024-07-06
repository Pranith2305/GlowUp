import React from "react";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card"; // Import for potential future use
import { Card } from "../components/ui/card-hover-effect"; // Import for potential future use

function Profile() {
  return (
    <div className="overflow-hidden h-screen flex-col items-center justify-center pt-5">
      <img
        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        className="mx-auto mb-4 rounded-full h-40 w-40 object-cover"
      />
      <div className="text-sm leading-6 flex flex-col items-center justify-center"> {/* Center name and age with flexbox */}
        <p className="text-gray-600">Name : </p>
        <p className="text-gray-600">Age : </p>
      </div>
      <div className="flex flex-row gap-5 text-black items-center justify-center">
        <div className="w-full max-w-sm bg-gray-50 rounded-xl p-6 shadow-md">
          <p>about</p>
        </div>
        <div className="w-full max-w-sm bg-gray-50 rounded-xl p-6 shadow-md">
          <p>saved</p>
        </div>
        <div className="w-full max-w-sm bg-gray-50 rounded-xl p-6 shadow-md">
          <p>settings</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
