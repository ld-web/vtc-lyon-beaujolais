import React, { useCallback, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { EngineInputs } from "./Engine";
import Location from "./Location";
import { ResultsContainer } from "./styles/AutocompleteInputStyles";

const DEBOUNCE_TIMEOUT = 850;
let timeout: any;

interface AutocompleteInputProps {
  name: keyof EngineInputs;
  placeholder: string;
  callback: Function;
  registerFn: UseFormRegister<EngineInputs>;
}

const AutocompleteInput = ({
  name,
  placeholder,
  callback,
  registerFn,
}: AutocompleteInputProps) => {
  const [results, setResults] = useState<Location[]>([]);
  const [showResults, setShowResults] = useState(false);

  const geocode = useCallback((value: string) => {
    clearTimeout(timeout);
    if (value.length === 0) {
      setShowResults(false);
      return;
    }

    timeout = setTimeout(() => {
      fetch(
        `https://graphhopper.com/api/1/geocode?q=${value}&locale=fr&limit=5&debug=false&key=${process.env.GATSBY_GRAPHHOPPER_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          const locations: Location[] = [];

          data.hits.map((hit: any) => {
            locations.push(
              new Location(
                hit.osm_id,
                hit.country,
                hit.name,
                hit.house_number ?? null,
                hit.state ?? null,
                hit.postcode ?? null,
                hit.point
              )
            );
          });

          setShowResults(true);
          console.log(locations);
          setResults(locations);
        });
    }, DEBOUNCE_TIMEOUT);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        {...registerFn(name, {
          required: true,
          onChange: (e) => geocode(e.target.value),
        })}
      />
      {showResults && (
        <ResultsContainer>
          {results.map((location) => (
            <div
              key={location.osm_id}
              onClick={() => {
                callback(location);
                setShowResults(false);
              }}
            >
              {location.format()}
            </div>
          ))}
        </ResultsContainer>
      )}
    </div>
  );
};

export default AutocompleteInput;
