import color, {Color} from './color';
import font, {Font} from './font';
import style from './style';
import unit, {Unit} from './unit';
import strings from './string';
import images from './images';

const R = {
  color: color,
  font,
  style,
  unit,
  strings,
  images
};

export type {Color, Font, Unit};

export default R;
