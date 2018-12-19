import * as React from 'react';
import { Map } from 'mapbox-gl';
import { Props as MarkerProps } from './marker';
import { Supercluster } from 'supercluster';
import * as GeoJSON from 'geojson';
export declare type Props = {
    ClusterMarkerFactory(coordinates: GeoJSON.Position, pointCount: number, getLeaves: (limit?: number, offset?: number) => Array<React.ReactElement<MarkerProps>>): React.ReactElement<MarkerProps>;
    radius?: number;
    maxZoom?: number;
    minZoom?: number;
    extent?: number;
    nodeSize?: number;
    log?: boolean;
    zoomOnClick?: boolean;
    zoomOnClickPadding?: number;
    children?: Array<React.ReactElement<MarkerProps>>;
    style?: React.CSSProperties;
    className?: string;
    tabIndex?: number;
} & {
    map: Map;
};
export interface State {
    superC: Supercluster;
    clusterPoints: Array<GeoJSON.Feature<GeoJSON.Point>>;
}
export declare class Cluster extends React.Component<Props, State> {
    static defaultProps: {
        radius: number;
        minZoom: number;
        maxZoom: number;
        extent: number;
        nodeSize: number;
        log: boolean;
        zoomOnClick: boolean;
        zoomOnClickPadding: number;
    };
    state: State;
    private featureClusterMap;
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    private childrenChange;
    private mapChange;
    private feature;
    private childrenToFeatures;
    private getLeaves;
    zoomToClusterBounds: (event: React.MouseEvent<HTMLElement>) => void;
    private findMarkerElement;
    render(): JSX.Element;
}
declare const _default: (props: {
    ClusterMarkerFactory(coordinates: number[], pointCount: number, getLeaves: (limit?: number | undefined, offset?: number | undefined) => React.ReactElement<MarkerProps>[]): React.ReactElement<MarkerProps>;
    radius?: number | undefined;
    maxZoom?: number | undefined;
    minZoom?: number | undefined;
    extent?: number | undefined;
    nodeSize?: number | undefined;
    log?: boolean | undefined;
    zoomOnClick?: boolean | undefined;
    zoomOnClickPadding?: number | undefined;
    children?: React.ReactElement<MarkerProps>[] | undefined;
    style?: React.CSSProperties | undefined;
    className?: string | undefined;
    tabIndex?: number | undefined;
}) => JSX.Element;
export default _default;
