export default function Navbar({ setSidebar }) {
  return (
    <>
        <button onClick={() => setSidebar((prev) => !prev)} type="button" className="p-1 rounded hover:bg-zinc-700/70">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <button type="button" className="p-2 flex items-center gap-1 font-bold rounded-md hover:bg-zinc-700/50 peer/profile">
          @User9019
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-4 mt-[1px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <div className="absolute right-4 top-[4.5rem] rounded bg-zinc-900 invisible peer-focus/profile:visible">
          <div className="min-h-16 min-w-36 p-2 flex flex-col gap-2">
            <div className="pb-2 flex flex-col gap-2 border-b border-zinc-300/50">
              <button type="button" className="px-2 py-1 font-bold text-left rounded bg-zinc-700/30 hover:bg-zinc-700/80">
                Settings
              </button>
            </div>
            <button type="button" className="px-2 py-1 font-bold text-left rounded bg-zinc-700/50 hover:bg-zinc-700/80">
              Login
            </button>
          </div>
        </div>
    </>
  )
}