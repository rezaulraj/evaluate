import Footer from "./component/Footer";
import Header from "./component/Header";
import "./App.css";
import Vission from "./vission/Vission";
import Message from "./message/Message";
import Services from "./service/Services";
function App() {
  return (
    <div className="bg-white">
      <Header />
      <Vission />
      <Message />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
