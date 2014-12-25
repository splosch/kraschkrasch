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
            <div class="label"><span class="icon_arrow"></span></div>
            <div class="aniContainer">

              <ul class="productNav">
                {{#each linkSections}}
                  <li>
                    <h3> {{name}} </h3>
                    <ul>
                      {{#each links}}
                        <li>{{> hb_link}}</li>
                      {{/each}}
                    </ul>
                  </li>
                {{/each}}
              </ul>

            </div>
          </div>
        </div>
      </article>
      <nav id="nav_sections">{{> hb_nav_sections}}</nav>
    </div>
  </div>
</div>