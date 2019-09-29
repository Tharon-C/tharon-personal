---
templateKey: blog-post
title: The Design Pipeline
date: 2018-12-17T15:04:10.000Z
featuredpost: false
description: How and why we developed a design pipeline at Cyverse
tags:
  - work
---
Our product started as one developer's proof of concept. Then a few fast moving developers worked to get it functional enough to present to the NSF. Eventually it was a funded project but it's rapid development cycle had become part of the culture.

New features were built by first reviewing requirements with the project manager, then implemented by getting the functionality to work with just enough UI to get input and display a result. It was only after this initial coding that a feature was  fleshed out and styled to meet production quality. Although the user experience was discussed and some research on existing patterns might be done, much of the design was left to work out as an afterthought.

Recognizing that a lack of a formalized design process was introducing issues with the user experience and inconsistencies in design, we set out to integrate a design step before writing code.

## Why design before writing code?

If the design is an afterthought, the design goal becomes more about "making it look good" and is superficial. More than just polish, a design should be the structure from which to build on. Once code is written however, there is friction to changing it, so the mentality becomes more about polishing what is there. This leads to a compromise in user experience and design inconsistencies as each developer makes independent choices steered by unconscious decisions when first stubbing out the UI.

### Design Debt

It is difficult to correct fundamental design issues as they often require us to rethink the whole feature. Design patterns that form passively aren't necessarily good patterns. The user however will learn them anyway so changes will cause confusion. As a result changes need to be rolled out in a way that minimizes that confusion. I consider this situation as having "design debt". The best way to prevent more "design dept" is to design before features are built and rolled out to users.


## Fitting design into an existing workflow

As we already had a well running productive team we wanted to integrate a design step into our existing workflow. We didn't have a designer and hiring one wasn't on the table. We were used to working independently and having ownership over features end to end. We used Jira to track and assign work and worked around three week sprints.

We decided to establish a "design pipeline" in one sprint and implement it in the next.

## Design pipeline

Understanding that design is an iterative process with many steps and continual feedback. We wanted a workflow that could serve as a pipeline to feed feature requests or existing features that need improvement into one end. And have a design to hand over to be implemented come out the other. We called this our "design pipeline".

### Requirements Doc

A good focused design can only be achieved with good focused requirements.
We created a template that would begin the pipeline. This was started by the project manager when creating the feature ticket. Then the designer would start by asking questions, doing research, and fleshing out the requirements doc until the project manager and other stake holders were happy.

### The stubby pencil

Our pipeline had this document as the single point of truth at it's entrance and we wanted to end with a single point that is the design at the end. The middle however can expand into many variants and possibilities as ideas are explored and ruled out. On the white board this looks like a stubby pencil sharpened on either end and became the model for our pipeline.

#### Expanding

At Cyverse we value the the perspectives and ideas of each developer and wanted a way to use this in the design process without designing by comity. The expansion phase is a good place to achieve this. At this phase we all gather around a white board to look at the requirements doc and take turns offering how we each imagine the feature would work. We bring up concerns, and try to identify gaps or potential technical limitations or blockers. Each contributor is pulling from their own layer of expertise and experiences as user, so we are reducing the tendency for oversight. By the end we most likely have made improvements to the requirements doc and have several different approaches to the UX design problem.

#### Iteration and Exploration

Not wanting to be a design by community, it is then on the product manager and designer to explore these approaches and make decisions on the direction to take. During this phase there is flexibility in the process. They may choose whether to use wireframes, mocks, prototypes, etc. based on whatever works best for the designer, product manager, and stakeholders.

#### Focusing and hand off

Once this exploration has been narrowed down to one to three well thought out solutions we can present this to stake holders or bring in other developers for feedback to finalize the design and call it ready to build, at which point the requirements doc and designs are handed to a developer to begin building in the next sprint.

## A feature is never done

The reality is that no design is going to be perfect and simply done. Actual users haven't weighed in yet and will no doubt be confused by wording or not see that action button. With more money and time perhaps user testing could be done with high fidelity mock ups, but even then software evolves and gets better over time as users expose issues. So this pipeline does not eliminate design debt. It does however achieve a much better base to build on and make the UX more deliberate. Our developers have more sense of ownership over the UX and  are better informed why a feature is designed the way it is. The UX has become more consistent and the culture overall is more sensitive to design and our users.

