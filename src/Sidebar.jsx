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
      <div className="flex flex-col items-center justify-center w-full h-52 overflow-y-auto overflow-x-hidden p-2">
        <div className="flex m-2 w-full h-80 rounded-lg bg-icon-custom leading-loose">
          <div className="flex flex-col justify-center p-3">
            <span className="font-semibold text-gray-200">
              Create your first playlist
            </span>
            <span className="text-xs text-gray-300">
              Create your first playlist
            </span>
            <div className="bg-white text-black px-3 py-2 cursor-pointer rounded-3xl w-fit">
              <button className="font-bold hover:text-lg">login</button>
            </div>
          </div>
        </div>
        <div className="flex m-2 w-full h-80 rounded-lg bg-icon-custom">
          <div className="flex flex-col justify-center p-3">
            <span className="font-semibold text-gray-200">
              Create your first playlist
            </span>
            <span className="text-xs text-gray-300">
              Create your first playlist
            </span>
            <div className="bg-white text-black px-3 py-2 cursor-pointer rounded-3xl w-fit">
              <button className="font-bold hover:text-lg">
                Create Playlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
