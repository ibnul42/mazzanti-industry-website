import axios from "axios";
import { Inter } from "next/font/google";
import { getUser } from "../helpers/auth";
import AdminProvider from "./AdminProvider";
import Sidebar from "@/components/Sidebar";
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

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
            <div className="flex-1 flex text-black">
                <Sidebar />
                <div className="flex-1 py-2 px-4">
                    {children}
                </div>
            </div>
            <ToastContainer
                position='top-center'
            />
        </AdminProvider>
    );
}
