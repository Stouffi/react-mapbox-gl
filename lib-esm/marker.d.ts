import * as React from 'react';
import { Point } from 'mapbox-gl';
import { Anchor } from './util/types';
export interface Props {
    coordinates: [number, number];
    anchor?: Anchor;
    offset?: number | [number, number] | Point;
    children?: JSX.Element;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    style?: React.CSSProperties;
    className?: string;
    tabIndex?: number;
}
export declare const Marker: React.StatelessComponent<Props>;
export default Marker;
