import * as React from 'react';
import { Map, Point } from 'mapbox-gl';
import { OverlayParams } from './util/overlays';
import { Anchor } from './util/types';
export declare type Props = {
    type: 'marker' | 'popup';
    coordinates: [number, number];
    anchor?: Anchor;
    offset?: number | [number, number] | Point;
    children?: JSX.Element | JSX.Element[];
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onDoubleClick?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    onScroll?: React.UIEventHandler<HTMLDivElement>;
    onWheel?: React.MouseEventHandler<HTMLDivElement>;
    style?: React.CSSProperties;
    className: string;
    tabIndex?: number;
} & {
    map: Map;
};
export declare class ProjectedLayer extends React.Component<Props, OverlayParams> {
    private container;
    private prevent;
    static defaultProps: {
        offset: number;
        onClick: (...args: any[]) => any[];
    };
    state: OverlayParams;
    private setContainer;
    private handleMapMove;
    componentDidMount(): void;
    private havePropsChanged;
    componentWillReceiveProps(nextProps: Props): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare const _default: (props: {
    type: "marker" | "popup";
    coordinates: [number, number];
    anchor?: "bottom" | "left" | "right" | "top" | "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | undefined;
    offset?: number | [number, number] | Point | undefined;
    children?: JSX.Element | JSX.Element[] | undefined;
    onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
    onDoubleClick?: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
    onMouseEnter?: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
    onMouseLeave?: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
    onScroll?: ((event: React.UIEvent<HTMLDivElement>) => void) | undefined;
    onWheel?: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
    style?: React.CSSProperties | undefined;
    className: string;
    tabIndex?: number | undefined;
}) => JSX.Element;
export default _default;
