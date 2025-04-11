import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../../components/Button";

export const NewCase: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">New Case</h1>
      <div className="space-y-6">
        <div>
          <label
            htmlFor="petName"
            className="block text-sm font-medium text-gray-700"
          >
            Pet Name
          </label>
          <input
            type="text"
            id="petName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Pet name"
          />
        </div>

        <div>
          <label
            htmlFor="petOwner"
            className="block text-sm font-medium text-gray-700"
          >
            Pet Owner
          </label>
          <input
            type="text"
            id="petOwner"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Pet owner"
          />
        </div>

        <div>
          <label
            htmlFor="microchip"
            className="block text-sm font-medium text-gray-700"
          >
            Pet Micro Chip (if applicable)
          </label>
          <input
            type="text"
            id="microchip"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Pet micro chip number"
          />
        </div>

        <div>
          <label
            htmlFor="caseDetails"
            className="block text-sm font-medium text-gray-700"
          >
            Case Details:
          </label>
          <textarea
            id="caseDetails"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Describe the case ..."
          />
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <div {...getRootProps()} className="text-center">
            <input {...getInputProps()} />
            <p className="text-gray-600">Drop files here</p>
            <p className="text-sm text-gray-500">Supported format: PNG, JPG</p>
            <p className="text-gray-500 mt-2">OR</p>
            <button className="mt-2 text-primary hover:text-primary-dark">
              Browse files
            </button>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="secondary">Cancel</Button>
          <Button>Submit Case</Button>
        </div>
      </div>
    </div>
  );
};
