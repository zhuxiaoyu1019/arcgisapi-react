import Map from '@arcgis/core/Map'
import Color from "@arcgis/core/Color"
import SceneView from "@arcgis/core/views/SceneView"
import SceneLayer from '@arcgis/core/layers/SceneLayer'
// import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import MeshSymbol3D from '@arcgis/core/symbols/MeshSymbol3D'
import * as promiseUtils from '@arcgis/core/core/promiseUtils'
import SolidEdges3D from '@arcgis/core/symbols/edges/SolidEdges3D'
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer'
import FillSymbol3DLayer from '@arcgis/core/symbols/FillSymbol3DLayer'

import Search from '@arcgis/core/widgets/Search'

const ArcGISMap = (basemap, ref) => {
    const template = {
        title: "{NAME}",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "ElectricUse",
                        label: "Electricity Use kBTU",
                        format: {
                            digitSeparator: true,
                            places: 0
                        }
                    },
                    {
                        fieldName: "StarScore",
                        label: "Energy Star Score"
                    }
                ]
            }
        ]
    };

    const buildings = new SceneLayer({
        url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/NYC_EnergyUse/SceneServer/layers/0',
        opacity: 1,
        popupEnabled: true,
        popupTemplate: template,
        renderer: new SimpleRenderer({
            symbol: new MeshSymbol3D({
                symbolLayers: [
                    new FillSymbol3DLayer({
                        material: {
                            color: new Color([200, 200, 200]),
                            colorMixMode: "replace"
                        },
                        edges: new SolidEdges3D({
                            color: new Color([100, 100, 100, 0.5])
                        })
                    })
                ]
            })
        })
    });

    // const infoLayer = new FeatureLayer({
    //     url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/NYC_EnergyUse/FeatureServer/0',
    // })

    const map = new Map({
        basemap,
        layers: [buildings]
    });

    const view = new SceneView({
        container: ref,
        map,
        qualityProfile: "high",
        camera: {
            position: [-73.98564294432742, 40.748586782824624, 601.67648],
            heading: 330.47,
            tilt: 64.02
        },
        environment: {
            lighting: {
                directShadowsEnabled: true
            }
        },
    })

    const search = new Search({
        view,
        // sources: [buildings],
        // popupTemplate: template
    });

    view.ui.add(search, "top-right");

    // async function getInfo(building) {
    //     const objectId = building.getObjectId();
    //     const query = infoLayer.createQuery();
    //     query.objectIds = [objectId];

    //     const result = await infoLayer.queryFeatures(query);
    //     console.log(result.features[0])
    // }

    view.when().then(async () => {
        const buildingsLV = await view.whenLayerView(buildings);
        let highlight = null;
        view.on(
            "click",
            promiseUtils.debounce(async (e) => {
                const ht = await view.hitTest(e, {
                    include: [buildings]
                });
                if (highlight) {
                    highlight.remove();
                    highlight = null;
                }
                if (ht.results.length > 0) {
                    const graphic = ht.results[0].graphic;
                    if (graphic) {
                        highlight = buildingsLV.highlight(graphic);
                    }
                    console.log(graphic)
                    // await getInfo(graphic);
                }
            })
        );
    });

    return view
}

export default ArcGISMap
