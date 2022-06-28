import { IAutocompleteDisplayable } from "../Form/IAutocompleteDisplayable";

export type Coordinates = {
  lat: number;
  lng: number;
};

export default class Location implements IAutocompleteDisplayable {
  constructor(
    public osm_id: number,
    public country: string,
    public name: string,
    public street_number: number,
    public state: string | null,
    public postcode: string | null,
    public coordinates: Coordinates
  ) {}

  id(): string {
    return this.osm_id.toString();
  }

  format(): string {
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
