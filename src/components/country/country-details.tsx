import { CountryPopulationChart } from "@/components/country/country-population-chart";
import { CountryModel } from "@/shared/countries/types/country.model";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CountryDetailsProps {
  country: CountryModel | undefined;
}

export default function CountryDetails({ country }: CountryDetailsProps) {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-start py-20">
      <div className="flex flex-col items-center space-y-10">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <Image
            src={country?.flagUrl || country?.commonName!}
            alt={country?.commonName!}
            width={250}
            height={250}
          />
          <div className="flex flex-col text-start lg:justify-center p-3">
            <h1 className="text-3xl font-semibold">{country?.commonName}</h1>
            <h2 className="text-xl">Borders:</h2>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
              {country?.borders?.map((border) => (
                <Link
                  href={`/country?code=${border.countryCode}`}
                  key={border.countryCode}
                >
                  <p key={border.commonName}>{border?.commonName}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <CountryPopulationChart chartData={country?.population!} />
      </div>
    </div>
  );
}
