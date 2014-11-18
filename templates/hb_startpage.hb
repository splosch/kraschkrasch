<body data-role="page" class="{{section_class}}">
  <div id="container">
    <div class="content centeringContainer">
      <div id="main" class="centered">
        <header>
          {{#if headline }}<h1 class="invisible">{{headline}}</h1>{{/if}}
          <a href="#/"><img src="images/logo.png"/></a>
        </header>
        <article id="main-area">
          {{> hb_startbild}}
        </article>
        <nav id="nav_sections">{{> hb_nav_sections}}</nav>
      </div>
    </div>
  </div>
</body>