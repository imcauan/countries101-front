import { GetCountryByCode } from "@/shared/countries/actions/get-country-by-code";
import { useQuery } from "@tanstack/react-query";

export function useGetCountryByCode(code: string) {
  return useQuery({
    queryKey: ["country", code],
    queryFn: () => GetCountryByCode(code),
    enabled: !!code,
  });
}
