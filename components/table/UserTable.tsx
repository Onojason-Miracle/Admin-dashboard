"use client";

import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

const dummyUsers: User[] = Array.from({ length: 32 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@mail.com`,
  role: i % 2 === 0 ? "Admin" : "Customer",
  status: i % 3 === 0 ? "Inactive" : "Active",
}));

const USERS_PER_PAGE = 10;

const UserTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;
  const paginatedUsers = dummyUsers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(dummyUsers.length / USERS_PER_PAGE);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-6 w-full lg:w-[90%] lg:mx-auto">
      <h2 className="text-lg font-semibold text-black mb-4">Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm table">
          <thead className="bg-gray-100 text-center text-black">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 text-center "
              >
                <td className="px-4 py-2 text-black ">{user.name}</td>
                <td className="px-4 py-2 text-black ">{user.email}</td>
                <td className="px-4 py-2 text-black ">{user.role}</td>
                <td className="px-4 py-2 text-black ">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-7 w-[85%] mx-auto">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-black text-white cursor-pointer rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-black">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2  bg-black cursor-pointer text-white rounded disabled:opacity-50"
        >
          Next
        </button>
        {/* 
<button
  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
  disabled={currentPage === 1}
  className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
>
  Previous
</button>
<span className="text-gray-600">
  Page {currentPage} of {totalPages}
</span>
<button
  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
  disabled={currentPage === totalPages}
  className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
>
  Next
</button> */}
      </div>
    </div>
  );
};

export default UserTable;
