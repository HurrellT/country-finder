import { Country } from "@/utils/types";
import CountryBasicInfo from "components/molecules/CountryBasicInfo";
import { Key } from "react";

const CountryBasicInfoList = ({
  countries,
}: {
  countries: Country[];
}) => (
  <div className="flex-auto">
    <ul className="flex flex-col">
      {countries.map((country) => (
        <CountryBasicInfo key={country.code as Key} country={country} />
      ))}
    </ul>
  </div>
);

export default CountryBasicInfoList;