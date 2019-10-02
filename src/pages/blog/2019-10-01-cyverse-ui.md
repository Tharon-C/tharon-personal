---
templateKey: blog-post
title: CyVerse UI
date: 2019-10-02T02:24:13.977Z
description: A component library and design system
featuredpost: false
featuredimage: /img/chemex.jpg
tags:
  - work
  - design
---
At CyVerse on the Atmosphere team, we were struggling with the typical problems that come with a large code base. We had legacy code to maintain and new features to implement into an existing system. There were consistency issues and unhealthy CSS, and the UX was suffering as evident by the support tickets we were getting.

## No Designer

Since we had no formal designer role we wanted a way to steer design systematically. I would assume role of designer part time for new features and establish design patterns that could be followed by other developers to be broadly applied to existing features as a first pass. This would allow us to move quickly to improve the app more holistically or generally without adding to the problem and then back fill with more intentional design starting with major offenders first.

## A Design System

A design system is like any other system in that it is a collection of parts that work together in a interconnected whole. It is a set of principles and procedures according to which a framework can be built. Programmers work well within systems or frameworks so without a design background these principles can be applied to common patterns getting us a long way without having to design every screen directly. By this we focus on designing the system instead.

### Design Patterns

Most features can be broken down or abstracted to common patterns. By recognizing these patterns and formalizing them into design patterns. We can approach new features by determining what patterns they constitute. These patterns are built on the design system acting as the underlying structure.

### Material Design

A design system needs good documentation and although not perfect Material Design is comprehensive. We made a decision early on to leverage this as a starting point. This let us focus on designing and documenting patterns that are specific to our product.

## Component Library

A component library is the way we can capture, document and consume these patterns. They are code and versioned. They are a source of truth and give us a consistent UI that is maintainable.  

### Atomic Design

Atomic design is a term coined by Brad Frost. The idea to break larger components into smaller more composable components. Rather than have a input with a label and a radio button with a label the label is it's own component and used to make both. This composability helps with maintainability and consistency.    

### Material UI

Just like Material Design, Material UI allowed us to focus, by providing a general well documented base to work from. Not only does Material UI follow Material Design as it's pattern library it is also atomic and as a solid theming system.

### CSS vs JSS


### Restraint vs Constraint
### Tooling
## CyVerse UI 
