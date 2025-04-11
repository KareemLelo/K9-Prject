import React from "react";
import { Search } from "lucide-react";
import { Button } from "../../components/Button";

interface Vet {
  id: number;
  name: string;
  dateRegistered: string;
  status: "Approved";
  numberOfVisits: number;
  commission: number;
}

const vets: Vet[] = [
  {
    id: 1,
    name: "Ahmad",
    dateRegistered: "23-1-2025",
    status: "Approved",
    numberOfVisits: 3,
    commission: 400,
  },
  {
    id: 2,
    name: "Yousef",
    dateRegistered: "23-1-2025",
    status: "Approved",
    numberOfVisits: 7,
    commission: 800,
  },
  {
    id: 3,
    name: "Sarah",
    dateRegistered: "23-1-2025",
    status: "Approved",
    numberOfVisits: 8,
    commission: 400,
  },
  {
    id: 4,
    name: "Wajdi",
    dateRegistered: "23-1-2025",
    status: "Approved",
    numberOfVisits: 0,
    commission: 0,
  },
  {
    id: 5,
    name: "Sameer",
    dateRegistered: "23-1-2025",
    status: "Approved",
    numberOfVisits: 12,
    commission: 1500,
  },
  {
    id: 6,
    name: "David",
    dateRegistered: "23-1-2025",
    status: "Approved",
    numberOfVisits: 3,
    commission: 300,
  },
  {
    id: 7,
    name: "Rami",
    dateRegistered: "23-1-2025",
    status: "Approved",
    numberOfVisits: 5,
    commission: 560,
  },
];

export const Vets: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vet list</h1>
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
                Vet Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date Registered
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
                Number of visits
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Commission
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vets.map((vet) => (
              <tr key={vet.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2">{vet.id}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    {vet.name}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {vet.dateRegistered}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {vet.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {vet.numberOfVisits}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-secondary">
                  {vet.commission}
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
