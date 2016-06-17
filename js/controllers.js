var kkc = kkc || {};

// TODO resolve tight dependency to products
kkc.products = kkc.products || { sections : null};

/*
 *  Application routing via sammyjs (http://sammyjs.org/)
 *  url scheme:
 *  main section #/:section
 *  product page #/:section/:product
 *  main_content_area id = 'main' --> now sammy knows whats the main content section (equal to this.element_selector = '#main'; within sammy.app())
 */
kkc.controller = {
  // inside a controller "this" reffers to the sammy context
  startpage : function(context) {
    var section = "home",
        data = context.app.getBaseDataForSection(section),
        randomImage = function (list) {
          var randomListItem;

          randomListItem = Math.floor(Math.random()*list.length);
          randomListItem = randomListItem < (list.length-1) ? randomListItem : (list.length-1);

          return list[randomListItem] || null;
        }([ "IMG_1.JPG",
            "IMG_2.JPG",
            "IMG_3.JPG",
            "IMG_4.JPG",
            "IMG_5.JPG",
            "IMG_6.JPG",
            "IMG_7.JPG",
            "IMG_8.JPG",
            "IMG_9.JPG",
            "IMG_10.JPG",
            "IMG_11.JPG",
            "IMG_12.JPG",
            "IMG_13.JPG" ]);

    data.main_image_url = "images/start/" + randomImage;

    // clear the main area
    context.app.swap('');

    // add main layout on main element
    context.partial('templates/hb_startpage.hbrs', { data : data });
    //context.partial('hb_startpage.hbrs', { data : data }).appendTo(context.$element());
    //context.render(Handlebars.templates['hb_startpage.hbrs'], { data : data }).appendTo(context.$element());
  },

  what : function(context, options) {
    var section = "what",
        showAll = options && options.showAll;
        data = context.app.getBaseDataForSection(section),
        imagelist = function(products){
          var images = [];
          products.all.forEach(function(product){
            images.push({ src: product.images[0], name: product.name});
          });

          return images;
        }(kkc.products);

    data.linkSections = kkc.products.sections || [];
    data.main_image_url = "images/what/what.jpg";
    data.showAll = options.showAll;

    data.slider = {
      imagesWithName : imagelist
    };

    // clear the main area
    context.app.swap('');

    context.render('hb_page_what.hbrs', data).appendTo(context.$element());
  },

  whatProduct : function(context) {
    var section     = "what",
        data        = context.app.getBaseDataForSection(section),
        productName = context.params['productname'],
        product     = kkc.products.withName(productName);

    data.product         = product;
    data.nextProduct     = kkc.products.nextTo(productName);
    data.previousProduct = kkc.products.previousTo(productName);
    data.nav_sections    = context.app.navSections;

    data.slider = {
      images : product.images
    };

    // clear the main area
    context.app.swap('');

    context.render('hb_page_product.hbrs', data).appendTo(context.$element());
  },

  who : function(context) {
    var section = "who",
        data = context.app.getBaseDataForSection(section);

    data.slider = {
      images : [
        "images/who/01.jpg",
        "images/who/02.jpg",
        "images/who/03.jpg",
        "images/who/04.jpg",
        "images/who/05.jpg",
        "images/who/06.jpg"
      ]
    };

    // clear the main area
    context.app.swap('');

    context.render('hb_page_who.hbrs', data).appendTo(context.$element());
  },

  when : function(context) {
    var section = "when",
        data = context.app.getBaseDataForSection(section);

    data.slider = {
      images : [
        "images/when/01.jpg",
        "images/when/02.jpg",
        "images/when/03.jpg",
        "images/when/04.jpg",
        "images/when/05.jpg",
        "images/when/06.jpg"
      ]
    };

    // clear the main area
    context.app.swap('');

    context.render('hb_page_when.hbrs', data).appendTo(context.$element());
  },

  where : function(context) {
    var section = "where",
        data = context.app.getBaseDataForSection(section);

    data.slider = {
      images : [
        "images/where/01.jpg",
        "images/where/02.jpg",
        "images/where/03.jpg",
        "images/where/04.jpg",
        "images/where/05.jpg",
        "images/where/06.jpg"
      ]
    };

    // clear the main area
    context.app.swap('');

    Handlebars.templates['hb_page_where.hbrs'](context, data).appendTo(context.$element());
  },

  download : function(context) {
    var section = "download",
        data = context.app.getBaseDataForSection(section);

    data.linkSections = kkc.products.sections || [];
    data.main_image_url = "images/where/01.jpg";

    // clear the main area
    context.app.swap('');

    context.render('hb_page_download.hbrs', data).appendTo(context.$element());
  }
};
