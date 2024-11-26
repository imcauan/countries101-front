"use server";

import { api } from "@/services/api";
import { CountryModel } from "@/shared/countries/types/country.model";

export async function getCountries() {
  try {
    const { data: countries } = await api.get<CountryModel[]>(`countries`);

    return countries;
  } catch (error) {
    console.log(error);
  }
}
