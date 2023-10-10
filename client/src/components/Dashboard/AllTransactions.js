import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditTransactionModal from "./EditTransaction";
import Swal from 'sweetalert2';

const AllTransactions = ({ account, accountID }) => {
  // State to manage the visibility of the edit transaction modal
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  // State to store the selected transaction to edit
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Function to open the edit transaction modal
  const openEditModal = (transaction) => {
    setSelectedTransaction(transaction);
    setEditModalIsOpen(true);
  };

  // Function to close the edit transaction modal
  const closeEditModal = () => {
    setSelectedTransaction(null);
    setEditModalIsOpen(false);
  };

  // Function to update a transaction (implement your logic)
  const updateTransaction = async (updatedTransaction) => {
    try {
      // Send an update request to the API with updatedTransaction data
      await axios.put(
        `http://localhost:9000/api/v1/transactions/${updatedTransaction._id}`,
        updatedTransaction
      );

      // Close the edit modal
      closeEditModal();
      // Optionally, you can update your component's state or perform any other actions
      // after the transaction has been updated successfully.
    } catch (error) {
      // Handle any errors here, e.g., show an error message to the user.
      console.error("Error updating transaction:", error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      // Send a DELETE request to the API
      await axios.delete(`http://localhost:9000/api/v1/transactions/${id}`);

      Swal.fire({
        icon: 'warning',
        title: 'Transaction Deleted',
        timer: 9000,

      })
      window.location.reload();




      // Optionally, you can update your component's state or perform any other actions
      // after the transaction has been deleted successfully.
    } catch (error) {
      // Handle any errors here, e.g., show an error message to the user.
      console.error("Error deleting transaction:", error);
    }
  };
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              All Transactions
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              All transactions including expenses and income for this account
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Link
              to={`/add-transaction/${accountID}/`}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add New Transaction
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Note
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                      >
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {/* loop */}
                    {account?.transactions?.map((transaction) => {
                      return (
                        <tr
                          key={transaction?.email}
                          className={transaction?.color}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  {transaction?.title}
                                </div>
                                {/* <div className="text-gray-500">Emma</div> */}
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-gray-900">
                              {transaction?.transactionType}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              ₹ {transaction?.amount}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {transaction?.notes}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                            <span
                              onClick={() => openEditModal(transaction)}
                              className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                            >
                              Edit
                              <span className="sr-only">
                                , {transaction?.title}
                              </span>
                            </span>
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                            <span
                              onClick={() =>
                                deleteTransaction(transaction?._id)

                              }
                              className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                            >
                              Delete
                              <span className="sr-only">
                                , {transaction?.title}
                              </span>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                    {/* Render the EditTransactionModal */}
                    <EditTransactionModal
                      isOpen={editModalIsOpen}
                      closeModal={closeEditModal}
                      transaction={selectedTransaction}
                      updateTransaction={updateTransaction}
                    />
                    {/* end */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTransactions;
