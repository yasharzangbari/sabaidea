/* eslint-disable compat/compat */
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type UseQueryParamsType = {
  generateQuery: (params: Record<string, string>) => string;
  queryParam: URLSearchParams;
  setQuery: (key: string, value: string) => void;
};

export const useQueryParams = (): UseQueryParamsType => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const queryParam = new URLSearchParams(Array.from(searchParams.entries()));
  const generateQuery = (params: Record<string, string>) => {
    return new URLSearchParams(params).toString();
  };
  const setQuery = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(key, value);
      router.replace(`${pathname}?${params.toString()}`);
    },
    [searchParams]
  );

  return { generateQuery, queryParam, setQuery };
};
