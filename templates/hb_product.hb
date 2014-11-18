{{> hb_visual }}

<div id="detailsBox" class="detailsWrapper collapsed">
  <div class="details">
    <div class="label"><span class="icon_arrow"></span></div>

    <div class="aniContainer">
        <a class="follow backlink" href="{{nav_sections.what.url}}#detailsBox">back to products</a>

        <h2>{{product.name}}</h2>
        <p><i>{{product.development.purpose}} | {{product.development.year}}</i></p>
        <p>{{product.summary}}</p>

        {{#if product.dimensions}}
          <h3>Dimensions_</h3>
          <p>{{product.dimensions}}</p>
        {{/if}}

        {{#if product.material}}
          <h3>Material_</h3>
          <p>{{product.material}}l</p>
        {{/if}}
        
        {{#if product.producers}}
          <h3>Producer_</h3>
          <p>
            {{#each product.producers}}
              <a class="follow" href="{{this.url}}" target="_blank">{{this.name}}</a>
            {{/each}}
          </p>
        {{/if}}
    </div>
  </div>
</div>