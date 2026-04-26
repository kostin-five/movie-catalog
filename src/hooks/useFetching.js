import { useCallback, useState } from "react";

export function useFetching(callback) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetching = useCallback(
    async (...args) => {
      try {
        setLoading(true);
        await callback(...args);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [callback]
  );

  return [fetching, isLoading, error];
}
