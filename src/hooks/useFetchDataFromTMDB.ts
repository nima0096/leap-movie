import { fetchDataFromTMDB } from "@/utils";
import useSWR from "swr";

export const useFetchDataFromTMDB = <T>(endpoint: string) => {
  const { data, isLoading } = useSWR<T>(endpoint, fetchDataFromTMDB);

  return { data, isLoading };
};
