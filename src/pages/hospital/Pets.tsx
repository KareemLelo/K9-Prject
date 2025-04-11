import React from "react";
import { Search } from "lucide-react";
import { Button } from "../../components/Button";

interface Pet {
  id: number;
  petName: string;
  date: string;
  status: "Pending" | "Completed" | "In hospital";
  caseType: string[];
  vet: string;
}

const pets: Pet[] = [
  {
    id: 1,
    petName: "Lucky",
    date: "23-1-2025",
    status: "Pending",
    caseType: ["Bone break"],
    vet: "Ahmad",
  },
  {
    id: 2,
    petName: "Sasha",
    date: "23-1-2025",
    status: "Completed",
    caseType: ["MRI"],
    vet: "Ahmad",
  },
  {
    id: 3,
    petName: "luca",
    date: "23-1-2025",
    status: "In hospital",
    caseType: ["Blood test"],
    vet: "Sarah",
  },
  {
    id: 4,
    petName: "rocky",
    date: "23-1-2025",
    status: "Completed",
    caseType: ["bone"],
    vet: "Yousef",
  },
  {
    id: 5,
    petName: "stone",
    date: "23-1-2025",
    status: "Completed",
    caseType: ["MRI"],
    vet: "Samer",
  },
  {
    id: 6,
    petName: "Kookoo",
    date: "23-1-2025",
    status: "Completed",
    caseType: ["X ray", "Blood"],
    vet: "David",
  },
  {
    id: 7,
    petName: "Hazel",
    date: "23-1-2025",
    status: "Completed",
    caseType: ["Bone"],
    vet: "john",
  },
];

export const Pets: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pet list</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Pet Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Case
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Vet
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pets.map((pet) => (
              <tr key={pet.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2">{pet.id}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{pet.petName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pet.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      pet.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : pet.status === "In hospital"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {pet.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-1">
                    {pet.caseType.map((type, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-sm rounded-md bg-secondary text-white">
                    {pet.vet}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="secondary">Export Excel</Button>
      </div>
    </div>
  );
};
