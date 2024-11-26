import { SearchInput } from "@/components/landing/search-input";
import { useGetCountries } from "@/shared/countries/hooks/get-countries.hook";
import Link from "next/link";
import React from "react";

interface CountryListProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function CountryList({ search, setSearch }: CountryListProps) {
  const { data: countries } = useGetCountries();

  const filteredCountries =
    search.length > 0 &&
    countries?.filter((country) =>
      country.commonName.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="w-full flex flex-col items-center">
      <SearchInput setSearch={setSearch} />
      <div className="grid grid-cols-4 mt-10">
        {filteredCountries &&
          filteredCountries.map((country) => (
            <Link
              key={country.countryCode}
              href={`/country?code=${country.countryCode}`}
            >
              <p>{country.commonName}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
