import './App.css';
import Header from "./Components/Header";
import ContentContainer from "./containers/ContentContainer";
import SidebarContainer from "./containers/SidebarContainer";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="spaceX">
      {/* header */}
      <Header />
      <div className="workspace">
        {/* Sidebar */}
        <SidebarContainer />
        <ContentContainer />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
