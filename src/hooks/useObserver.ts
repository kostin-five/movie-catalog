import { RefObject, useEffect, useRef } from "react";

export function useObserver(
  ref: React.RefObject<HTMLElement | null>,
  canLoad: boolean,
  callback: () => void
): void {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!canLoad) return;

    if (observer.current) observer.current.disconnect();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(observerCallback);

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => observer.current?.disconnect();
  }, [canLoad]);
}

export default useObserver;
