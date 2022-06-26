export type Coordinates = {
  lat: number;
  lng: number;
};

export default class Location {
  osm_id: number;
  country: string;
  name: string;
  street_number: number;
  state: string | null;
  postcode: string | null;
  coordinates: Coordinates;

  constructor(
    osm_id: number,
    country: string,
    name: string,
    street_number: number,
    state: string | null,
    postcode: string | null,
    coordinates: Coordinates
  ) {
    this.osm_id = osm_id;
    this.country = country;
    this.name = name;
    this.street_number = street_number;
    this.state = state;
    this.postcode = postcode;
    this.coordinates = coordinates;
  }

  format() {
    return (
      (this.street_number ? this.street_number + " " : "") +
      this.name +
      " - " +
      (this.postcode ? this.postcode.split(";")[0] + " - " : "") +
      (this.state ? this.state + " - " : "") +
      this.country
    );
  }

  getPoint(): string {
    return `${this.coordinates.lat},${this.coordinates.lng}`;
  }
}
