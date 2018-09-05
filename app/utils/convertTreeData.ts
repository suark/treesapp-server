import { TreeMarker, TreeMarkerMap, TreeProperties } from '../types/types'
import { FeatureCollection, Point, Feature } from 'geojson';

const PROPERTY_NAME_SPECIES = 'species'
const PROPERTY_NAME_GEOMETRY = 'geometry'
const PROPERTY_NAME_COORDINATES = 'coordinates'

const isValidTree = (tree: any): tree is Feature<Point, TreeProperties> => {
    if (  //fix me properties does not contain geometry.
        tree.properties != null &&
        tree.properties[PROPERTY_NAME_SPECIES] != null &&
        typeof tree.properties[PROPERTY_NAME_SPECIES] === 'string' &&
        tree.properties[PROPERTY_NAME_GEOMETRY] != null &&
        typeof tree.properties[PROPERTY_NAME_GEOMETRY] === 'object' &&
        tree.properties[PROPERTY_NAME_GEOMETRY][PROPERTY_NAME_COORDINATES] != null &&
        Array.isArray(tree.properties[PROPERTY_NAME_GEOMETRY][PROPERTY_NAME_COORDINATES]) &&
        tree.properties[PROPERTY_NAME_GEOMETRY][PROPERTY_NAME_COORDINATES].length === 2
    ) {
        return true
    } else {
        console.log('invalid tree', tree)
        return false
    }
}

const convertTreeData = (trees: any): TreeMarkerMap => {
    console.log(trees)
    let treeMarkerMap: TreeMarkerMap = {}
    if (trees.features != null && Array.isArray(trees.features)) {
        for (let index = 0; index < trees.features.length; index++) {
            const tree = trees.features[index]
            if (isValidTree(tree)) {
                const treeMarker: TreeMarker = {
                    species: tree.properties[PROPERTY_NAME_SPECIES],
                    coordinate: {
                        longitude: tree.properties[PROPERTY_NAME_GEOMETRY][PROPERTY_NAME_COORDINATES][0],
                        latitude: tree.properties[PROPERTY_NAME_GEOMETRY][PROPERTY_NAME_COORDINATES][1]
                    }
                }                 
            }
        }
    }
    return treeMarkerMap
}

export default convertTreeData