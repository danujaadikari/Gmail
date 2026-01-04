// Email type definition
export interface Email {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  timestamp: string;
  isUnread: boolean;
  isStarred: boolean;
}

// Sidebar navigation item
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  count?: number;
}
