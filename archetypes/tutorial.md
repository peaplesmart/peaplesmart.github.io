---
title: "{{ replace .Name "-" " " | title }}"
description: ""
image: "/img/placeholder.svg"
image_alt: ""
series: ""
series_weight: 1
date: {{ .Date }}
categories:
  - ""
tags:
  - ""
weight: 10
slug: "{{ .File.ContentBaseName }}"
draft: true
toc: true
disqus_identifier: ""
#resources:
#  - name: "featured-image"
#    src: "featured.jpg"
---