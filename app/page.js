"use client"

import { useState } from "react";

export default function Home() {
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
      <h1 className="mb-4 font-extrabold text-2xl text-center">Income & Expenses</h1>

      <form className="p-6 flex flex-col font-bold rounded bg-zinc-900/50" onSubmit={onSubmit}>
        <div className="mb-4 flex gap-y-2 gap-x-4">
          <div className="w-full grid gap-2">
            <label htmlFor="date">Date:</label>
            <input className="px-3 py-2 rounded font-medium bg-zinc-700/50" type="datetime-local" name="date" />
          </div>
          <div className="w-full grid gap-2">
            <label htmlFor="amount">Amount:</label>
            <input className="px-3 py-2 rounded font-medium bg-zinc-700/50" type="number" name="amount" />
          </div>
        </div>

        <div className="mb-4 flex gap-y-2 gap-x-4">
          <div className="w-full grid gap-y-2">
            <label htmlFor="account">Account:</label>
            <input className="px-3 py-2 rounded font-medium bg-zinc-700/50" type="text" name="account" />
          </div>
          <div className="w-full grid gap-y-2">
            <label htmlFor="category">Category:</label>
            <input className="px-3 py-2 rounded font-medium bg-zinc-700/50" type="text" name="category" />
          </div>
        </div>

        <div className="mb-6 grid gap-y-2">
          <label htmlFor="memo">Memo:</label>
          <textarea className="min-h-36 max-h-80 px-3 py-2 rounded font-medium bg-zinc-700/50" name="memo" />
        </div>

        <button className="px-4 py-3 rounded bg-blue-600/90 hover:bg-blue-600" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <div className="mt-4 p-4 font-bold text-red-500/90 rounded bg-red-200">Error: {error}</div>}
    </>
  );
}

// try {
//   const formData = new FormData(event.currentTarget)
//   const response = await fetch("/api/submit", {
//     method: "POST",
//     body: formData,
//   })

//   if (!response.ok) {
//     throw new Error("Failed to submit the data. Please try again.")
//   }

//   // Handle response if necessary
//   const data = await response.json()
//   // ...
// } catch (error) {
//   // Capture the error message to display to the user
//   setError(error.message)
//   console.error(error)
// } finally {
//   setIsLoading(false)
// }