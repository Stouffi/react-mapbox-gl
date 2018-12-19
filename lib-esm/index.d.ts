/// <reference types="react" />
import Map from './map';
import GeoJSONLayer from './geojson-layer';
import Feature from './feature';
import ZoomControl from './zoom-control';
import Popup from './popup';
import ScaleControl from './scale-control';
import Marker from './marker';
import Source from './source';
import Cluster from './cluster';
import RotationControl from './rotation-control';
declare const Layer: (props: {
    id?: string | undefined;
} & import("./layer").LayerCommonProps) => JSX.Element;
export { Feature, Layer, GeoJSONLayer, Map, Popup, ZoomControl, ScaleControl, Marker, Source, Cluster, RotationControl };
export default Map;