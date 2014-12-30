<div id="container" class="{{section_class}}">
  <div class="content centeringContainer">
    <div id="main" class="centered">
      <header>
        {{#if headline }}<h1 class="invisible">{{headline}}</h1>{{/if}}
        <a href="#/"><img src="images/logo.png"/></a>
      </header>
      <article id="main-area">

        {{> hb_visual this}}

        <div id="detailsBox" class="detailsWrapper collapsed">
          <div class="details">
            <div class="label"><span class="icon_arrow"></span></div>

            <div class="aniContainer">
                <a class="follow backlink" href="{{nav_sections.what.url}}#detailsBox">back to products</a>

                <h2>{{product.title}}</h2>
                <p><i>{{product.development.purpose}} | {{product.development.year}}</i></p>
                <p>{{product.summary}}</p>

                {{#if product.dimensions}}
                  <h3>Dimensions_</h3>
                  <p>{{product.dimensions}}</p>
                {{/if}}

                {{#if product.material}}
                  <h3>Material_</h3>
                  <p>{{product.material}}</p>
                {{/if}}

                {{#if product.producers}}
                  <h3>Producer_</h3>
                  <p>
                    {{#each product.producers}}
                      {{#if this.url}}
                        <a class="follow" href="{{this.url}}" target="_blank">{{this.name}}</a>
                      {{else}}
                        {{this.name}}
                      {{/if}}
                    {{/each}}
                  </p>
                {{/if}}

                {{#if product.extras}}
                  {{#if product.extras.video}}
                    <h3>Extras_</h3>
                    <p>
                      <a class="follow" href="{{product.extras.video}}" target="_blank">VIDEO</a>
                    </p>
                  {{/if}}

                  {{#if product.extras.notice}}
                    <p>{{product.extras.notice}}</p>
                  {{/if}}
                {{/if}}
            </div>
          </div>
        </div>

      </article>
      <nav id="nav_sections">{{> hb_nav_sections}}</nav>
    </div>
  </div>
</div>