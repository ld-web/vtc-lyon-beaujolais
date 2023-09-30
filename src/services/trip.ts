import Location from "../components/Tarifs/Location";

/**
 * Geocodes given location
 * @param {string} value - The location to geocode
 */
export const geocodeLocation = async (value: string): Promise<Location[]> => {
  const res = await fetch("/api/geocode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value }),
  });
  const data = await res.json();

  const locations: Location[] = [];

  data.map((hit: any) => {
    locations.push(
      new Location(
        hit.osm_id,
        hit.country,
        hit.name,
        hit.street_number ?? null,
        hit.state ?? null,
        hit.postcode ?? null,
        hit.coordinates
      )
    );
  });

  return locations;
};

/**
 * Estimates trip price between departure & arrival coordinates.
 * @constructor
 * @param {string} departure - Departure coordinates, format: {lat},{lng}
 * @param {string} arrival - Arrival coordinates, format: {lat},{lng}
 */
export const estimate = async (
  departure: string,
  arrival: string
): Promise<number> => {
  const res = await fetch("/api/estimate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ departure, arrival }),
  });
  const data = await res.json();

  return parseFloat(data);
};
