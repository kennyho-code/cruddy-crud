import { useEffect, useState } from "react";

const useService = <T>(fetch: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetch();
        setData(data);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetch]);

  return {
    data,
    error,
    loading,
  };
};

const useCallService = <T>() => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  return (formData: FormData) => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.greatfrontend.com/api/questions/contact-form",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            }),
          }
        );
        setData(data);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return {
      data,
      error,
      loading,
    };
  };
};

export { useService, useCallService };
