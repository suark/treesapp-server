interface LatLng {
    latitude: number
    longitude: number
}

export interface TreeMarker {
    title: string
    coordinate: LatLng
}

export interface TreeMarkerMap {
    [species: string]: Array<TreeMarker>
}