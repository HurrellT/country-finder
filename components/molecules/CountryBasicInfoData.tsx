import { Country, Language } from "@/utils/types";
import SubtitledListItem from "./SubtitledListItem";

const CountryBasicInfoData = ({ country }: { country: Country }) => (
  <div className="ml-3 grid gap-6 grid-cols-4">
    <SubtitledListItem itemText={country.code} subtitleText="Code:" />
    <SubtitledListItem
      itemText={country.continent.name}
      subtitleText="Continent:"
    />
    <SubtitledListItem itemText={country.currency} subtitleText="Currencies:" />
    <SubtitledListItem
      itemText={country.languages.map((l: Language) => l.name).join(", ")}
      subtitleText="Languages:"
    />
  </div>
);

export default CountryBasicInfoData;