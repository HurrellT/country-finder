import { useQuery } from "@apollo/client";
import { Key } from "react";
import GET_COUNTRIES from "@/queries/GetCountries";
import { CountryList } from "@/utils/types";

export default function Home() {
  const { loading, error, data } = useQuery<CountryList>(GET_COUNTRIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ul className="divide-y divide-gray-200">
      {data?.countries.map((country) => (
        <li key={country.code as Key} className="py-4 flex">
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{country.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
