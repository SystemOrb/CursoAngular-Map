export class Map {
    latitude: number;
    longitude: number;
    title = '';
    desc = '';
    constructor( lat: number, lng: number ) {
        this.latitude = lat;
        this.longitude = lng;
    }
}
