import "./App.css";
import "./responsive.css"
import Footer from "./app/footer";
import store from "./store";
import { Provider } from "react-redux";
import AppRouter from "./routes/appRouter";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <Footer />
    </Provider>
  );
}

export default App;
