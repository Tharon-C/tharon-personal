---
templateKey: 'blog-post'
title: Death by Inconsistancy
date: 2017-01-04T15:04:10.000Z
featuredpost: true
description: >-
  How inconcistency was ruining our product and what we did about it.
tags:
  - work
---

Inconsistency can lead to a general dissatisfaction and poor perception of a product, brand or company as a whole.

At CyVerse, like most organizations, we had issues with consistency that we wanted improve on.

After evaluating the causes and solutions, we decided to adopt a standard component library, a design system or pattern library, and style guide. It happens that these three concerns work nicely together to form a single source of truth, CyVerse-UI.

## Inconsistency

Inconsistency, whether color, typography, user experience, branding, etc. might be the the most damaging issue an application can have.

We naturally seek out order and predictability and recognize rules. This helps us conserve mental energy by assuming most of the information around us, only focusing on what we need to.

As a product, when we break our own rules, we are pulling the rug out from under the user, making them have to rethink the whole system. Imagine turning to set a glass on a table to find the table has vanished. Even if that is the only detail changed we would still have to look about the room reconsidering everything in it.

Inconsistency leads to a lack of user confidence. If confused, users can become frustrated or anxious. A perception grows that the product is of poor quality and undependable.

## Contributing Factors

### Not enough reuse of code

Someone working on a new feature finds a view that has the UI they want to use and copy pastes it into the new view.

"Copy pasta" when it comes to the UI, introduces maintenance problems and visual inconsistency as changes are made to views.

Since the same visual patterns and experience is copied in many places, an update to one instance requires hunting for every other instance, else you have inconsistency.

Under a deadline and limited resources these inconsistencies are left to grow.

### No formalized design system

Even with the best intentions if more than one person is making design decisions without a system you will have inconsistencies. Even with one designer, over time styles and moods will change and memories fade. Digging through similar features for patterns to copy only goes so far. What if for example, there are two features that have slightly different ways of adding Tags? Which one do we copy? Or, do we have a better idea and use that instead?

### Teams are siloed

With different CyVerse teams working on their own products not only do these products suffer from inconsistency, possibly worse is how inconsistent our products are from one another.

## Solutions to inconsistency

#### A component library

A library of reusable components allow us to have a single source of truth for a UI element or pattern. This gives us better maintainability and can enforce design consistency.

We want to remove the friction for writing and using reusable components. Foster a culture and architecture that allows for, promotes and even enforces its use and contribution.

An official site documenting reusable components facilitate this. A developer can browse the collection before writing anything new. If what they need doesn't exist yet or isn't flexible they can contribute to the collection making it better. Designers can oversee the collection for design quality and consistency.

#### A pattern library
A pattern library keeps things more consistent by breaking features into smaller reusable patterns. Rather than look at our feature as a whole we can think about it in terms of the smaller reusable interactions or patterns it is composed of.

A pattern library maps perfectly to our collection of reusable components. We can design and build our applications around a component / pattern library as a single source of truth, consolidating development and design assets.

#### A centralized library

By applying a pattern / component library to the organization as a whole we get closer to creating a consistent ecosystem. An environment where the user can move from feature to feature and product to product feeling comfortable in familiar surroundings. The user can depend on rules, make assumptions and conserve mental energy.

## CyVerse-UI

Enter CyVerse-UI! A standardized set of reusable components that are available to all of the CyVerse ecosystem. We want a design system that can be used to design new features that brings consistency to the look and feel, the CyVerse brand and the user experience.
