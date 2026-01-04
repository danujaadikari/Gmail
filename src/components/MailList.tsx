import { useState, useEffect } from 'react';
import { Email } from '../types';
import MailRow from './MailRow';
import MailRowSkeleton from './MailRowSkeleton';

interface MailListProps {
  emails: Email[];
}

const MailList = ({ emails }: MailListProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedEmails, setDisplayedEmails] = useState<Email[]>([]);

  // Simulate loading with skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedEmails(emails);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [emails]);

  const handleEmailClick = (email: Email) => {
    // UI only - no actual navigation
    console.log('Email clicked:', email.id);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-white">
      {isLoading ? (
        // Show skeleton loaders
        <>
          {Array.from({ length: 8 }).map((_, index) => (
            <MailRowSkeleton key={index} />
          ))}
        </>
      ) : (
        // Show actual emails
        <>
          {displayedEmails.map((email) => (
            <MailRow
              key={email.id}
              email={email}
              onClick={() => handleEmailClick(email)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MailList;
