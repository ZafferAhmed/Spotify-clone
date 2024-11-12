import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

const App = () => {
  return (
    <section className="w-full h-screen bg-black flex flex-col">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex w-full flex-1 p-2 gap-2 overflow-hidden">
        <div className="w-3/12 h-full bg-body-custom rounded-lg">
          <Sidebar />
        </div>
        <div className="w-9/12 h-full bg-body-custom rounded-lg overflow-y-auto relative">
          <Body />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </section>
  );
};

export default App;
