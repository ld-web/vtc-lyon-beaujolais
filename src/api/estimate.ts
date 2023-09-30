import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

interface EstimateBody {
  departure: string;
  arrival: string;
}

export default async function handler(
  req: GatsbyFunctionRequest<EstimateBody>,
  res: GatsbyFunctionResponse
) {
  const response = await fetch(
    `https://graphhopper.com/api/1/route?point=${req.body.departure}&point=${req.body.arrival}&profile=car&instructions=false&locale=fr&calc_points=false&key=${process.env.GATSBY_GRAPHHOPPER_API_KEY}`
  );
  const data = await response.json();

  let distance: number = data.paths[0].distance / 1000;

  let coeff = distance >= 50 ? 1.8 : 2;

  let result: number = distance * coeff;

  if (result < 25) {
    result = 25;
  }

  res.json(result.toFixed(2));
}
