import { ContinentList, LanguageList, SelectItem } from "@/utils/types";
import Checkbox from "components/atoms/Checkbox";
import Input from "components/atoms/Input";
import Select from "components/atoms/Select";
import { ChangeEventHandler } from "react";

const SearchBox = ({
  onInputChange,
  toggleCheckbox,
  handleContinent,
  continents,
  handleCurrency,
  currencies,
  handleLanguage,
  languages,
}: {
  onInputChange: ChangeEventHandler<any>;
  toggleCheckbox: ChangeEventHandler<any>;
  handleContinent: ChangeEventHandler<any>;
  continents: ContinentList | undefined;
  handleCurrency: ChangeEventHandler<any>;
  currencies: String[] | undefined;
  handleLanguage: ChangeEventHandler<any>;
  languages: LanguageList | undefined;
}) => (
  <div className="flex-auto">
    <div className="flex m-2 justify-center items-center">
      <Input
        type="search"
        name="searchCountries"
        id="searchCountries"
        placeholder="Search Countries by Name or Code"
        onChange={onInputChange}
      />
      <Checkbox onChange={toggleCheckbox} text="Only by Code" />
    </div>
    <div>
      <div className="flex m-2">
        <Select
          text="Continent"
          name="continentFilter"
          id="continentFilter"
          onChange={handleContinent}
          elements={continents?.continents.map(
            (cont) =>
              ({
                key: cont.code,
                label: cont.name,
                value: cont.code,
              } as SelectItem)
          )}
        />
        <Select
          name="currencyFilter"
          id="currencyFilter"
          onChange={handleCurrency}
          text="Currency"
          elements={currencies?.map(
            (curr) =>
              ({
                key: curr,
                label: curr,
                value: curr,
              } as SelectItem)
          )}
        />

        <Select
          text="Languages"
          name="languageFilter"
          id="languageFilter"
          onChange={handleLanguage}
          elements={languages?.languages.map(
            (lang) =>
              ({
                key: lang.code,
                label: lang.name,
                value: lang.code,
              } as SelectItem)
          )}
        />
      </div>
    </div>
  </div>
);

export default SearchBox;
