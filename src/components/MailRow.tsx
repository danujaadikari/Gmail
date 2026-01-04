import { Email } from '../types';

interface MailRowProps {
  email: Email;
  onClick: () => void;
}

const MailRow = ({ email, onClick }: MailRowProps) => {
  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // UI only - no actual state change
  };

  return (
    <div
      onClick={onClick}
      className={`
        border-b border-google-border px-4 py-3 cursor-pointer
        hover:shadow-md transition-shadow relative
        ${email.isUnread ? 'bg-white' : 'bg-gray-50'}
      `}
    >
      <div className="flex items-start gap-4">
        {/* Star Icon */}
        <button
          onClick={handleStarClick}
          className="mt-1 flex-shrink-0"
          aria-label="Star email"
        >
          {email.isStarred ? (
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 text-google-border hover:text-google-gray" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
            </svg>
          )}
        </button>

        {/* Email Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className={`text-sm truncate ${email.isUnread ? 'font-bold text-gray-900' : 'font-normal text-gray-700'}`}>
                {email.sender}
              </p>
              <p className={`text-sm mt-0.5 truncate ${email.isUnread ? 'font-semibold text-gray-900' : 'font-normal text-gray-700'}`}>
                {email.subject}
              </p>
              <p className="text-sm text-google-gray mt-0.5 truncate">
                {email.preview}
              </p>
            </div>

            {/* Timestamp */}
            <div className="flex-shrink-0 text-xs text-google-gray">
              {email.timestamp}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailRow;
