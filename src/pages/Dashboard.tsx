import React from 'react';
import { Button } from '../components/Button';

interface Case {
  id: number;
  petName: string;
  date: string;
  status: 'Pending' | 'Completed';
  caseType: string[];
  commission?: string;
}

const cases: Case[] = [
  { id: 1, petName: 'Elizabeth Lopez', date: '23-1-2025', status: 'Pending', caseType: ['Bone break'] },
  { id: 2, petName: 'Matthew Martinez', date: '23-1-2025', status: 'Completed', caseType: ['MRI'], commission: '100 JOD' },
  { id: 3, petName: 'Elizabeth Hall', date: '23-1-2025', status: 'Pending', caseType: ['Blood test'] },
  { id: 4, petName: 'Maria White', date: '23-1-2025', status: 'Completed', caseType: ['bone'], commission: '34 JOD' },
  { id: 5, petName: 'Elizabeth Watson', date: '23-1-2025', status: 'Completed', caseType: ['MRI'], commission: '23 JOD' },
  { id: 6, petName: 'Elizabeth Allen', date: '23-1-2025', status: 'Completed', caseType: ['X ray', 'Blood'], commission: '56 JOD' },
  { id: 7, petName: 'Caleb Jones', date: '23-1-2025', status: 'Completed', caseType: ['Bone'], commission: '78 JOD' },
];

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pet Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cases.map((caseItem) => (
              <tr key={caseItem.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2">{caseItem.id}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{caseItem.petName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{caseItem.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    caseItem.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {caseItem.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-1">
                    {caseItem.caseType.map((type, index) => (
                      <span key={index} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                        {type}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{caseItem.commission || '--'}</td>
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