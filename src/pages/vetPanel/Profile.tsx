import React from "react";
import { Button } from "../../components/Button";
import { User } from "lucide-react";

export const Profile: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit profile</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Profile photo
          </h2>
          <div className="flex items-center space-x-6">
            <div className="h-24 w-24 bg-secondary-light rounded-full flex items-center justify-center">
              <User size={48} className="text-white" />
            </div>
            <div>
              <div className="space-x-4">
                <Button variant="secondary" size="sm">
                  Choose image
                </Button>
                <button className="text-gray-600 text-sm hover:text-gray-800">
                  Remove
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Your photo should be in PNG or JPG format
              </p>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Your email"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Your address"
          />
        </div>

        <div>
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            About me
          </label>
          <textarea
            id="about"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Tell something about yourself"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="secondary">Cancel</Button>
          <Button>Save profile</Button>
        </div>
      </div>
    </div>
  );
};
