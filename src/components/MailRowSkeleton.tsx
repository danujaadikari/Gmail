const MailRowSkeleton = () => {
  return (
    <div className="border-b border-google-border px-4 py-3 animate-pulse">
      <div className="flex items-start gap-4">
        {/* Star skeleton */}
        <div className="w-5 h-5 bg-gray-200 rounded mt-1" />

        {/* Content skeleton */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-100 rounded w-full" />
            </div>
            <div className="h-3 bg-gray-200 rounded w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailRowSkeleton;
