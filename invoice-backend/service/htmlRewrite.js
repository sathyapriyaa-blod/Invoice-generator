const fs = require("fs");
const { parse , stringify } = require("himalaya");

/**
 * Returns the HTML File in a form of a list of JSON objects.
 * 
 * [
 *      {   
 *          "type":"String",
 *          "tagName":"String",  
 *          "attributes":[],
 *          "children":[]
 *      }
 * ]
 *
 * @returns {JSON} conversion of input HTML.
 */

const htmltoJson = async () => {
  const html = await fs.readFileSync("template.html", { encoding: "utf8" });
  const json = parse(html);
  console.log("👉", json);
  return json;
};

const htmlRewrite = async () => {
  const html = await fs.readFileSync("template.html", { encoding: "utf8" });
  const json = parse(html);
  console.log("👉", json);
  await fs.writeFileSync('template.html', stringify(json));
  return "Success"
  
};

module.exports = {
  htmltoJson,
  htmlRewrite
};
