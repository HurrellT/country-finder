interface Country {
  name: String;
  code: String;
}

interface CountryList {
  countries: Country[];
}

export type { Country, CountryList };
