import sunny from '../../assets/sunny.png';
import partlyCloudy from '../../assets/partly-cloudy.png';
import thunder from '../../assets/thunder.png';
import blowingSnow from '../../assets/blowing-snow.png';
import cloudy from '../../assets/cloudy.png';
import heavyRainWithThunder from '../../assets/heavy-rain-with-thunder.png';
import heavyRain from '../../assets/heavy-rain.png';
import icePellets from '../../assets/ice-pellets.png';

import lightRain from '../../assets/light-rain.png';
import lightRainWithThunder from '../../assets/light-rain-with-thunder.png';
import lightSnow from '../../assets/light-snow.png';
import mist from '../../assets/mist.png';
import overcast from '../../assets/overcast.png';
import rain from '../../assets/rain.png';
import sleet from '../../assets/sleet.png';
import snow from '../../assets/snow.png';

export const FORECAST_ICON_MAP: Readonly<Record<number, string>> = {
  1000: sunny,
  1003: partlyCloudy,
  1087: thunder,
  1006: cloudy,
  1009: overcast,
  1030: mist,
  1063: lightRain,
  1240: lightRain,
  1066: lightSnow,
  1279: lightSnow,
  1069: sleet,
  1204: sleet,
  1207: sleet,
  1249: sleet,
  1252: sleet,
  1114: snow,
  1216: snow,
  1282: snow,
  1219: snow,
  1258: snow,
  1135: mist,
  1147: mist,
  1150: mist,
  1153: mist,
  1168: mist,
  1171: mist,
  1180: lightRain,
  1183: lightRain,
  1198: lightRain,
  1186: rain,
  1189: rain,
  1192: heavyRain,
  1201: heavyRain,
  1195: heavyRain,
  1243: heavyRain,
  1210: lightSnow,
  1213: lightSnow,
  1255: lightSnow,
  1222: blowingSnow,
  1225: blowingSnow,
  1237: icePellets,
  1261: icePellets,
  1264: icePellets,
  1273: lightRainWithThunder,
  1276: heavyRainWithThunder,
};
