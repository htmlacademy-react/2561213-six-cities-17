import { TCity } from '../components/offer-map';

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const CITIES: Record<City, TCity> = {
  [City.Paris]: {
    title: City.Paris,
    lat: 48.856613,
    lng: 2.352222,
    zoom: 10
  },
  [City.Cologne]: {
    title: City.Cologne,
    lat: 50.937531,
    lng: 6.960279,
    zoom: 10
  },
  [City.Brussels]: {
    title: City.Brussels,
    lat: 50.850346,
    lng: 4.351721,
    zoom: 10
  },
  [City.Amsterdam]: {
    title: City.Amsterdam,
    lat: 52.370216,
    lng: 4.895168,
    zoom: 10
  },
  [City.Hamburg]: {
    title: City.Hamburg,
    lat: 53.551086,
    lng: 9.993682,
    zoom: 10
  },
  [City.Dusseldorf]: {
    title: City.Dusseldorf,
    lat: 51.227741,
    lng: 6.773456,
    zoom: 10
  }
};
