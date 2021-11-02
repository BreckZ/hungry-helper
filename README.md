# Hungry-Helper


<br>

## Overview

The Hungry Helper application is designed to store user recipes in a single location accessible via the web.  Users can add favorite recipes along with editing their existing ones.  This database of recipes also provides users with a mobile experience to make the food preparation process more accessible rather than dealing with books, recipe boxes, and other paper cataloging systems.

<br>

## MVP

### Server (Back End)

[Entity Relation Diagram](https://app.diagrams.net/#G1DxRbBaogC2GKdNGca_rTGVlzc2WwzJ62)

Built using a Ruby on Rails server to expose RESTful JSON endpoints.  The database has 3 tables with at least 1 association between them.  Rails was used to define models for interacting with the database.  The server has full working CRUD through controller actions in Rails.


### Client (Front End)

[Wireframe](https://www.figma.com/file/7W3weMZh6maE36Y2yLtExD/Hungry-Helper?node-id=0%3A1)

Built using npx create-react-app.  The front end has at least 8 separately rendered components and provides full CRUD functionality

### Styling

The app was styled with CSS and Flexbox

### Deployment

The frontend was deployed using netlify and backend was deployed using Heroku

#### Component Tree

[Component Tree](https://whimsical.com/hungry-helper-H7LtGVVewScW8Fegvj1BBA)


#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
