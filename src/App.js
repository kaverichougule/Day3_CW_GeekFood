import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Testimonials from './Components/Testimonials';
import GetInTouch from './Components/GetInTouch';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <GetInTouch />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
