import Footer from "./components/foooter";
import Header from "./components/header";
import News from "./components/news";
import Box from "./components/box/box";
import Showcase from "./components/showcase/showcase";
import Customer from "./components/customer/customer";
import Info from "./components/info/info";

const App = () => {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Showcase />
      </div>
      <div>
        <News />
      </div>
      <div>
        <Box />
      </div>
      <div><Customer/></div>
      <div><Info/></div>
      <div><Footer/></div>
     
    </div>
  );
};

// import exporte
export default App;
