var validateConfData = require('image-divider').utils.validateConfData;
var pathModule = require('path');

var ICON_DATA_LIST = require('./src/lib/icon-ids').ICON_DATA_LIST;


var DEST_ROOT = pathModule.join(__dirname, 'public/dist/icons');
var ICON_WIDTH = 32;
var ICON_HEIGHT = 32;
var ICON_SIZE = [ICON_WIDTH, ICON_HEIGHT];
var ICON_POS_MAP = {
  tiles: [ICON_HEIGHT * 3, ICON_WIDTH * 0],
  objects: [ICON_HEIGHT * 15, ICON_WIDTH * 0],
  characters: [ICON_HEIGHT * 22, ICON_WIDTH * 0],
  enemies: [ICON_HEIGHT * 28, ICON_WIDTH * 0],
  icons: [ICON_HEIGHT * 1, ICON_WIDTH * 16],
  animations: [ICON_HEIGHT * 7, ICON_WIDTH * 16],
  items: [ICON_HEIGHT * 12, ICON_WIDTH * 16]
};

/**
 * @param {string} sourceImagePath
 * @param {string} category - A key of the ICON_POS_MAP
 * @param {string} iconId
 * @param {number[]} cellIndex - [rowIndex, colIndex]
 * @return {{ src, pos, size, dest }}
 */
var mapIcon = function mapIcon(sourceImagePath, category, cellIndex, iconId) {
  var basePos = ICON_POS_MAP[category] || [0, 0];
  return {
    src: sourceImagePath,
    pos: [
      basePos[0] + cellIndex[0] * ICON_HEIGHT,
      basePos[1] + cellIndex[1] * ICON_WIDTH
    ],
    size: ICON_SIZE,
    dest: pathModule.join(DEST_ROOT, '/' + category + '/' + iconId + '.png')
  };
};

var icons = ICON_DATA_LIST.map(function(iconData) {
  return mapIcon.apply(null, iconData);
});

var conf = {
  images: icons
};
validateConfData(conf);


module.exports = conf;
