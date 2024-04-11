import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import FoodItemSection from "./Components/FoodItemSection";
import { DataProvider } from "./Context/Context";

function App() {
  return (
    <div>
      <DataProvider>
        <Header />
        <FoodItemSection />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
