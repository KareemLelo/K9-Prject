import React from "react";
import { Bell } from "lucide-react";
import { Button } from "../../components/Button";

interface Notification {
  id: number;
  message: string;
  type: "New Case Submitted";
}

const notifications: Notification[] = [
  { id: 1, message: "New Case Submitted", type: "New Case Submitted" },
  { id: 2, message: "New Case Submitted", type: "New Case Submitted" },
  { id: 3, message: "New Case Submitted", type: "New Case Submitted" },
  { id: 4, message: "New Case Submitted", type: "New Case Submitted" },
];

export const Notifications: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-secondary/10 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <Bell className="text-secondary" />
              <span>{notification.message}</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="secondary" size="sm">
                View Details
              </Button>
              <Button size="sm">Approve</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
