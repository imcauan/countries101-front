import { getCountries } from "@/shared/countries/actions/get-countries";
import { useQuery } from "@tanstack/react-query";

export function useGetCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
    refetchOnMount: false,
  });
}
