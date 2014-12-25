/******** Produktliste ********
 * {
 *   @"name"        e.g. "bulla"           Links und Ordner"name", kleingeschrieben
 *   @"title":      e.g. "Bulb"            Echter Produkt"name", Sonderzeichen, Gross/Klein-Schreibung, Umlaute
 *   @"section":    e.g. "furniture"       Navigationsbereich (furniture, lightning, products)
 *   @"material":   e.g. "glass | metal"   Verwendete Materialien getrennt durch ein "|"
 *   @"dimensions": e.g. "90 | 120 | 160"  Abmessungen
 *   @"development": {                     Zusatzinfos
 *      @"purpose": e.g. "coat hook",      Verwendungszweck / nähere Beschreibung
 *      @"year"   : e.g. "2013"            Entwurfs / Herstellunsjahr
 *   },
 *   @"producers": [                       Produzenteninfos
 *     {
 *       @name:  e.g. "SCHÖNBUCH",       Name des Produzenten & Link
 *       @"url":   e.g. "http://www.schoenbuch.com/de/wohnen/interior-accessoires/garderobenhaken/bulb.html"
 *     }
 *   ],
 *   @"images":    e.g. [1,2,3,4,5,6]      Für 6 Fotos im Ordner "/images/bulla" mit numerierten Namen "01.jpg" bis "06.jpg"
 *   @"extras": {
 *     @"video":   e.g. "http://vimeo.com/76838325"
 *   }
 * },
 *******************************/


var products = [
  {
    "name":       "zet",
    "title":      "Zet",
    "section":    "furniture",
    "material":   "metal | wood",
    "dimensions": "744 | 920 | 360",
    "development": { "purpose": "shelf", "year"   : "2014" },
    "description": "Is a smart shelving system with a lightweight appearance. The whole shelf consists of 2 components only: the wooden u-shaped shelves and the metal frame construction. By assambling those two parts, you´re able to build several formations. Beside that the ZET shelving has an amazing stability.",
    "producers": [
      {
        "name": "_comming soon",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6]
  },
  {
    "name":       "roundabout",
    "title":      "RoundAbout",
    "section":    "furniture",
    "material":   "metal",
    "dimensions": "470 | 430",
    "development": { "purpose": "side table", "year"   : "2014" },
    "description": "The geometrical shape of this side table creates a strong graphical image. The components are welded – but not visible to the observer. That generates a magical and floating impression. The shape of the side table enables to place it beside a sofa.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6]
  },
  {
    "name":       "fju",
    "title":      "fju",
    "section":    "furniture",
    "material":   "wood",
    "dimensions": "900 | 450 | 130",
    "development": { "purpose": "desk", "year" : "2014" },
    "description": "Is a wallmounted and foldable desk. When folded down it serves as a small workspace. Folded up Fju changes it‘s appearence and transforms into a spacesaving storage shelf. You just put your stuff (laptop, ipad and books) in the case/ shelf underneath the desktop - et voilà.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6]
  },
  {
    "name":       "keep",
    "title":      "keep",
    "section":    "lightning",
    "material":   "metal",
    "dimensions": "280 | 95",
    "development": { "purpose": "wall lamp", "year" : "2014" },
    "description": "The idea of „keep“ is to combine a wall lamp with storage space. The shell-like shaped lamp offers the possibility to store little things like keys, glasses, etc. The light source is located behind the upper semicircle and scatters its light into the whole volume of the lamp – and its surroundings.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6]
  },
  {
    "name":       "cherry",
    "title":      "Cherry",
    "section":    "lightning",
    "material":   "wood | magnet",
    "dimensions": "220 | 95",
    "development": { "purpose": "pendant lamp", "year"   : "2013" },
    "description": "Cherry is a pendant lamp with a simple look. Due to the integrated magnet, the wood cylinder can be arranged very easily. The inspiration comes from a couple of cherries.",
    "producers": [
      {
        "name": "ESAILA",
        "url": "http://www.esaila.com/products/cherry"
      }
    ],
    "images": [1,2,3,4,5,6],
    "extras": {
      "video": "http://vimeo.com/76838325"
    }
  },
  {
    "name":       "luna",
    "title":      "luna",
    "section":    "lightning",
    "material":   "metal",
    "dimensions": "270 | 140",
    "development": { "purpose": "vase bowl", "year" : "2014" },
    "description": "This product connects decoration and aesthetics with function. Luna combines the qualities of a vase and a bowl. The top opens eccentric, since the centre of rotation is the vase. You can store your ‚Lieblingst&uuml;cke‘ under the beauty of a flower.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6]
  },
];

var products = (function(){
  products.forEach(function(product, index, products){
    var baseUrl = "#/what/product/";

    // if productdata match basic requirements enrich with
    // additional functionality
    if(typeof product === "object" && product.name) {
      product.baseImgPath = "images/" + product.name + "/";
      product.url     = baseUrl + product.name;

      // TODO: instead of iterate & push use js basic map/reduce functionality
      // [0,1,2] --> ["images/productname/0.jpg", "images/productname/1.jpg", "images/productname/2.jpg"]
      product.images  = function(imgArr){
        var imagePaths = [];

        imgArr.forEach(function(index){
          var img = "0" + index + ".jpg";
              imgPath = product.baseImgPath + img;

          imagePaths.push(imgPath);
        });

        return imagePaths;
      }(product.images || []);
    }

    // write back enriched product
    products[index] = product;
  });

  return products;
}(products || []));



// @linkSections = [
//   {
//     name  : "furniture",
//     links : {
//       name : "zed",
//       url  : "#/what/products/zed"
//     },
//     ...
//   },
//   ...
// ]
var linkSections = (function(products){
  var sections = [],
      sectionIndex = [],
      containsSection = function(sectionName) {
        return sectionIndex.indexOf(sectionName) >= 0;
      };

  // fill up the sections with links from products
  products.forEach(function(product, index, products){
    // don't allow multiple sections or wrong section type
    if (typeof product.section !== "string") {
      return false;
    }
    // push new sections
    if (product.section && !containsSection(product.section)) {
      sections.push({ name : product.section, links : []});
      sectionIndex.push(product.section);
    }

    // push link into section links
    sections[sectionIndex.indexOf(product.section)].links.push(
      {
        name  : product.name,
        url   : product.url,
        image : product.images[0] || null
      }
    );
  });

  return sections;
}(products)) || [];


