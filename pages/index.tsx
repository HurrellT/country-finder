/* eslint-disable jsx-a11y/label-has-associated-control */
// False positive --label-has-associated-control--
import GET_AVAILABLE_CONTINENTS from "@/queries/GetAvailableContinents";
import GET_AVAILABLE_LANGUAGES from "@/queries/GetAvailableLenguages";
import GET_SIMPLE_COUNTRIES from "@/queries/GetCountries";
import {
  ContinentList,
  Country,
  CountryList,
  Language,
  LanguageList
} from "@/utils/types";
import { useQuery } from "@apollo/client";
import Loading from "components/molecules/Loading";
import NavBar from "components/molecules/NavBar";
import CountryBasicInfoList from "components/organisms/CountryBasicInfoList";
import SearchBox from "components/organisms/SearchBox";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const { loading, data } = useQuery<CountryList>(GET_SIMPLE_COUNTRIES);
  const {
    data: continentsData,
  } = useQuery<ContinentList>(GET_AVAILABLE_CONTINENTS);
  const {
    data: languagesData,
  } = useQuery<LanguageList>(GET_AVAILABLE_LANGUAGES);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [onlyCode, setOnlyCode] = useState(false);
  const [lastSearch, setLastSearch] = useState<String>("");
  const [currencies, setCurrencies] = useState<Array<String>>([]);
  const [continent, setContinent] = useState("");
  const [currency, setCurrency] = useState("");
  const [language, setLanguage] = useState("");

  // You may ask, why I filter in the code rather than using the filter in the api
  // Well... the omission of a "name" parameter, made the filtering quite
  // messy, so I decided this was best for the code quality, considering that the
  // performance is ok. I would have added the "name" param in the api if it was mine,
  // to avoid this kind of workarounds.

  const filterCountries = useCallback((value: String) => {
    setLastSearch(value);
    const userInput = value.toLowerCase();
    const upperCaseUserInput = value.toUpperCase();
    const result = data?.countries.filter((country) => {
      const codeIsEqual = country.code === upperCaseUserInput;
      const continentCondition =
        country.continent.code === continent || !continent;
      const currencyCondition = country.currency === currency || !currency;
      const languageCondition =
        country.languages.map((l: Language) => l.code).includes(language) ||
        !language;

      return onlyCode
        ? codeIsEqual &&
            continentCondition &&
            currencyCondition &&
            languageCondition
        : (country.name.toLowerCase().includes(userInput) || codeIsEqual) &&
            continentCondition &&
            currencyCondition &&
            languageCondition;
    });
    if (result) setFilteredCountries(result);
  }, [continent, currency, data?.countries, language, onlyCode]);

  const toggleCheckbox = () => {
    setOnlyCode(!onlyCode);
  };

  useEffect(() => {
    filterCountries(lastSearch);
  }, [onlyCode, continent, currency, language, filterCountries, lastSearch]);

  useEffect(() => {
    setCurrencies(
      Array.from(
        new Set(
          data?.countries
            .map((country) => country.currency)
            .filter((c) => c !== null)
        )
      )
    );
  }, [data]);

  const handleContinent = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setContinent(value);
  };

  const handleCurrency = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setCurrency(value);
  };

  const handleLanguage = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setLanguage(value);
  };

  if (loading) return <Loading />;

  return (
    <div className="flex-col flex-wrap space-x-4">
      {/* Header ?? */}
      {/* Side panel */}
      <div>
        <NavBar />
        <SearchBox
          onInputChange={(e) => filterCountries(e.target.value)}
          toggleCheckbox={toggleCheckbox}
          handleContinent={handleContinent}
          continents={continentsData}
          handleCurrency={handleCurrency}
          currencies={currencies}
          handleLanguage={handleLanguage}
          languages={languagesData}
        />
      </div>
      <CountryBasicInfoList countries={filteredCountries} />
    </div>
  );
}