



export default function LoadingState() {
    return  (   
    
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-2">
        {/* Simple Tailwind Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="text-lg font-semibold text-gray-700">Loading</p>
      </div>
    </div>
)}