import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios"; // Import Axios

const EditTransactionModal = ({ isOpen, closeModal, transaction }) => {
  const [editedTransaction, setEditedTransaction] = useState({
    ...transaction,
  });
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction({ ...editedTransaction, [name]: value });
  };
  console.log(transaction);

  const handleUpdateTransaction = () => {

    const validationErrors = {}

    var flag = 0;
    if (editedTransaction.title == '') {
      validationErrors.title = 'Title is required'
      flag = 1;
    }
    if (!editedTransaction.amount) {
      validationErrors.amount = 'Transaction amount is required'
      flag = 1;
    } else if (editedTransaction.amount == '0') {
      validationErrors.amount = 'Transaction amount should not be less than 0'
      flag = 1;
    }



    if (flag == 1) {
      setErrors(validationErrors)
    }
    else {
      // Make a PUT request to update the transaction
      axios
        .put(
          `http://localhost:9000/api/v1/transactions/${transaction._id}`,
          editedTransaction
        )
        .then((response) => {
          // Handle the success response here
          console.log("Transaction updated successfully:", response.data);
          closeModal();
          window.location.reload();
        })
        .catch((error) => {
          // Handle any errors here
          console.error("Error updating transaction:", error);
        });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Transaction Modal"
      className="modal fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded p-4 w-1/2 shadow-2xl">
        <h2 className="text-xl font-semibold mb-4">Edit Transaction</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <div className="mt-1">
              <input
                name="title"
                defaultValue={transaction?.title}
                value={editedTransaction?.title}
                onChange={handleInputChange}
                type="text"
                className="w-full border rounded p-2"
              />
              {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Transaction Type
            </label>
            <select
              name="transactionType"
              defaultValue={transaction?.transactionType}
              value={editedTransaction.transactionType}
              onChange={handleInputChange}
              className="mt-1 block w-full border rounded py-2 pl-3 pr-10 text-base"
            >
              <option value="Income">Income (+)</option>
              <option value="Expense">Expense (-)</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Amount (₹)
            </label>
            <div className="mt-1">
              <input
                name="amount"
                defaultValue={parseFloat(transaction?.amount) || ""}
                value={editedTransaction?.amount}
                onChange={handleInputChange}
                type="number"
                className="w-full border rounded p-2"
              />
              {errors.amount && <span style={{ color: 'red' }}>{errors.amount}</span>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Transaction Category
            </label>
            <select
              name="category"
              defaultValue={transaction?.category}
              value={editedTransaction?.category}
              onChange={handleInputChange}
              className="mt-1 block w-full border rounded py-2 pl-3 pr-10 text-base"
            >
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Shopping">Shopping</option>
              <option value="Utilities">Utilities</option>
              <option value="Health">Health</option>
              <option value="Travel">Travel</option>
              <option value="Education">Education</option>
              <option value="Personal">Personal</option>
              <option value="Groceries">Groceries</option>
              <option value="Bills">Bills</option>
              <option value="Uncategorized">Uncategorized</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <div className="mt-1">
              <input
                name="date"
                defaultValue={transaction?.date}
                value={editedTransaction?.date}
                onChange={handleInputChange}
                type="date"
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Add Note
            </label>
            <div className="mt-1">
              <textarea
                rows={4}
                name="notes"
                defaultValue={transaction?.notes}
                value={editedTransaction?.notes}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={handleUpdateTransaction}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded mr-2"
            >
              Update
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditTransactionModal;
