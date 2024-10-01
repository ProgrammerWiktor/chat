import "./App.css";
import { ChatProvider } from "./ChatContext";
import List from "./components/List/List";
import Main from "./components/Main/Main";

function App() {
  return (
    <ChatProvider>
      <div className="container">
        <div className="app">
          <List />
          <Main />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
