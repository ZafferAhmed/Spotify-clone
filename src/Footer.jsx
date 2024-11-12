const Footer = () => {
  return (
    <section className="flex items-start justify-between w-full bg-custom-gradient h-fit p-2 text-white">
      <div className="w-9/10 flex flex-col">
        <span>Preview of Spotify</span>
        <span>
          Signup to get unlimited songs and prodcasts with occtional ads. No
          credit card needed
        </span>
      </div>
      <div className="flex items-center justify-center border py-2 px-8 rounded-3xl bg-white text-black font-bold">
        <button>Sign up free</button>
      </div>
    </section>
  );
};

export default Footer;
