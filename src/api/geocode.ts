import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import Location from "../components/Tarifs/Location";

interface GeocodeBody {
  value: string;
}

export default async function handler(
  req: GatsbyFunctionRequest<GeocodeBody>,
  res: GatsbyFunctionResponse
) {
  const response = await fetch(
    `https://graphhopper.com/api/1/geocode?q=${req.body.value}&locale=fr&limit=5&debug=false&key=${process.env.GATSBY_GRAPHHOPPER_API_KEY}`
  );
  const data = await response.json();

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

  res.json(locations);
}
