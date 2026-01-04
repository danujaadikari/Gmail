import { useState } from 'react';

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar = ({ onMenuClick }: TopBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="h-16 bg-white border-b border-google-border flex items-center px-4 gap-4">
      {/* Hamburger Menu */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-google-gray" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </button>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-google-blue rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        <span className="text-xl text-gray-700 font-normal hidden sm:inline">Gmail</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-google-gray" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search mail"
            className="w-full pl-12 pr-4 py-2.5 bg-google-light-gray rounded-full focus:bg-white focus:shadow-md focus:outline-none transition-all text-sm"
          />
        </div>
      </div>

      {/* Profile Avatar */}
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 rounded-full bg-google-blue text-white flex items-center justify-center font-medium hover:shadow-md transition-shadow">
          U
        </button>
      </div>
    </header>
  );
};

export default TopBar;
