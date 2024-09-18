"use client"

import { useState } from "react";

export default function Purchase_Order() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.target);
    formData.entries().forEach(m => {
      console.log(m);
    })
  }

  return (
    <>
      <h1 className="mb-4 p-4 font-extrabold text-2xl text-center rounded bg-zinc-900/80">Purchase Order</h1>

      <form className="p-6 flex flex-col font-bold rounded bg-zinc-900/80" onSubmit={onSubmit}>
        <div className="mb-4 flex flex-col md:flex-row gap-y-2 gap-x-4">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="name">Vendor Name:</label>
            <input className="px-3 py-2 rounded font-medium bg-zinc-700/50" type="text" name="name" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="date">Date:</label>
            <input className="px-3 py-2 rounded font-medium bg-zinc-700/50" type="datetime-local" name="date" />
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-y-2">
          <label htmlFor="item">Item:</label>
          <input className="w-full px-3 py-2 rounded font-medium bg-zinc-700/50" type="text" name="item" />
        </div>

        <button className="px-4 py-3 rounded bg-blue-600/90 hover:bg-blue-600" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <div className="mt-4 p-4 font-bold text-red-500/90 rounded bg-red-200">Error: {error}</div>}

      <div className="mt-4 p-6 flex flex-col items-end font-bold rounded bg-zinc-900/80">
        <div className="max-w-lg w-full p-1 pr-[0.2rem] float-right rounded-t-md border-4 border-b-0 border-zinc-600">
          <div className="px-3 py-2 bg-zinc-700/50">
            Purchase Total: <span className="float-right">Rp. 100.000,00</span>
          </div>
        </div>
        
        <div className="w-full overflow-x-auto">
          <table className="table rounded-md rounded-t-none sm:rounded-tr-none border-4 border-spacing-1 border-separate border-zinc-600">
            <thead className="table-header-group bg-zinc-700/50">
              <tr className="table-row">
                <th className="table-cell py-2" scope="col">Item</th>
                <th className="table-cell py-2" scope="col">Description</th>
                <th className="table-cell py-2" scope="col">Amount</th>
                <th className="table-cell py-2" scope="col">Qty</th>
                <th className="table-cell py-2" scope="col">Total</th>
              </tr>
            </thead>
            <tbody className="table-row-group">
              <tr className="table-row">
                <th className="table-cell p-2" scope="row">Item Name 1</th>
                <td className="table-cell p-2">Item Description 1</td>
                <td className="table-cell p-2 text-center">22</td>
                <td className="table-cell p-2 text-center">2</td>
                <td className="table-cell p-2 text-center">44</td>
              </tr>
              <tr className="table-row">
                <th className="table-cell p-2" scope="row">Item Name 2</th>
                <td className="table-cell p-2">Item Description 2</td>
                <td className="table-cell p-2 text-center">45</td>
                <td className="table-cell p-2 text-center">3</td>
                <td className="table-cell p-2 text-center">135</td>
              </tr>
              <tr className="table-row">
                <th className="table-cell p-2" scope="row">Item Name 3</th>
                <td className="table-cell p-2">Item Description 3</td>
                <td className="table-cell p-2 text-center">29</td>
                <td className="table-cell p-2 text-center">1</td>
                <td className="table-cell p-2 text-center">29</td>
              </tr>
              <tr className="table-row">
                <th className="table-cell p-2" scope="row">Item Name 4</th>
                <td className="table-cell p-2">Item Description 4</td>
                <td className="table-cell p-2 text-center">36</td>
                <td className="table-cell p-2 text-center">6</td>
                <td className="table-cell p-2 text-center">216</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}