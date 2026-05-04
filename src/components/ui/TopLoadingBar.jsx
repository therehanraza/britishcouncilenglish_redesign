import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function TopLoadingBar() {
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const activeRequests = useRef(0);
  const finishTimer = useRef(null);

  const clearFinishTimer = useCallback(() => {
    if (finishTimer.current) {
      window.clearTimeout(finishTimer.current);
      finishTimer.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clearFinishTimer();
    setStatus('loading');
  }, [clearFinishTimer]);

  const finish = useCallback(() => {
    clearFinishTimer();
    setStatus('finishing');
    finishTimer.current = window.setTimeout(() => {
      setStatus('idle');
      finishTimer.current = null;
    }, 260);
  }, [clearFinishTimer]);

  useEffect(() => {
    const startTimer = window.setTimeout(start, 0);
    const doneTimer = window.setTimeout(finish, 520);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(doneTimer);
    };
  }, [finish, location.pathname, location.search, start]);

  useEffect(() => {
    function handleStart() {
      activeRequests.current += 1;
      start();
    }

    function handleDone() {
      activeRequests.current = Math.max(0, activeRequests.current - 1);

      if (activeRequests.current === 0) {
        finish();
      }
    }

    window.addEventListener('app-loading-start', handleStart);
    window.addEventListener('app-loading-done', handleDone);

    return () => {
      window.removeEventListener('app-loading-start', handleStart);
      window.removeEventListener('app-loading-done', handleDone);
      clearFinishTimer();
    };
  }, [clearFinishTimer, finish, start]);

  return (
    <div
      className={`top-loading-bar top-loading-bar--${status}`}
      aria-hidden="true"
    />
  );
}

export default TopLoadingBar;
