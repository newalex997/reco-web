import { Provider } from "react-redux";
import { AppLayout } from "./features/app-layout";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}

export default App;
