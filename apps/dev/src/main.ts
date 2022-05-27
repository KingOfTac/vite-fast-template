import './style.css';
import { App } from './app';

App;

import { provideFluentDesignSystem, allComponents, baseLayerLuminance, accentBaseColor, SwatchRGB } from '@fluentui/web-components';
import { parseColorHexRGB } from '@microsoft/fast-colors';


baseLayerLuminance.withDefault(0.23);
accentBaseColor.withDefault(SwatchRGB.from(parseColorHexRGB('#dca8ee')!));

provideFluentDesignSystem().register(allComponents);