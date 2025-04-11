import React, { useState } from "react";
import { supabase } from "../SupaBase/supabase.ts";
import { v4 as uuidv4 } from "uuid";

const AddCase: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [testData, setTestData] = useState({
    petId: "",
    vetId: "",
  });

  // Test function to create a pet
  const createPet = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // 1. Create a test pet
      const { data: petData, error: petError } = await supabase
        .from("pets")
        .insert([
          {
            name: "Test Pet " + Math.floor(Math.random() * 1000),
            species: "Dog",
            breed: "Mixed",
            age: 3,
          },
        ])
        .select();

      if (petError) {
        console.error("Error creating pet:", petError);
        setError(`Failed to create pet: ${petError.message}`);
        return;
      }

      console.log("Pet created:", petData);
      setSuccess(`Pet created successfully with ID: ${petData[0].pet_id}`);
      setTestData((prev) => ({ ...prev, petId: petData[0].pet_id }));
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Test function to create a veterinarian
  const createVeterinarian = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Create a test veterinarian
      const { data: vetData, error: vetError } = await supabase
        .from("veterinarians")
        .insert([
          {
            name: "Dr. Test " + Math.floor(Math.random() * 1000),
            license_number: "LIC-" + Math.floor(Math.random() * 10000),
          },
        ])
        .select();

      if (vetError) {
        console.error("Error creating veterinarian:", vetError);
        setError(`Failed to create veterinarian: ${vetError.message}`);
        return;
      }

      console.log("Veterinarian created:", vetData);
      setSuccess(
        `Veterinarian created successfully with ID: ${vetData[0].veterinarian_id}`
      );
      setTestData((prev) => ({ ...prev, vetId: vetData[0].veterinarian_id }));
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Test function to create a case
  const createCase = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    if (!testData.petId || !testData.vetId) {
      setError("You must create a pet and veterinarian first");
      setIsLoading(false);
      return;
    }

    try {
      // Create a test case using the pet and vet IDs
      const { data: caseData, error: caseError } = await supabase
        .from("cases")
        .insert([
          {
            pet_id: testData.petId,
            veterinarian_id: testData.vetId,
            status: "Open",
            medical_notes: "Test medical notes",
            billing_amount: 100,
            payment_status: "Pending",
          },
        ])
        .select();

      if (caseError) {
        console.error("Error creating case:", caseError);
        setError(`Failed to create case: ${caseError.message}`);
        return;
      }

      console.log("Case created:", caseData);
      setSuccess(`Case created successfully with ID: ${caseData[0].case_id}`);
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Test Database Connection</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <p className="mb-2">Step 1: Create a test pet</p>
          <button
            onClick={createPet}
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
          >
            {isLoading ? "Creating..." : "Create Test Pet"}
          </button>
        </div>

        <div>
          <p className="mb-2">Step 2: Create a test veterinarian</p>
          <button
            onClick={createVeterinarian}
            disabled={isLoading}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-300"
          >
            {isLoading ? "Creating..." : "Create Test Veterinarian"}
          </button>
        </div>

        <div>
          <p className="mb-2">Step 3: Create a test case</p>
          <button
            onClick={createCase}
            disabled={isLoading || !testData.petId || !testData.vetId}
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:bg-purple-300"
          >
            {isLoading ? "Creating..." : "Create Test Case"}
          </button>
        </div>

        <div className="mt-4 p-3 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Test Data:</h3>
          <p>
            <strong>Pet ID:</strong> {testData.petId || "None"}
          </p>
          <p>
            <strong>Veterinarian ID:</strong> {testData.vetId || "None"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddCase;
