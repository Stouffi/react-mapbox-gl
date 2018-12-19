import * as React from 'react';
import { Map, GeoJSONSource, GeoJSONSourceRaw, Layer } from 'mapbox-gl';
import { TilesJson } from './util/types';
export declare type Props = {
    id: string;
    geoJsonSource?: GeoJSONSourceRaw;
    tileJsonSource?: TilesJson;
    onSourceAdded?: (source: GeoJSONSource | TilesJson) => void;
    onSourceLoaded?: (source: GeoJSONSource | TilesJson) => void;
} & {
    map: Map;
};
export interface LayerWithBefore extends Layer {
    before?: string;
}
export declare class Source extends React.Component<Props> {
    private id;
    private onStyleDataChange;
    UNSAFE_componentWillMount(): void;
    private initialize;
    private onData;
    removeSource(): LayerWithBefore[];
    componentWillUnmount(): void;
    componentWillReceiveProps(props: Props): void;
    render(): null;
}
declare const _default: (props: {
    id: string;
    geoJsonSource?: GeoJSONSourceRaw | undefined;
    tileJsonSource?: import("mapbox-gl").VectorSource | import("mapbox-gl").RasterSource | undefined;
    onSourceAdded?: ((source: import("mapbox-gl").VectorSource | import("mapbox-gl").RasterSource | GeoJSONSource) => void) | undefined;
    onSourceLoaded?: ((source: import("mapbox-gl").VectorSource | import("mapbox-gl").RasterSource | GeoJSONSource) => void) | undefined;
}) => JSX.Element;
export default _default;
