import React from "react";
import { Users, PawPrint, Stethoscope, Bell, Search } from "lucide-react";
import { Button } from "../../components/Button";

interface Case {
  id: number;
  petName: string;
  date: string;
  status: "Pending" | "Completed";
  caseType: string[];
  commission?: string;
}

const cases: Case[] = [
  {
    id: 1,
    petName: "Elizabeth Lopez",
    date: "23-1-2025",
    status: "Pending",
    caseType: ["Bone break"],
  },
  {
    id: 2,
    petName: "Matthew Martinez",
    date: "23-1-2025",
    status: "Completed",
    caseType: ["MRI"],
    commission: "100 JOD",
  },
  {
    id: 3,
    petName: "Elizabeth Hall",
    date: "23-1-2025",
    status: "Pending",
    caseType: ["Blood test"],
  },
  {
    id: 4,
    petName: "Maria White",
    date: "23-1-2025",
    status: "Completed",
    caseType: ["bone"],
    commission: "34 JOD",
  },
  {
    id: 5,
    petName: "Elizabeth Watson",
    date: "23-1-2025",
    status: "Completed",
    caseType: ["MRI"],
    commission: "23 JOD",
  },
  {
    id: 6,
    petName: "Elizabeth Allen",
    date: "23-1-2025",
    status: "Completed",
    caseType: ["X ray", "Blood"],
    commission: "56 JOD",
  },
  {
    id: 7,
    petName: "Caleb Jones",
    date: "23-1-2025",
    status: "Completed",
    caseType: ["Bone"],
    commission: "78 JOD",
  },
];

export const Dashboard: React.FC = () => {
  const stats = [
    {
      name: "Total Pets",
      value: "156",
      icon: <PawPrint className="w-6 h-6" />,
      change: "+12%",
    },
    {
      name: "Active Vets",
      value: "24",
      icon: <Users className="w-6 h-6" />,
      change: "+4%",
    },
    {
      name: "Ongoing Cases",
      value: "38",
      icon: <Stethoscope className="w-6 h-6" />,
      change: "+7%",
    },
    {
      name: "New Notifications",
      value: "12",
      icon: <Bell className="w-6 h-6" />,
      change: "+3",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search cases..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent bg-white"
            />
          </div>
          <Button variant="secondary">Export Excel</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 flex items-start justify-between"
          >
            <div>
              <p className="text-sm text-gray-600">{stat.name}</p>
              <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
              <p className="mt-2 text-sm text-green-600">{stat.change}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* Recent Cases Table */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Cases</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      #
                    </div>
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
                    Commission
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cases.map((caseItem) => (
                  <tr key={caseItem.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                        <span>{caseItem.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {caseItem.petName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {caseItem.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          caseItem.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {caseItem.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-1">
                        {caseItem.caseType.map((type, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {caseItem.commission || "--"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
