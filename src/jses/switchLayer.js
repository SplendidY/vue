import { getViewer } from "./init";
function switchLayer(layer) {
    const viewer = getViewer();
    console.log("b")
    viewer.imageryLayers.removeAll();
    if (layer === 'openstreetmap') {
      const osmProvider = new Cesium.OpenStreetMapImageryProvider({
        url:"https://tile.openstreetmap.org/", 
      });
    viewer.imageryLayers.addImageryProvider(osmProvider);
    }
    else if (layer === 'gaode') {
      var gaodeProvider = new Cesium.UrlTemplateImageryProvider({
        url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
        credit: '高德地图',
        tilingScheme: new Cesium.WebMercatorTilingScheme(),
        maximumLevel: 18,
      });
      viewer.imageryLayers.addImageryProvider(gaodeProvider);
    }
    else if (layer === 'tianditu') {
      viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
        url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=1780110dcac21ab0701cb693967a3e93",
        layer: "tdtBasicLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible",
        show: false,
      }));
      viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
        url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=1780110dcac21ab0701cb693967a3e93",
        layer: "tdtAnnoLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible",
        show: false,
      }));
    }
    else if (layer === 'precipitation') {
      var provider = new Cesium.WebMapServiceImageryProvider({
        url:'http://localhost:8080/geoserver/nurc/wms',
        layers:'nurc:Arc_Sample',
        parameters:{
          service: 'WMS',
          format:'image/png',
          transparent: true,
        }
      });
      viewer.imageryLayers.addImageryProvider(provider);
    } 
    else if (layer === 'night') {
      const ionLayer = Cesium.ImageryLayer.fromProviderAsync(
        Cesium.IonImageryProvider.fromAssetId(3812)
      );
        viewer.imageryLayers.add(ionLayer);
    } 
    else if (layer === 'bing') {
      const ionLayer = Cesium.ImageryLayer.fromProviderAsync(
        Cesium.IonImageryProvider.fromAssetId(3)
      );
        viewer.imageryLayers.add(ionLayer);
    }
}
export {
    switchLayer
}