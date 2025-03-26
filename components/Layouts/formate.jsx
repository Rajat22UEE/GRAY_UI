// import Footer from "./Footer";
// import Navbar from "./Navbar";
import Sidebar from "./sidebar";

export default function Formate({ children }) {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex flex-col min-h-screen mt-16">
        <div className="flex flex-1 p-4 gap-4">
          {/* Sidebar - Fixed */}
          <div className="pl-28 sticky ">
          <Sidebar />
          </div>

          {/* Main Content - Dynamic */}
          <div className="flex-1 mr-36 rounded-lg border border-dotted border-gray-400 dark:border-gray-600 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
