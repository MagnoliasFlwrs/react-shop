
import './App.css';
import Shop from './components/Shop';
import { ContextProvider } from './context';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <ContextProvider>
          <Shop/>
      </ContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
