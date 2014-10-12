<ul>
  {{#nav_sections}}
    <li><a {{#if active }}class="active"{{/if}} href="{{url}}">{{name}}</a></li>
  {{/nav_sections}}
</ul>