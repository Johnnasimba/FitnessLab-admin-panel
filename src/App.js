import './App.css';

import Header from './components/header/header.component';
import ClientsList from './components/clients-list/client-list.component';
import ClientProfile from './components/client-profile/client-profile.component';

function App() {
  return (
    <div className="admin-panel-client-page">
      <Header />
      <div className="client-container">
            <ClientsList />
            <ClientProfile />
      </div>
    </div>
  );
}

export default App;