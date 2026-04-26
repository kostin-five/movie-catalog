import { useEffect, useRef } from "react";

export function useObserver(ref, canLoad, callback) {
  const observer = useRef();

  useEffect(() => {
    if (!canLoad) return;

    if (observer.current) observer.current.disconnect();

    const observerCallback = (entries) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(observerCallback);

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => observer.current.disconnect();
  }, [canLoad]);
}

export default useObserver;
