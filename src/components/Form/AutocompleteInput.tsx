import React, { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IAutocompleteDisplayable } from "./IAutocompleteDisplayable";
import { ItemsContainer } from "./AutocompleteInputStyles";

/// how much time to wait before launching request ? (in ms)
const DEBOUNCE_TIMEOUT = 850;

let timeout: any;

interface AutocompleteInputProps<T extends IAutocompleteDisplayable> {
  name: string;
  placeholder: string;
  itemSelectedCallback: (item: T) => void;
  getItems: (value: string) => Promise<T[]>;
}

const AutocompleteInput = <T extends IAutocompleteDisplayable>({
  name,
  placeholder,
  itemSelectedCallback,
  getItems,
}: AutocompleteInputProps<T>) => {
  const { register } = useFormContext();
  const [items, setItems] = useState<T[]>([]);
  const [showItems, setShowItems] = useState(false);

  const debouncedFetchItems = useCallback((value: string) => {
    clearTimeout(timeout);
    if (value.length === 0) {
      setShowItems(false);
      return;
    }

    timeout = setTimeout(async () => {
      const foundItems = await getItems(value);
      setShowItems(true);
      setItems(foundItems);
    }, DEBOUNCE_TIMEOUT);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name, {
          required: true,
          onChange: (e) => debouncedFetchItems(e.target.value),
        })}
      />

      {showItems && (
        <ItemsContainer>
          {items.map((item) => (
            <div
              key={item.id()}
              onClick={() => {
                itemSelectedCallback(item);
                setShowItems(false);
              }}
            >
              {item.format()}
            </div>
          ))}
        </ItemsContainer>
      )}
    </div>
  );
};

export default AutocompleteInput;
