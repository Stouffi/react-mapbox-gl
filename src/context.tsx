import * as React from 'react';
import * as MapboxGl from 'mapbox-gl';

export const MapContext = React.createContext(undefined) as React.Context<
  MapboxGl.Map | undefined
>;

export function withMap<P>(
  Component: React.ComponentClass<P & { map: MapboxGl.Map }>
) {
  return function MappedComponent(props: P) {
    return (
      <MapContext.Consumer>
        {map => (map === undefined ? null : <Component map={map} {...props} />)}
      </MapContext.Consumer>
    );
  };
}
