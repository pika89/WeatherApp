export class City {
  woeid: number;
  title: string;
  consolidated_weather: CityInfo[];
}

export class CityInfo extends City {
  id: number;
  air_pressure: number;
  applicable_date: string;
  weather_state_abbr: string;
  humidity: number;
  max_temp: number;
  min_temp: number;
  the_temp: number;
  weather_state_name: string;
  wind_direction: number;
  wind_speed: number;
}