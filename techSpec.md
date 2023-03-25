# TECHNICAL SPECIFICATION

---

### HOME PAGE

### PAGE WITH POPULAR MOVIES (the same to top-rated, upcoming, featured)

### PAGE WITH FILTERS

### PAGE WITH ONE MOVIE

---

## HOME PAGE

**1. Header:**

-   Logo or App Name
-   Navigation menu to access different sections of the web app such as:
    -   Home
    -   Filter page
-   Search bar with a search button

**2. Popular movies:**

-   Section that showcases popular movies.
-   Grid or List of movie posters with title and release year
-   Pagination or infinite scrolling to browse through multiple pages

**3. Top-rated movies:**

-   Section that showcases top-rated movies.
-   Grid or List of movie posters with title and release year
-   Pagination or infinite scrolling to browse through multiple pages

**4. Upcoming movies:**

-   Section that showcases upcoming movies. This could be based on the most anticipated movies of the year or upcoming releases.
-   Grid or List of movie posters with title and release year
-   Pagination or infinite scrolling to browse through multiple pages

**5. Featured movies:**

-   Few select movies that I think users would enjoy. This could be based on trending movies.
-   Grid or List of movie posters with title and release year
-   Pagination or infinite scrolling to browse through multiple pages

**6. Footer:**

-   Copyright information
-   Links to social media pages???
-   Contact information

## PAGE WITH POPULAR MOVIES (the same to top-rated, upcoming, featured)

**1. Header:**

**2. Grid or list of movie posters**

-   with some basic information, such as title, release year, and rating
-   if there will be a large number of popular movies, page will display them across multiple pages with pagination controls to allow users to navigate between them

**3. Filter options:**

-   block where users can filter by genre, release year, or rating.

**4. Footer:**

## PAGE WITH FILTERS

**1. Header**
**2. Filter Block**

-   This block include three filters for genres, years, and ratings. These filters could be displayed in a sidebar or a dropdown menu
-   when a user selects a filter, the results will be filtered accordingly.
-   the filtered results will be displayed in a grid or list view with movie posters, titles, and brief descriptions

**3. Footer**

## PAGE WITH ONE MOVIE

**1. Header**
**2. One Movie Block**

-   Movie poster or image
-   Movie title and release year
-   Movie synopsis or summary
-   Movie cast and crew
-   Movie ratings and reviews
-   Trailer or clips
-   Related movies
    **3. Footer**

## FOLDER STRUCTURE

**SRC/**  
**|-- ASSETS/**  
| |-- images/  
| |-- styles/  
| | |-- base/  
| | |-- components/  
| | |-- utilities/  
 **|-- COMPONENTS/**  
| |-- atoms/  
| | |-- Button/  
| | |-- Icon/  
| | |-- Input/  
| | |-- ...  
| |-- molecules/  
| | |-- MovieCard/  
| | |-- Filter/  
| | |-- ...  
| |-- organisms/  
| | |-- Header/  
| | |-- Footer/  
| | |-- MovieGrid/  
| | |-- ...  
 **|-- PAGES/**  
| |-- HomePage/  
| |-- MovieListPage/  
| |-- FiltersPage/  
| |-- SingleMoviePage/  
| |-- index.js  
 **|-- STORE/**  
| |-- actions/  
| |-- reducers/  
| |-- selectors/  
| |-- types/  
| |-- index.js  
 **|-- UTILS/**  
| |-- api.js  
| |-- helpers.js  
|-- App.js  
|-- index.js  
|-- routes.js  
|-- index.css  
|-- theme.css  
|-- config.js

##

react  
react hooks  
redux  
tailwind
