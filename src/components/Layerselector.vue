<template>
  <div id="cesiumContainer"></div>
  <div id="layerSelector">
    <h3>Layer Selector</h3>
    <div class="layer" v-for="(layer, index) in layers" :key="index">
      <img :src="layer.image" width="50px">
      <input type="radio" :value="layer.value" @click="switchLayer(layer.value)" :checked="index === 0" v-model="map"> {{ layer.name }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject, watchEffect,ref } from 'vue';
import { switchLayer } from '../jses/switchLayer.js';
const map = ref();
const layers = [
  { id: '1', name: 'GaoDe Map', value: 'gaode', image: '../assets/高德地图.png' },
  { id: '2', name: 'OpenStreetMap', value: 'openstreetmap', image: '../assets/1.jpg' },
  { id: '3', name: 'Tian Map', value: 'tianditu', image: '../assets/天地图.png' },
  { id: '4', name: 'Precipitation', value: 'precipitation', image: '../assets/2.jpg' },
  { id: '5', name: 'Night', value: 'night', image: '../assets/夜间灯光.png' },
  { id: '6', name: 'Bing Map', value: 'bing', image: '../assets/bing地图.png' }
];
// const viewer = inject('viewer');

// function switchLayer() {
//   const viewer = window.viewer;
//     if (viewer) {
//         viewer.imageryLayers.removeAll();
//         viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
//             url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=1780110dcac21ab0701cb693967a3e93",
//             layer: "tdtBasicLayer",
//             style: "default",
//             format: "image/jpeg",
//             tileMatrixSetID: "GoogleMapsCompatible",
//             show: false,
//         }));
//         viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
//             url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=1780110dcac21ab0701cb693967a3e93",
//             layer: "tdtAnnoLayer",
//             style: "default",
//             format: "image/jpeg",
//             tileMatrixSetID: "GoogleMapsCompatible",
//             show: false,
//         }));
//     } else {
//         console.error("Viewer instance not found");
//     }
// }
</script>


<style scoped>
  #layerSelector {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  h3 {
    margin-top: 0;
    font-size: 1.2em;
  }
  .layer{
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
  }
  img {
    vertical-align: middle;
  }
</style>
