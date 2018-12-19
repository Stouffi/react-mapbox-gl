import * as React from 'react';
import * as MapboxGl from 'mapbox-gl';
export declare const MapContext: React.Context<MapboxGl.Map | undefined>;
export declare function withMap<P>(Component: React.ComponentClass<P & {
    map: MapboxGl.Map;
}>): (props: P) => JSX.Element;
