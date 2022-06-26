import React, { useCallback, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { geocodeLocation } from "../../services/graphhopper";
import { EngineInputs } from "./Engine";
import Location from "./Location";
import { ResultsContainer } from "./styles/AutocompleteInputStyles";

// how much time to wait before launching request ? (in ms)
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
  const [locations, setLocations] = useState<Location[]>([]);
  const [showLocations, setShowLocations] = useState(false);

  const geocode = useCallback((value: string) => {
    clearTimeout(timeout);
    if (value.length === 0) {
      setShowLocations(false);
      return;
    }

    timeout = setTimeout(async () => {
      const foundLocations = await geocodeLocation(value);
      setShowLocations(true);
      setLocations(foundLocations);
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
      {showLocations && (
        <ResultsContainer>
          {locations.map((location) => (
            <div
              key={location.osm_id}
              onClick={() => {
                callback(location);
                setShowLocations(false);
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
