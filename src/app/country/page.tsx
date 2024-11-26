"use client";

import CountryDetails from "@/components/country/country-details";
import { Header } from "@/components/landing/header";
import { useGetCountryByCode } from "@/shared/countries/hooks/get-country-by-code.hook";
import { useSearchParams } from "next/navigation";
import React from "react";

export function CountryPage() {
  const code = useSearchParams().get("code") ?? "";
  const { data: country, isFetching } = useGetCountryByCode(code);

  return (
    <>
      <Header />
      {isFetching ? (
        <div className="w-full h-full flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <CountryDetails country={country} />
      )}
    </>
  );
}

export default CountryPage;
