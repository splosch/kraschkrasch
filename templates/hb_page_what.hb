<div id="container" class="{{section_class}}">
  <div class="content centeringContainer">
    <div id="main" class="centered">
      <header>
        {{#if headline }}<h1 class="invisible">{{headline}}</h1>{{/if}}
        <a href="#/"><img src="images/logo.png"/></a>
      </header>
      <article id="main-area">
        {{> hb_startbild}}

        <div id="detailsBox" class="detailsWrapper collapsed">
          <div class="details">
            <a href="#" class="label"><span class="icon_arrow"></span></a>
            <div class="aniContainer">

              <ul class="productNav">
                <li> <h3> Furniture </h3>
                  <ul>
                    {{#each furniture_links}}
                      <li>{{> hb_link}}</li>
                    {{/each}}
                  </ul>
                </li>

                <li> <h3> Lighting </h3>
                  <ul>
                    {{#each lightning_links}}
                      <li>{{> hb_link}}</li>
                    {{/each}}
                  </ul>
                </li>

                <li> <h3> Products </h3>
                  <ul>
                    {{#each other_product_links}}
                      <li>{{> hb_link}}</li>
                    {{/each}}
                  </ul>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </article>
      <nav id="nav_sections">{{> hb_nav_sections}}</nav>
    </div>
  </div>
</div>