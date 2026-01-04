import { useState } from 'react';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import MailList from '../components/MailList';
import FloatingActionButton from '../components/FloatingActionButton';
import { mockEmails } from '../data/mockData';

const Inbox = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <TopBar onMenuClick={toggleSidebar} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        <main className="flex-1 flex flex-col overflow-hidden">
          <MailList emails={mockEmails} />
        </main>
      </div>

      <FloatingActionButton />
    </div>
  );
};

export default Inbox;
