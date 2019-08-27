---
templateKey: blog-post
title: Hello Gatsby
date: 2018-01-04T15:04:10.000Z
featuredpost: false
description: My first blog post and why I've gone static
tags:
  - learning
---
This is my first post. I decided to build a static site for my blog. I'm trying out Gatsby and so far I like it. Gatsby is a framework and static site generator built in node. It uses React for the view layer and graphql for the data layer.

Rather than go into detail about Gatsby or React, as I will hopefully talk more about those in detail, I wanted to say "hello world" and briefly cover what a static site is, why we might use one.

## What's a static site?

A static site is the most basic form of website. There is no database, API, authentication etc.... just files. Chances are you have already hand coded your own static site when first learning web development. If you are just starting your journey into web development I recommend FreeCodeCamp.org.

Loosely speaking, a webpage is a collection of files. The browser requests an HTML file with content and links to the JS, CSS and media files it depends on. The browser then requests all of those files and renders the webpage.

Many web frameworks like Wordpress, generate these files on the server dynamically, on demand. It will look at configuration files, templates, and query the database before rendering an HTML file to send the browser.

A static site generator like Gastby generates these files in similar way, however all up front, on your computer or different server, then a bundle of static files are uploaded or published to a basic public file server as a static site.

## Why build a static site?

The main reason is that static sites require a very simple server to host and files are very fast and easy to distribute and load balance. If you don't require things like a database, or user login you might consider building a static site. If you do need these things you might still use a static site and off load these responsibilities to micro services. Let's look at the benefits more closely.

### They are Fast

Many sites have very complex back end systems. Typically a site is hosted on a server as one monolithic app. A request comes in, passes through many steps, validating, parsing, querying rendering and eventually responding with `some-page.html`.

A static site on the other hand has none of that... a request comes in and `some-page.html` goes out. It is the core function of the browser and server, so it is as fast as it gets.

### They scale and save money

This simplicity and low compute overhead makes it easy and cheap to distribute across many compute nodes to handle high traffic.

Low compute and high scalability means it will cost less money to host a static site. In some cases even free, when hosting through GH pages, Surge.sh, or Contentful.

### Works well with Micro Services

Even if you do need authentication, login, a shopping cart, etc... These can be hosted separately as dedicated "micro services". This has many advantages like reducing complexity and only using the higher compute overhead when you need it.

Since most of the time we are just serving files, we can handle that with a static file server and reap the benefits above. For example, when we need to process a payment, we make that request to our payment service from the client as an ajax request. We now only pay for the extra compute when we actually need it.

This also keeps services focused, smaller, less complicated and easier to isolate for testing. We can add services as we need them.

### An alternate web model

Static files can also be distributed and shared over peer to peer networks as an alternative to the current HTTP based web model.

Beaker Browser is an experimental browser that enables for a distributed web, where there is no central server. Websites are shared across peers.

This eliminates the complexity of scaling and rewards popularity rather than punishing it. The more people consuming a site, the more people are also sharing it.

## Conclusion
So we touched on a lot of ideas without really going into any practical detail. We made claims about speed and scalability with out offering any proof and we didn't really cover any downsides.

So what was the point?

What I hope we accomplished, was to give a better understanding of what a static site is and spark some curiosity to do more research. Perhaps you will consider a static site as a possible approach for your next project.
