<template>
  <div id="cesiumContainer"></div>
  <Layerselector/> 
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue';
import Layerselector from './Layerselector.vue';
import {init} from '../jses/init.js'
onBeforeMount(() => {
      console.log("a");
    })
onMounted(() => {
  init();
  // Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0Y2U5MWRhOC0zYzdhLTRjMGItODkwNC02NzVmNGFmMTBkOWEiLCJpZCI6MjA1MjM5LCJpYXQiOjE3MTE2ODUwMjF9.RRfIFU8B-huDx7VQOLeAmMabtoIcIkA1m2SRaRYopUI';
  // const viewer = new Cesium.Viewer('cesiumContainer');
  // window.viewer = viewer;
  // viewer.camera.setView({
  //           destination: Cesium.Cartesian3.fromDegrees(120, 30, 15000000),
  //           orientation: {
  //           heading : Cesium.Math.toRadians(348.4202942851978),
  //           pitch : Cesium.Math.toRadians(-89.74026687972041),
  //           roll : Cesium.Math.toRadians(0)
  //       },
  //       complete:function callback() {
  //       }
  //       }); 
  // Cesium.CesiumTerrainProvider.fromIonAssetId(1, {
  //   requestWaterMask:true,
  //   requestVertexNormals:true,
  // }).then((terrainProvider) => {
  //   viewer.terrainProvider = terrainProvider;
  // }).catch((e) => {
  //   console.log(e);
  // });  
  // var gaodeProvider = new Cesium.UrlTemplateImageryProvider({
  //   url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
  //   credit: '高德地图',
  //   tilingScheme: new Cesium.WebMercatorTilingScheme(),
  //   maximumLevel: 18,
  // });
  // viewer.imageryLayers.addImageryProvider(gaodeProvider);
  // // provide('viewer', viewer);
});
</script>

<style scoped>
#cesiumContainer {
  height:100%;
  position: absolute;
  left: 0 ;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
