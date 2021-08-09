import { Country } from "@/utils/types";
import Button from "components/atoms/Button";
import Title from "components/atoms/Title";
import { Key, useState } from "react";
import CountryBasicInfoData from "./CountryBasicInfoData";
import CountryModal from "./Modal";

const CountryBasicInfo = ({ country }: { country: Country }) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      key={country.code as Key}
      className="border-gray-400 flex flex-row mb-2 justify-between items-center	"
    >
      <div className="listItemContainer">
        <div className="flex-col flex-1">
          <Title text={country.name} />
          <CountryBasicInfoData country={country} />
        </div>
        <Button
          className="py-4 mr-6 flex-1 flex-grow-0"
          text="View more"
          onClick={() => setOpen(true)}
        />
        <CountryModal open={open} setOpen={setOpen} country={country} />
      </div>
    </li>
  );
};

export default CountryBasicInfo;
