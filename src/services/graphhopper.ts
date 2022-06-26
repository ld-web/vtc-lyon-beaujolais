import Location from "../components/Tarifs/Location";

export const geocodeLocation = async (value: string): Promise<Location[]> => {
  const res = await fetch(
    `https://graphhopper.com/api/1/geocode?q=${value}&locale=fr&limit=5&debug=false&key=${process.env.GATSBY_GRAPHHOPPER_API_KEY}`
  );
  const data = await res.json();

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

  return locations;
};

export const estimate = async (
  departure: Location,
  arrival: Location
): Promise<number> => {
  const res = await fetch(
    `https://graphhopper.com/api/1/route?point=${departure.getPoint()}&point=${arrival.getPoint()}&profile=car&instructions=false&locale=fr&calc_points=false&key=${
      process.env.GATSBY_GRAPHHOPPER_API_KEY
    }`
  );
  const data = await res.json();

  let distance: number = data.paths[0].distance / 1000;

  let coeff = distance >= 50 ? 1.8 : 2;

  let result: number = distance * coeff;

  if (result < 25) {
    result = 25;
  }

  return parseFloat(result.toFixed(2));
};
