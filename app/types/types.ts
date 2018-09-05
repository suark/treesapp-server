interface LatLng {
    latitude: number
    longitude: number
}

export interface TreeMarker {
    species: string
    coordinate: LatLng
}

export interface TreeMarkerMap {
    [species: string]: Array<TreeMarker>
}

export interface TreeProperties {
    species: string,
}