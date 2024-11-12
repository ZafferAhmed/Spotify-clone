const Sidebar = () => {
  return (
    <section className="flex flex-col justify-center text-gray-300">
      <div className="flex items-center justify-between w-full p-5">
        <div className="flex items-center justify-around w-32 text-divider-custom hover:text-white cursor-pointer">
          <button type="button">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-6"
              fill="currentColor"
            >
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
            </svg>
          </button>
          <span>Your Library</span>
        </div>
        <div className="flex items-center justify-center hover:text-white hover:rounded-full hover:bg-gray-custom w-8 h-8">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full h-56 overflow-x-hidden overflow-y-auto px-2 py-4">
        <div className="flex w-full rounded-lg bg-icon-custom px-5 py-3">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-gray-200">
              Create your first playlist
            </span>
            <span className="text-sm text-gray-300">
              It&apos;s easy, we will help you
            </span>
            <div className="bg-gray-300 text-black px-4 py-2 w-fit cursor-pointer rounded-3xl">
              <button className="font-bold text-md">Create playlist</button>
            </div>
          </div>
        </div>
        <div className="flex w-full m-2 rounded-lg bg-icon-custom px-5 py-3">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-gray-200">
              Let&apos;s find some podcasts to follow
            </span>
            <span className="text-sm text-gray-300">
              We&apos;ll keep you updated on new episodes
            </span>
            <div className="bg-gray-300 text-black px-4 py-2 w-fit cursor-pointer rounded-3xl">
              <button className="font-bold text-md">Browse podcasts</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-64 m-auto my-8 text-xs text-gray-400 font-extralight gap-4">
        <div className="flex gap-5">
          <span className="cursor-pointer hover:text-white">Legal</span>
          <span className="cursor-pointer hover:text-white">
            Safety & Privacy Center
          </span>
        </div>
        <div className="flex gap-5">
          <span className="cursor-pointer hover:text-white">
            Private Policy
          </span>
          <span className="cursor-pointer hover:text-white">Cookies</span>
          <span className="cursor-pointer hover:text-white">About Ads</span>
        </div>
        <div className="flex gap-5">
          <span className="cursor-pointer hover:text-white">Accessibility</span>
        </div>
        <div className="flex gap-5">
          <span className="cursor-pointer text-white text-md hover:underline">
            Cookies
          </span>
        </div>
      </div>
      <div className="flex w-64 m-auto ">
        <button className="flex border items-center justify-between w-24 text-white rounded-3xl p-2 hover:border-2 hover:p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <span className="text-sm text-white">English</span>
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
