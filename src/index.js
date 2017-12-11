import 'babel-polyfill'
import CanvasMap from './canvas-map'

let map=CanvasMap({
  textContainer:document.querySelector('.text'),
  mapSrc:'img/map52.svg',
  trailVisitedColor:'#66fcf1',
  fontPresentColor:'#0b0c10',
}).appendTo('.container');
