import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteMemberModal from './components/Modals/InviteMemberModal';
import AppProvider from './context/AppProvider';
import AuthProvider from './context/AuthProvider';
function App() {
  return (
  <BrowserRouter>
    <AuthProvider>
      <AppProvider>
      <Switch>
        <Route component = {Login} path = '/login'/>
        <Route component = {ChatRoom} path = '/'/>
      </Switch>
      <AddRoomModal/>
      <InviteMemberModal/>
      </AppProvider>
    </AuthProvider>      
  </BrowserRouter>
  )
  };
export default App;
