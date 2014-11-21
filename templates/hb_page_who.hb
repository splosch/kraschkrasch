<div id="container" class="{{section_class}}">
  <div class="content centeringContainer">
    <div id="main" class="centered">
      <header>
        {{#if headline }}<h1 class="invisible">{{headline}}</h1>{{/if}}
        <a href="#/"><img src="images/logo.png"/></a>
      </header>
      <article id="main-area">
        {{> hb_startbild}}

        <div id="slider" class="overlay autoExpand">
            <img src="images/who/01.jpg"/>
            <img src="images/who/02.jpg"/>
            <img src="images/who/03.jpg"/>
            <img src="images/who/04.jpg"/>
            <img src="images/who/05.jpg"/>
            <img src="images/who/06.jpg"/>
        </div>

        <div id="detailsBox" class="detailsWrapper collapsed">
            <div class="details">
                <div class="label"><span class="icon_arrow"></span></div>
                <div class="aniContainer">
                    <h2>kaschkasch cologne</h2>

                    <p>
                        The design studio was established
                        by Florian Kallus and Sebastian Schneider.
                    </p>
                    <p>
                        kaschkasch always tries to achieve the maximum out of
                        the minimum by breaking every idea down to its essential elements.
                    </p>
                    <p>
                        The products are casual and voguish at the same time.
                        Precise lines and geometric shapes give them a graphical
                        impression, that is underlined by fashioned colouring and
                        straightforwardness. Every piece has a little thing to
                        discover that speaks of the designers’ love for details.
                    </p>

                    <h3>Clients_</h3>
                    <p>
                        Menu | Zeitraum | Normann Copenhagen | Schönbuch | Bolia | Magazin | Esaila | Dreizehngrad | Asco | Hubert Feldkircher 
                    </p>
                    
                </div>
            </div>
        </div>
      </article>
      <nav id="nav_sections">{{> hb_nav_sections}}</nav>
    </div>
  </div>
</div>