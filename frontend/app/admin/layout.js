import axios from "axios";
import { Inter } from "next/font/google";
import { getUser } from "../helpers/auth";
import AdminProvider from "./AdminProvider";
import Sidebar from "@/components/Sidebar";

export const metadata = {
    title: {
      default: 'Admin',
      template: '%s - Admin'
    },
    description: "Mazzanti",
  };
export default function AdminLayout({ children }) {
    return (
        <AdminProvider>
            <div className="flex-1 flex">
                <Sidebar />
                <div className="flex-1 py-2 px-4">
                    {children}
                </div>
            </div>
        </AdminProvider>
    );
}
