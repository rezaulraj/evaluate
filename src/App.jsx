import Footer from "./component/Footer";
import Header from "./component/Header";
import "./App.css";
import Vission from "./vission/Vission";
import Message from "./message/Message";
import Services from "./service/Services";
import Reason from "./reason/Reason";
import SuccessStory from "./successstory/SuccessStory";
function App() {
  return (
    <div className="bg-white">
      <Header />
      <Vission />
      <Message />
      <Services />
      <Reason />
      <SuccessStory />
      <Footer />
    </div>
  );
}

export default App;
