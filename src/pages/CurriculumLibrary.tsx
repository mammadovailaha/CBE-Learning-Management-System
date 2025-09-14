import CreateComponent from "../components/CreateComponent";
import Sidebar from "../components/Sidebar";
import Header from "../layout/Header";

const CurriculumLibrary = () => {
  return (
    <div className="w-full h-full flex  ">
      <div className="w-[23%]">
        <Sidebar />
      </div>
      <div className="w-[75%]">
        <Header />
        <CreateComponent/>
      </div>
    </div>
  );
};

export default CurriculumLibrary;
