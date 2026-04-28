import { useCallback, useState } from "react";

type fetchingCallback = (...args: any[]) => Promise<void>;

export function useFetching(
  callback: fetchingCallback
): [fetchingCallback, boolean, string] {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const fetching = useCallback(
    async (...args: any[]) => {
      try {
        setLoading(true);
        await callback(...args);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [callback]
  );

  return [fetching, isLoading, error];
}
