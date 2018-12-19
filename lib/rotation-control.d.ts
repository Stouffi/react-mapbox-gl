import * as React from 'react';
import { Map } from 'mapbox-gl';
import { AnchorLimits } from './util/types';
export declare type Props = {
    position?: AnchorLimits;
    style?: React.CSSProperties;
    className?: string;
    tabIndex?: number;
} & {
    map: Map;
};
export interface State {
    hover?: number;
}
export declare class RotationControl extends React.Component<Props, State> {
    static defaultProps: {
        position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    };
    state: {
        hover: undefined;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    compassIcon: HTMLSpanElement | null;
    private onMouseOut;
    private onMouseIn;
    private onClickCompass;
    private onMapRotate;
    private assignRef;
    render(): JSX.Element;
}
declare const _default: (props: {
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | undefined;
    style?: React.CSSProperties | undefined;
    className?: string | undefined;
    tabIndex?: number | undefined;
}) => JSX.Element;
export default _default;
