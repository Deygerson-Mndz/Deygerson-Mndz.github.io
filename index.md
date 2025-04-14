---
layout: home
title: Azure Data Platform Blog
---

<!-- Hero banner -->
<section class="hero">
  <div class="container">
    <h1>Bienvenido al Azure Data Platform Blog</h1>
    <p>Aprende sobre ingeniería de datos en la nube, buenas prácticas y casos reales con Azure Data Factory, Synapse, Databricks y más.</p>
    <a href="#posts" class="btn-primary">Ver artículos</a>
  </div>
</section>

<!-- Últimos posts -->
<section id="posts" class="posts">
  <div class="container">
    <h2>Últimos artículos</h2>
    <ul class="post-list">
      {% for post in site.posts limit:6 %}
        <li class="post-card">
          <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
          <span class="post-date">{{ post.date | date: "%d %b %Y" }}</span>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
