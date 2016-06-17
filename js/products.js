var kkc = kkc || {};

/******** Produktliste ********
 * {
 *   @"name"        e.g. "bulla"           Links und Ordner"name", kleingeschrieben
 *   @"title":      e.g. "Bulb"            Echter Produkt"name", Sonderzeichen, Gross/Klein-Schreibung, Umlaute
 *   @"section":    e.g. "furniture"       Navigationsbereich (furniture, lighting, products)
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
 *   },
 *   @"download":   e.g. "https://drive.google.com/folderview?id=0B_DmGn8prUUIdnUxQmdWREZjdms&usp=sharing"
 * },
 *******************************/

kkc.products = [
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
    "images": [1,2,3,4,5,6],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIQjFDcWpnemJLc0E&usp=sharing"
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
    "images": [1,2,3,4,5,6],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIYS1kaTdCTVF3ems&usp=sharing"
  },
  {
    "name":       "fju",
    "title":      "Fju",
    "section":    "furniture",
    "material":   "wood",
    "dimensions": "900 | 450 | 130",
    "development": { "purpose": "desk", "year" : "2014" },
    "description": "Is a wallmounted and foldable desk. When folded down it serves as a small workspace. Folded up Fju changes it‘s appearence and transforms into a spacesaving storage shelf. You just put your stuff (laptop, ipad and books) in the case/ shelf underneath the desktop - et voilà.",
    "producers": [
      {
        "name": "_comming soon",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUINlhDNUlkUmNpVE0&usp=sharing"
  },
  {
    "name":       "raft",
    "title":      "Raft",
    "section":    "furniture",
    "material":   "wood | metal",
    "dimensions": "1000 | 260 | 35",
    "development": { "purpose": "shelf", "year" : "2014" },
    "description": "The inspiration for raft - as the name suggests - is a wooden raft with its round timber. Due to its round shape, the shelf has a fascinating haptics or rather look. The bookend can be perfectly connected to the shape of the round timber.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIZFdYN1ZtQWd0V28&usp=sharing"
  },
  {
    "name":       "plank",
    "title":      "Hide&Park",
    "section":    "furniture",
    "material":   "wood",
    "dimensions": "450 | 1000 | 1600",
    "development": { "purpose": "swardrobe, storage", "year" : "2014" },
    "description": "Hide&Park is a wardrobe with a very simple look but a lot of functionality. It shows the pure beauty of the wooden material in a very minimalistic way. As common for a wardrobe you can hang up your clothes, but Hide&Park also leaves space to store your daily stuff (wallet, phone, keys...) on top of it.",
    "producers": [
      {
        "name": "ZEITRAUM",
        "url": "http://www.zeitraum-moebel.de/kollektion/hide-park"
      }
    ],
    "images": [1,2,3,4,5,6],
    "extras": {
      "video" : "https://www.youtube.com/watch?v=35WNFOKZh0s"
    },
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIRWpNNHJFaENVZXc&usp=sharing"
  },
  {
    "name":       "check",
    "title":      "Check",
    "section":    "furniture",
    "material":   "metal | mirror",
    "dimensions": "1800 | 415",
    "development": { "purpose": "floor mirror", "year" : "2013" },
    "description": "is a wardrobe/ mirror which leans against the wall. The triangle on the top allows to hang clothes up, or to throw them on top. Due to the possibilty of leaning it into different directions, its function is always defined by the user.",
    "producers": [
      {
        "name": "MENU",
        "url": "http://menu.as/"
      }
    ],
    "images": [1,2,3,4,5,6],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUISWgwVVJDNHNQVzA&usp=sharing"
  },
  {
    "name":       "scoop_table",
    "title":      "Scoop",
    "section":    "furniture",
    "material":   "wood",
    "dimensions": "740 | 800 | 800",
    "development": { "purpose": "table", "year" : "2013" },
    "description": "combines traditional handcraft with industrial process. Its simple construction provides the opportunity to play with dimension. The table-legs are inspired by the shape of wooden scoops.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIaFBoNUt1dS1pMW8&usp=sharing"
  },
  {
    "name":       "scoop_chair",
    "title":      "Scoop",
    "section":    "furniture",
    "material":   "wood",
    "dimensions": "800 | 440 | 400",
    "development": { "purpose": "chair", "year" : "2013" },
    "description": "combines traditional craft with industrial process. The chair-legs are inspired by the shape of wooden scoops. Its straight shape gives it an elegant appearance and makes it versatile.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIYUhzZUVwSmVRVzQ&usp=sharing"
  },
  {
    "name":       "anna_lena",
    "title":      "Bubka",
    "section":    "furniture",
    "material":   "metal",
    "dimensions": "2000 | 30",
    "development": { "purpose": "coatrack", "year" : "2011" },
    "description": "is a wardrobe which leans against the wall. It seems the pipes, which are made of aluminium, cross in one point. Through that joint the wardrobe can be dismantled. The minimalist design has a graphic presentation.",
    "producers": [
      {
        "name": "MAGAZIN",
        "url": "http://www.magazin.com/garderobe-bubka-p1463692/?c=194744"
      }
    ],
    "images": ["anna_lena_01.jpg","anna_lena_02.jpg","anna_lena_03.jpg","anna_lena_04.jpg","anna_lena_05.jpg","anna_lena_06.jpg"],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIaTEyWVVRMnFsVk0&usp=sharing"
  },
  {
    "name":       "pinokkio",
    "title":      "Höninger",
    "section":    "furniture",
    "material":   "wood | metal",
    "dimensions": "2000 | 730 | 680<br>2000 | 430 | 300",
    "development": { "purpose": "table bench", "year" : "2011" },
    "description": "The table-/bench-set is made of solid wood. The legs are fixed through anodized joints. Inspiration for this piece of furniture comes from the scandinavian design, especially by the 50`s and 60`s.",
    "producers": [
      {
        "name": "MAGAZIN",
        "url": "http://www.magazin.com/tisch-bank-hoeninger-p1462880/?a=42288"
      }
    ],
    "images": ["pinokkio_01.jpg","pinokkio_02.jpg","pinokkio_03.jpg","pinokkio_04.jpg","pinokkio_05.jpg","pinokkio_06.jpg"],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIVEFBNjg3ZWtiYUU&usp=sharing"
  },
  {
    "name":       "pina_side_table",
    "title":      "Pina",
    "section":    "furniture",
    "material":   "wood",
    "dimensions": "430 | 400",
    "development": { "purpose": "side table", "year" : "2011" },
    "description": "is characterized by its material and its certain appearance. Modern craftmanship gives the side table its special character. The color stained surface adds what is needed for a young and fresh look.",
    "producers": [
      {
        "name": "HUBERT FELDKIRCHER",
        "url": "http://www.hubert-feldkircher.at/cms/index.php?option=com_content&view=article&id=29&Itemid=62&lang=de"
      }
    ],
    "images": ["pina_side_table_01.jpg","pina_side_table_02.jpg","pina_side_table_03.jpg","pina_side_table_04.jpg","pina_side_table_05.jpg","pina_side_table_06.jpg"],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUITm45a0p0T2ZjMEE&usp=sharing"
  },
  {
    "name":       "tome",
    "title":      "Tome",
    "section":    "furniture",
    "material":   "wood",
    "dimensions": "800 | 590 | 500",
    "development": { "purpose": "chair", "year" : "2012" },
    "description": "is a chair with a high-quality crafted character. Due to its soft transitions Tome reminds with its backrest on the characteristic of plastic chairs. Tome combines aesthetics with seating comfort. The chair is inspired by scandinavian design, especially from the 50 ́s and 60 ́s.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": ["tome_chair_01.jpg","tome_chair_02.jpg","tome_chair_03.jpg","tome_chair_04.jpg","tome_chair_05.jpg","tome_chair_06.jpg"],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIUFk5ZW1yYXg2Wmc&usp=sharing"
  },
  {
    "name":       "tamp_lable",
    "title":      "Tamp&Lable",
    "section":    "furniture",
    "material":   "wood | composite panel",
    "dimensions": "1600 | 760 | 750",
    "development": { "purpose": "writing desk", "year" : "2010" },
    "description": "is a lamp and a table in one fitment. This furniture combines a writing desk with a desk lamp. The pull switch is a fifties excerp. The lamp is 360° pivotable and you can plug in the light arm on both sides.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": ["tamp_lable_01.jpg","tamp_lable_02.jpg","tamp_lable_03.jpg","tamp_lable_04.jpg","tamp_lable_05.jpg","tamp_lable_06.jpg"],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIa3FqR3FycTBEOHc&usp=sharing"
  },
  {
    "name":       "cherrytable",
    "title":      "Cherry",
    "section":    "furniture",
    "material":   "wood | magnet | metal",
    "dimensions": "400 | 150",
    "development": { "purpose": "table lamp", "year" : "2014" },
    "description": "The cherry table lamp has a clean and simple look along with a metal cylinder base. The lamp features a hidden magnet allowing the wood cylinder to grab the metal base easily.",
    "producers": [
      {
        "name": "ESAILA",
        "url": "http://www.esaila.com/cherry-table-lamp"
      }
    ],
    "images": [1,2,3,4,5,6]
  },
  {
    "name":       "keep",
    "title":      "Keep",
    "section":    "lighting",
    "material":   "metal",
    "dimensions": "280 | 95",
    "development": { "purpose": "wall lamp", "year" : "2014" },
    "description": "The idea of „keep“ is to combine a wall lamp with storage space. The shell-like shaped lamp offers the possibility to store little things like keys, glasses, etc. The light source is located behind the upper semicircle and scatters its light into the whole volume of the lamp – and its surroundings.",
    "producers": [
      {
        "name": "_comming soon",
        "url": null
      }
    ],
    "images": ["keep_01.jpg","keep_02.jpg","keep_03.jpg","keep_04.jpg","keep_05.jpg","keep_06.jpg"],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIdnUxQmdWREZjdms&usp=sharing"
  },
  {
    "name":       "cherry",
    "title":      "Cherry",
    "section":    "lighting",
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
    },
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUId3lsV1BOZWI2aWM&usp=sharing"
  },
  {
    "name":       "konichiwa",
    "title":      "Konichiwa",
    "section":    "lighting",
    "material":   "metal",
    "dimensions": "231 | 162 | 70",
    "development": { "purpose": "table lamp", "year": "2014" },
    "description": "is a geometrical table lamp with a straight forward and almost simple look. A solid steel shaft has been deformed through heating. The powercable goes through the kink and all the way down to the bottom.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6],
    "extras": {
      "video": "http://www.youtube.com/watch?v=K8jav3ViIGA"
    },
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIQ0FlZTl6bmM1dTQ&usp=sharing"
  },
  {
    "name":       "industrial",
    "title":      "Industrial",
    "section":    "lighting",
    "material":   "glass | wood",
    "dimensions": "145 | 260 | 360",
    "development": { "purpose": "pendant lamp", "year": "2013" },
    "description": "is a lamp family inspired by the shape of old industrial lamps. They are made out of hand blown glass. The shades are carried by a wooden cone. The different types of lamp can be combined with each other.",
    "producers": [
      {
        "name": "DREIZEHNGRAD",
        "url": "http://www.dreizehngrad.de/pages-de/index.php"
      }
    ],
    "images": [1,2,3,4,5,6],
    "extras": {
      "notice": "Interior Innovation Award 2014"
    },
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIWTI4bzQtTS03WDg&usp=sharing"
  },
  {
    "name":       "kalimero",
    "title":      "Cap",
    "section":    "lighting",
    "material":   "magnet",
    "dimensions": "1450 | 500 | 360",
    "development": { "purpose": "table lamp", "year": "2012" },
    "description": "is a floor and a table lamp. The lampshade is fixed on the globe through a spring steel clip, so it is possible to pan it in nearly every direction. The lamp consists of 3 parts... the lamp stand, the lampshade and the tube with bulb and fitting – Visually so simple and highly-technical at the same time...",
    "producers": [
      {
        "name": "NORMANN COPENHAGEN",
        "url": "http://www.normann-copenhagen.com/products/cap-tablelamp?v=505043"
      }
    ],
    "images": ["kalimero_01.jpg","kalimero_02.jpg","kalimero_03.jpg","kalimero_04.jpg","kalimero_05.jpg","kalimero_06.jpg"],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIdkFQam9qSW1jclk&usp=sharing"
  },
  {
    "name":       "pina_table_lamp",
    "title":      "Pina",
    "section":    "lighting",
    "material":   "wood | metal",
    "dimensions": "420 | 400",
    "development": { "purpose": "table lamp", "year": "2012" },
    "description": "is a dimmable lamp. The light just shines through a small ring. The combination of a light foot and a heavy lamp shade is both, elegant and eye catching.",
    "producers": [
      {
        "name": "_comming soon",
        "url": null
      }
    ],
    "images": ["pina_table_lamp_01.jpg","pina_table_lamp_02.jpg","pina_table_lamp_03.jpg","pina_table_lamp_04.jpg","pina_table_lamp_05.jpg","pina_table_lamp_06.jpg"],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIWjdLMWRZOEVJZ0E&usp=sharing"
  },
  {
    "name":       "flachmann",
    "title":      "Flachmann",
    "section":    "lighting",
    "material":   "metal",
    "dimensions": "430",
    "development": { "purpose": "pendant lamp", "year": "2011" },
    "description": "is a pendant lamp which impresses through its simplicity. All it takes is a lampshade a lampholder and a bulb - that‘s it.",
    "producers": [
      {
        "name": "T&Oslash;NDEL",
        "url": "http://toendel.de/index.php?option=com_virtuemart&page=shop.browse&category_id=2&Itemid=63"
      }
    ],
    "images": ["flachmann_01.jpg","flachmann_02.jpg","flachmann_03.jpg","flachmann_04.jpg","flachmann_05.jpg","flachmann_06.jpg"],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIeHNfemtxRURDWUk&usp=sharing"
  },
  {
    "name":       "candleblocks",
    "title":      "Candleblocks",
    "section":    "products",
    "material":   "ceramic",
    "dimensions": "85 | 110 | 85",
    "development": { "purpose": "candleholder", "year" : "2014" },
    "description": "The candleblocks are playful and fun objects. Due to distinct but related shapes, they can be arranged and decorated to an unlimited extent. Matching colours have been chosen to offer countless opportunities for your decorating ideas!",
    "producers": [
      {
        "name": "BOLIA",
        "url": "http://www.bolia.com/en-us/designers/kaschkasch/24-459-01_5470862"
      }
    ],
    "images": [1,2,3,4,5,6]
  },
  {
    "name":       "luna",
    "title":      "Luna",
    "section":    "products",
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
    "images": [1,2,3,4,5,6],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIYjV6UzBwb2RfcTA&usp=sharing"
  },
  {
    "name":       "bulla",
    "title":      "Bulb",
    "section":    "products",
    "material":   "glass | metal",
    "dimensions": "90 | 120 | 160",
    "development": { "purpose": "coat hook", "year" : "2013" },
    "description": "are handblown glass hooks. Different sizes and colours decorate the wall and help you organize.",
    "producers": [
      {
        "name": "SCH&Ouml;NBUCH",
        "url": "http://www.schoenbuch.com/de/wohnen/interior-accessoires/garderobenhaken/bulb.html"
      }
    ],
    "images": [1,2,3,4,5,6],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUILTRkMUtHVm9aT1k&usp=sharing"
  },
  {
    "name":       "bonfire",
    "title":      "Bonfire",
    "section":    "products",
    "material":   "silicone | magnet",
    "dimensions": "150 | 15",
    "development": { "purpose": "trivet", "year" : "2013" },
    "description": "Is a playful trivet inspired by branches used for a bonfire. The two pieces connect due to integrated magnets. The angular outline ensures great stability for pans and pots. Using the trivet feels like sitting around a cosy bonfire.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": [1,2,3,4,5,6],
    "extras": {
      "video": "http://www.youtube.com/watch?v=cF6M45Q2Iqg&feature=youtu.be"
    },
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIcEo0ejNxOG9rakU&usp=sharing"
  },
  {
    "name":       "hopper_boxes",
    "title":      "Hopper",
    "section":    "products",
    "material":   "wood",
    "dimensions": "220",
    "development": { "purpose": "boxes", "year": "2012" },
    "description": "are an accessory series of boxes consisting of stacked cylinders in different heights. The gently projecting cylinders are considering functional and aesthetically aspects. The project is inspired by the traditional japanese wappa bowl.",
    "producers": [
      {
        "name": "_free to edition",
        "url": null
      }
    ],
    "images": ["hopper_boxes_01.jpg","hopper_boxes_02.jpg","hopper_boxes_03.jpg","hopper_boxes_04.jpg","hopper_boxes_05.jpg","hopper_boxes_06.jpg"],
    "download": "https://drive.google.com/folderview?id=0B_DmGn8prUUIYV9TalVUckNzcnc&usp=sharing"
  }
];

kkc.products = (
  function(list){
    "use strict";

    var prod = {};

    // manipulate product data
    list.forEach(function(product, index, list){
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

          imgArr.forEach(function(image){
            var img = typeof image === "string" ? image : ( "0" + image + ".jpg" ),
                imgPath = product.baseImgPath + img;

            imagePaths.push(imgPath);
          });

          return imagePaths;
        }(product.images || []);
      }

      // write back enriched product
      list[index] = product;
    });


    // products interface to request products
    prod.all = list;
    prod.sections = function(list){
      var sections = [],
          sectionIndex = [],
          containsSection = function(sectionName) {
            return sectionIndex.indexOf(sectionName) >= 0;
          };

      // fill up the sections with links from list
      list.forEach(function(product){
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
            title : product.title,
            name  : product.name,
            url   : product.url,
            image : product.images[0] || null,
            download: product.download
          }
        );
      });

      return sections;
    }(list);

    prod.indexOf = function (productName) {
      var foundIndex = null;
      list.some(function(listItem, index){
        if (listItem.name && listItem.name === productName){
          foundIndex = index;

          // found! --> end .some()
          return true;
        }
      });

      return foundIndex;
    };

    prod.withName = function(productName) {
      var index = prod.indexOf(productName);

      return list[index] || null;
    };

    prod.nextTo = function(productName) {
      var currentIndex = prod.indexOf(productName),
          nextIndex = currentIndex === list.length - 1 ? 0 : currentIndex + 1;

      return list[nextIndex] || null ;
    };

    prod.previousTo = function(productName) {
      var currentIndex = prod.indexOf(productName),
          previousIndex = currentIndex === 0 ? list.length - 1 : currentIndex - 1;

      return list[previousIndex] || null ;
    };

    return prod;
  }(kkc.products || [])
);
