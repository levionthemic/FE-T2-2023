import "./App.css";

import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import MainContent from "./components/MainContent";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content text="Content 1" number={10} active={true}/>
        <MainContent />
        <Content text="Content 2" number={5} active={false}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
