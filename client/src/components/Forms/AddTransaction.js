import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { transactionContext } from "../context/TransactionContext/TransactionsContext";
export default function AddTransaction() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { createTransactionAction, error } = useContext(transactionContext);
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    title: "",
    transactionType: "Income",
    amount: "",
    category: "Food",
    notes: "",
    color: "#000",
    date: "",
  });
  //handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {}

    var flag = 0;
    if (formData.title == '') {
      validationErrors.title = 'Please Add a Title'
      flag = 1;
    }
    if (!formData.amount) {
      validationErrors.amount = 'Please Add a Transaction Amount'
      flag = 1;
    } else if (formData.amount == '0') {
      validationErrors.amount = 'Transaction amount should not be less than 0'
      flag = 1;
    }

    if (formData.notes == '') {
      validationErrors.notes = 'Please add a note'
      flag = 1;
      console.log(formData.notes)
    }



    if (flag == 1) {
      setErrors(validationErrors)
    }
    else {
      createTransactionAction({ account: id, ...formData }).then(() =>
        navigate(-1)
      );
    }


  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Add Transaction
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    type="text"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Transaction Type
                </label>
                <select
                  name="transactionType"
                  value={formData.transactionType}
                  onChange={handleChange}
                  className="mt-1 block w-full border-2 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="Income">Income (+)</option>
                  <option value="Expense">Expense (-)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Amount (₹)
                </label>
                <div className="mt-1">
                  <input
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    type="number"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.amount && <span style={{ color: 'red' }}>{errors.amount}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Transaction Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full border-2 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value=" Food">Food</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Healt">Health</option>
                  <option value="Travel">Travel</option>
                  <option value="Education">Education</option>
                  <option value="Personal">Personal</option>
                  <option value="Groceries">Groceries</option>
                  <option value="Bills">Bills</option>
                  <option value="Uncategorized">Uncategorized</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <div className="mt-1">
                  <input
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    type="date"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Add Note
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="block w-full border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.notes && <span style={{ color: 'red' }}>{errors.notes}</span>}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full  justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add New Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
