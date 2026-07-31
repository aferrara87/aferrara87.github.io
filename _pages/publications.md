---
layout: page
permalink: /publications/
title: Research
nav: true
nav_order: 2
---
<link rel="stylesheet" href="{{ '/assets/css/pub-chips.css' | relative_url }}" />

<div class="publications">

<h2 class="pub-section-title">Working papers</h2>
{% bibliography -f papers -q @*[category=workingpaper] %}

<h2 class="pub-section-title">Publications</h2>
{% bibliography -f papers -q @*[category=publication] %}

<h2 class="pub-section-title">Book chapters</h2>
{% bibliography -f papers -q @*[category=bookchapter] %}

</div>

<script src="{{ '/assets/js/publications-toggle.js' | relative_url }}"></script>
