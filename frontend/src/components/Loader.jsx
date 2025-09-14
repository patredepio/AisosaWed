import { useEffect, useState } from "react";

function Loader({ onLoadComplete }) {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Add a small delay before calling onLoadComplete for smooth transition
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return prev + 1.67; // Increase by 1.67% every 50ms (total 3 seconds)
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className='loader-container'>
      <div className='loader-content'>
        {/* Main animated text */}
        <div className='animated-text-container'>
          <h1
            className='animated-text'
            data-text='#AKindOfLove'
          >
            #AKindOfLove
          </h1>
        </div>


        {/* Subtitle */}
        <p className='loader-subtitle'>Aisosa & Kunle's Wedding Celebration</p>
      </div>

      {/* Wedding rings animation */}
      <div className='floating-rings'>
        <div className='ring ring-1'>💍</div>
        <div className='ring ring-2'>💍</div>
        <div className='ring ring-3'>💍</div>
      </div>
    </div>
  );
}

export default Loader;
