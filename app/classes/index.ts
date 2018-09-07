import { TreeMarkerMap } from "../types"

export class TreeCache {
    private _lastUpdated: number
    private _data: TreeMarkerMap

    constructor() {
        this._lastUpdated = Date.now()
        this._data = {}
    }

    get lastUpdated(): number {
        return this._lastUpdated
    }
    
    get data(): TreeMarkerMap {
        return this._data
    }
    set data(newData: TreeMarkerMap) {
        this._lastUpdated = Date.now()
        this._data = newData
    }
}
