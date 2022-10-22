const { ShortUrl } = require("../../Models");
let Sequelize = require('sequelize');
module.exports = class ETURLController {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  async redirectoShortLink(req, res) {
    let input=req.params;
    if(typeof input.short_code=="undefined"){
      return res.render("errors/404");
    }
    // Instead of non worthy talks, can you please allow me some minutes
    let getShortLink=await ShortUrl.findOne({
      where : { short_code : input.short_code }
    });

    if(getShortLink==null){
      return res.render("errors/404");
    }
    await ShortUrl.update({
      counter: Sequelize.literal('counter + 1')
    },
    { 
      where: { id: getShortLink.id } 
    })

    return res.redirect(getShortLink.long_url);
  }
};
