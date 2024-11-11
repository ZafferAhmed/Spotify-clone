const Header = () => {
  return (
    <div className="flex items-center justify-between text-white p-3 h-16">
      <div className="ml-2 w-3/12">
        <img
          className="h-9 rounded-full cursor-pointer"
          src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-emblem.jpg"
        />
      </div>
      <div className="flex items-center w-5/12">
        <div className="flex items-center justify-between bg-gray-custom rounded-full p-2 ml-12">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-6 text-gray-300 hover:size-7"
            fill="currentColor"
          >
            <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
          </svg>
        </div>
        <div className="flex items-center justify-between relative ml-2 w-11/12">
          <input className="w-full h-12 pl-10 bg-gray-custom rounded-3xl" />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 hover:text-gray-50"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer gap-3">
            <div className="w-auto h-8 border border-divider-custom"></div>
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-6"
              fill="#FFFFFF"
            >
              <path d="M4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4H4V2zM1.513 9.37A1 1 0 0 1 2.291 9H21.71a1 1 0 0 1 .978 1.208l-2.17 10.208A2 2 0 0 1 18.562 22H5.438a2 2 0 0 1-1.956-1.584l-2.17-10.208a1 1 0 0 1 .201-.837zM12 17.834c1.933 0 3.5-1.044 3.5-2.333 0-1.289-1.567-2.333-3.5-2.333S8.5 14.21 8.5 15.5c0 1.289 1.567 2.333 3.5 2.333z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end w-4/12 gap-5 font-bold">
        <div className="p-3">
          <button className="font-bold text-divider-custom hover:text-white hover:text-lg">
            Sign Up
          </button>
        </div>
        <div
          className="bg-white text-black py-2 px-8 cursor-pointer rounded-3xl hover:bg-gray-100 hover:text-lg 
        hover:rounded-full"
        >
          <button className="font-bold hover:text-lg">login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
