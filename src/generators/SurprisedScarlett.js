/* jshint esversion: 9 */

const Canvas = require('canvas');

module.exports = function(req, res) {
  return new Promise(async (resolve, reject) => {
    if(!req.body.text) return reject('InvalidBody');
    
    const canvas = Canvas.createCanvas(518, 388);
    const ctx = canvas.getContext('2d');

    const bg = await Canvas.loadImage('./src/assets/SurprisedScarlettJohansson.jpg');
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    ctx.font = '40px sans-serif';
    ctx.fillStyle = '#000000';
    ctx.fillText(req.body.text, 10,35,500,50);

    let ready = canvas.toDataURL();

    return resolve(ready);
  });
};