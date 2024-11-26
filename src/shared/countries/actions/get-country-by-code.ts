"use server";

import { api } from "@/services/api";
import { CountryModel } from "@/shared/countries/types/country.model";

export async function GetCountryByCode(code: string) {
  try {
    const { data: country } = await api.get<CountryModel>(`/countries/${code}`);

    return country;
  } catch (error) {
    console.log(error);
  }
}
