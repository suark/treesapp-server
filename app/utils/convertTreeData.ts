import { TreeMarker, TreeMarkerMap, TreeProperties } from '../types'
import { Point, Feature } from 'geojson'

const PROPERTIES = 'properties'
const SPECIES = 'species'
const GEOMETRY = 'geometry'
const COORDINATES = 'coordinates'

const isValidTree = (tree: any): tree is Feature<Point, TreeProperties> => {
    if (
        tree[PROPERTIES] != null &&
        tree[PROPERTIES][SPECIES] != null &&
        typeof tree[PROPERTIES][SPECIES] === 'string' &&
        tree[GEOMETRY] != null &&
        typeof tree[GEOMETRY] === 'object' &&
        tree[GEOMETRY][COORDINATES] != null &&
        Array.isArray(tree[GEOMETRY][COORDINATES]) &&
        tree[GEOMETRY][COORDINATES].length === 2
    ) {
        return true
    } else {
        return false
    }
}

export const convertTreeData = (trees: any): TreeMarkerMap => {
    let treeMarkerMap: TreeMarkerMap = {}
    if (trees.features != null && Array.isArray(trees.features)) {
        for (let index = 0; index < trees.features.length; index++) {
            const tree = trees.features[index]
            if (isValidTree(tree)) {
                const species = tree[PROPERTIES][SPECIES]
                const coordinates = tree[GEOMETRY][COORDINATES]
                const longitude = coordinates[0]
                const latitude = coordinates[1]
                const treeMarker: TreeMarker = {
                    species,
                    coordinate: {
                        longitude,
                        latitude,
                    }
                }
                if (treeMarkerMap[species] == null) {
                    treeMarkerMap[species] = []
                }
                treeMarkerMap[species].push(treeMarker)             
            }
        }
    }
    return treeMarkerMap
}
