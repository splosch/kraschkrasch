<body data-role="page" class="products bigDetailsPage">
  <div id="container">
    <div class="content centeringContainer">
      <div id="main" class="centered">
        <header>
          {{#if headline }}<h1 class="invisible">{{headline}}</h1>{{/if}}
          <a href="#/"><img src="images/logo.png"/></a>
        </header>
        <article id="main-area">
          {{> hb_startbild}}

          <div id="slider" class="overlay autoExpand">
            <img src="images/where/01.jpg"/>
            <img src="images/where/02.jpg"/>
            <img src="images/where/03.jpg"/>
            <img src="images/where/04.jpg"/>
            <img src="images/where/05.jpg"/>
            <img src="images/where/06.jpg"/>
          </div>

          <div id="detailsBox" class="detailsWrapper collapsed">
              <div class="details">
                  <div class="label"><span class="icon_arrow"></span></div>
                  <div class="aniContainer">
                    

                      <p>
                          <b>kaschkasch´s</b> studio and workshop are located in a charming backyard building in the former working-class district cologne Zollstock (means: folding ruler). Back in the days the studio was a saddlery and the model-building workshop was a horse stable. The associated garden offers kaschkasch the possibility to grow their own vegetables.
                      </p>
                      <p>
                          <h3>Address_</h3>
              <p> kaschkasch<br />
              
                  Hoeningerweg 174<br />
                  50969 Cologne<br />
                  Germany <br />
              </p>

              <h3>Phone_</h3>
             
                  studio 0221 204 31 759 <br />
            
                  Florian 0049 179 77 90 652 <br />
                  Sebastian 0049 152 33 58 64 79 <br />
              </p>
                  <h3>Email_</h3>
              <p>
                  <a class="follow" href="mailto:mail@kaschkasch.com">mail@kaschkasch.com (general)</a> <br />
                  <a class="follow" href="mailto:press@kaschkasch.com">press@kaschkasch.com (press)</a>
                  
                  </p>
                   
              
              <h3>Imprint_</h3>
               <a class="follow" href="imprint.html">click here!</a>


                                                                                  
                  </div>
              </div>
          </div>
        </article>
        <nav id="nav_sections">{{> hb_nav_sections}}</nav>
      </div>
    </div>
  </div>
</body>