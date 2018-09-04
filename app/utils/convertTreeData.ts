import { TreeMarker, TreeMarkerMap } from '../types/types'
import { FeatureCollection, Point } from 'geojson';

const PROPERTY_NAME_SPECIES: string = 'species'
const PROPERTY_NAME_GEOMETRY: string = 'geometry'
const PROPERTY_NAME_COORDINATES: string = 'coordinates'

const convertTreeData = (data: FeatureCollection<Point>): TreeMarkerMap => {
    console.log(data)
    let treeMarkerMap: TreeMarkerMap = {}
    if (data.features != null) {
        for (let point of data.features) {
            if (point.properties != null &&
                point.properties[PROPERTY_NAME_SPECIES] != null &&
                typeof point.properties[PROPERTY_NAME_SPECIES] === 'string') {
                const species: string = point.properties[PROPERTY_NAME_SPECIES]
                if (treeMarkerMap[species] == null) {
                    treeMarkerMap[species] = []
                }
                // if (condition) {
                    
                // }
            }
        }
    }
    return treeMarkerMap
}

let x = { "type": "Feature", "properties": { "OBJECTID": 1561348, "AssetID": "tree_1", "site_id": 1, "add_num": "3317", "add_str": "lakeridge blvd s", "park": " ", "zone_id": "south", "landuse": "blvd.standard", "site_typ": "T", "species": "linden littleleaf", "diameter": 5, "height": 3, "spread": 2, "trunks": 1, "LocValue": 75, "planted": 2007 }, "geometry": { "type": "Point", "coordinates": [-112.79209997597793, 49.67651123339239] } }

export default convertTreeData