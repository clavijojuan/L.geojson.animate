# L.geojson.animate
A leaflet plugin to use animation.css library in L.geoJSON path

### [DEMO](https://magical-salmiakki-ceb60a.netlify.app)

-----------------------------------------------------------------------------------

## Install

### NPM

```
npm i @clavijojuan/l.geojson.animate
```  

## Usage Example


### Create GeoJSON

```javascript

const geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -72.62643718297807,
          3.373145129411
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -78.16592396776628,
          2.906924574441902
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              -75.84545414243195,
              1.9330250737532424
            ],
            [
              -70.70290573798076,
              1.9330250737532424
            ],
            [
              -70.70290573798076,
              2.06129365468324
            ],
            [
              -75.84545414243195,
              2.06129365468324
            ],
            [
              -75.84545414243195,
              1.9330250737532424
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}

const geoJsonLayer = L.geoJSON(geojson).addTo(map);

```

### Implements

```javascript
geoJsonLayer.animate({
    type:'rotateOut',
    repeat: 'infinite',
    speed: 'slower',
    delay: undefined
})
```


### animate method

| Property | Type   | Required  | Description                         |
| ------------|--- | -------- | ----------------------------------------- |
| type | String | false | type of animation (see [animate.css documentation](https://animate.style/)) |
| repeat     | string or number | false     | Values: 'infinite', 1, 2, 3 |
| speed     | string | false     | Values: 'slow', 'slower, 'fast', 'faster' |
| delay     | undefined or string | false     | Values: '2s', '3s', '4s', '5s', undefined |


#### NOTE: Plugin only works with PATH of each layer in L.geoJSON, markers will not work.