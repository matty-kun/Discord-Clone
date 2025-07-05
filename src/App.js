import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import ChannelBar from './components/ChannelBar';

function App() {
  return (
    <div className="flex">
      <ChannelBar />
      <SideBar/>
    </div>
  );
}

export default App;
