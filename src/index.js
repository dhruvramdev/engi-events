import 'babel-polyfill'
import CanvasMap from './canvas-map'

let map=CanvasMap({
  textContainer:document.querySelector('.text'),
  mapSrc:'img/map52.svg',
  trailVisitedColor:'#f00',
  fontPresentColor:'#f00',
}).appendTo('.container');
