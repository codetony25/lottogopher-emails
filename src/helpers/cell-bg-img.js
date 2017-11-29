module.exports = function(options) {
  // Trim Non-Numberic Chracters
  String.prototype.trimUnit = function() {
    return this.replace(/\D/g, "");
  };

  // Variables & Options
  var src = options.hash.src,
    bgcolor = options.hash.bgcolor,
    style = options.hash.style,
    classes = options.hash.classes,
    imgwidth = options.hash.imgwidth,
    imgheight = options.hash.imgheight,
    style = options.hash.style;

  // Set Undefined Options
  if (typeof src === "undefined") src = "";
  if (typeof style === "undefined") style = "";
  if (typeof bgcolor === "undefined") bgcolor = "";
  if (typeof classes === "undefined") classes = "";
  if (typeof imgwidth === "undefined") imgwidth = "";
  if (typeof imgheight === "undefined") imgheight = "";

  // HTML Output
  return `<table class="${
    classes
  }" cellpadding="0" cellspacing="0" border="0" height="${imgheight}" style="${
    style
  }" width="100%">
    <tr>
        <td background="${src}" bgcolor="${
    bgcolor
  }" style="background-repeat: no-repeat; background-position: center center;" valign="middle" width="100%">
            <div>
                ${options.fn(this)}
            </div>
        </td>
    </tr>
  `;
};
