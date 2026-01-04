const FloatingActionButton = () => {
  const handleComposeClick = () => {
    // UI only - no actual compose modal
    console.log('Compose button clicked');
  };

  return (
    <button
      onClick={handleComposeClick}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-14 h-14 bg-google-blue hover:bg-google-blue-hover text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
      aria-label="Compose new email"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
    </button>
  );
};

export default FloatingActionButton;
