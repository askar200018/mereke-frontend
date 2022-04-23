import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
