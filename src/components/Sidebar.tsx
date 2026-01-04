import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState('inbox');

  const navItems = [
    { id: 'inbox', label: 'Inbox', icon: 'inbox', count: 12 },
    { id: 'starred', label: 'Starred', icon: 'star' },
    { id: 'sent', label: 'Sent', icon: 'send' },
    { id: 'drafts', label: 'Drafts', icon: 'draft', count: 3 },
    { id: 'trash', label: 'Trash', icon: 'delete' },
  ];

  const renderIcon = (icon: string) => {
    const icons: Record<string, JSX.Element> = {
      inbox: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.44 2s2.75-.81 3.44-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z"/>
        </svg>
      ),
      star: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ),
      send: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      ),
      draft: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/>
        </svg>
      ),
      delete: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        </svg>
      ),
    };
    return icons[icon] || null;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-white border-r border-google-border
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <nav className="pt-4 pb-4 h-full overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item.id);
                onClose();
              }}
              className={`
                w-full flex items-center gap-4 px-6 py-2 text-sm
                transition-colors relative
                ${
                  activeItem === item.id
                    ? 'bg-google-light-gray text-google-blue font-medium'
                    : 'text-google-gray hover:bg-gray-50'
                }
              `}
            >
              {/* Active indicator */}
              {activeItem === item.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-google-blue rounded-r" />
              )}
              
              <span className={activeItem === item.id ? 'text-google-blue' : 'text-google-gray'}>
                {renderIcon(item.icon)}
              </span>
              
              <span className="flex-1 text-left">{item.label}</span>
              
              {item.count !== undefined && (
                <span className="text-xs text-google-gray">{item.count}</span>
              )}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
