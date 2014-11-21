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
                    <li> <a href="whatDetailsKeep.html"> keep</a> </li>
                    <li> <a href="whatDetailsCherry.html"> cherry </a> </li>
                    <li> <a href="whatDetailsKonichiwa.html"> konichiwa </a> </li>
                    <li> <a href="whatDetailsIndustrial.html"> industrial </a> </li>
                    <li> <a href="whatDetailsCap.html"> cap </a> </li>
                    <li> <a href="whatDetailsPinaTableLamp.html"> pina </a> </li>
                    <li> <a href="whatDetailsFlachmann.html"> flachmann </a> </li>
                  </ul>
                </li>

                <li> <h3> Products </h3>
                  <ul>
                    <li> <a href="whatDetailsLuna.html"> luna </a> </li>
                    <li> <a href="whatDetailsBulb.html"> bulb </a> </li>
                    <li> <a href="whatDetailsBonfire.html"> bonfire </a> </li>
                    <li> <a href="whatDetailshopperboxes.html"> hopper </a> </li>
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