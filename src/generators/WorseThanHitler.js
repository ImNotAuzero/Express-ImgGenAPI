/* jshint esversion: 9 */

const Canvas = require('canvas');

module.exports = function(req, res) {
  return new Promise(async (resolve, reject) => {
    if(!req.body.avatar) return reject('NoAvatarURL');
    
    const canvas = Canvas.createCanvas(259, 194);
    const ctx = canvas.getContext('2d');

    const bg = await Canvas.loadImage('./src/assets/WorseThanHitler.jpg');
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(req.body.avatar);
    ctx.drawImage(avatar, 24,17,78,90);
    let ready = canvas.toDataURL();

    return resolve(ready);
  });
};