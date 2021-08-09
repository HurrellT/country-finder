import { Key } from "react";

interface Language {
  name: String;
  code: String;
}

interface LanguageList {
  [x: string]: any;
  languages: Language[];
}

interface SimpleCountry {
  name: String;
  code: String;
}

interface Continent {
  name: String;
  code: String;
}

interface Country {
  name: String;
  code: String;
  continent: Continent;
  currency: String;
  languages: LanguageList;
  native: String;
  phone: String;
  capital: String;
}

interface SimpleCountryList {
  countries: SimpleCountry[];
}

interface CountryList {
  countries: Country[];
}

interface ContinentList {
  map(arg0: (cont: any) => SelectItem): SelectItem[] | undefined;
  continents: Continent[];
}

interface SelectItem {
  key: Key;
  value: String;
  label: String;
}

export type {
  SimpleCountry,
  SimpleCountryList,
  CountryList,
  Continent,
  ContinentList,
  Country,
  Language,
  LanguageList,
  SelectItem
};
