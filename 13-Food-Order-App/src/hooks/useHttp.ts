import { useState, useCallback, useEffect } from "react";

const sendHttpRequest = async <T>(
  url: RequestInfo,
  config?: RequestInit
): Promise<T> => {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) throw new Error(resData.message || "Something went wrong.");

  return resData;
};

const useHttp = <T>(url: string, initialData: T, config: RequestInit) => {
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearData = () => setData(initialData);

  const sendRequest = useCallback(
    async (data?: T) => {
      setIsLoading(true);

      try {
        const resData = await sendHttpRequest(url, {
          ...config,
          ...(data !== undefined ? { body: JSON.stringify(data) } : {}),
        });
        setData(resData as T);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        else setError("Something went wrong.");
      }

      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config)
      sendRequest();
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
};

export default useHttp;
