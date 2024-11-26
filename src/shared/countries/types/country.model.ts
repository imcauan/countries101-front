import { PopulationCount } from "@/shared/countries/types/population-count.type";

export interface CountryModel {
  commonName: string;
  countryCode: string;
  flagUrl: string;
  borders?: CountryModel[];
  population: PopulationCount[];
}
