import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

const App = () => {
  return (
    <section className="w-full h-fit bg-black">
      <div className="">
        <Header />
      </div>
      <div className="flex w-full h-fit p-2 gap-2">
        <div className="w-3/12 h-screen bg-body-custom rounded-lg">
          <Sidebar />
        </div>
        <div className="w-9/12 h-screen bg-body-custom rounded-lg">
          <Body />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default App;
