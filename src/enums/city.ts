import { TCity } from '../types';

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
    name: City.Paris,
    location: {
      latitude: 48.856613,
      longitude: 2.352222,
      zoom: 10
    }
  },
  [City.Cologne]: {
    name: City.Cologne,
    location: {
      latitude: 50.937531,
      longitude: 6.960279,
      zoom: 10
    }
  },
  [City.Brussels]: {
    name: City.Brussels,
    location: {
      latitude: 50.850346,
      longitude: 4.351721,
      zoom: 10
    }
  },
  [City.Amsterdam]: {
    name: City.Amsterdam,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  [City.Hamburg]: {
    name: City.Hamburg,
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10
    }
  },
  [City.Dusseldorf]: {
    name: City.Dusseldorf,
    location: {
      latitude: 51.227741,
      longitude: 6.773456,
      zoom: 10
    }
  }
};
