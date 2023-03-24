# TECHNICAL SPECIFICATION

## HOME PAGE

**1. Header:**
_• Logo or App Name
_• Navigation menu to access different sections of the web app such as: - Home - Filter page
\*• Search bar with a search button

**2. Popular movies:**
.._• Display a section that showcases popular movies.
.._• Grid or List of movie posters with title and release year
..\_• Pagination or infinite scrolling to browse through multiple pages

**3. Top-rated movies:**
.._• Display a section that showcases top-rated movies.
.._• Grid or List of movie posters with title and release year
..\_• Pagination or infinite scrolling to browse through multiple pages

**4. Upcoming movies:**
.._• Display a section that showcases upcoming movies. This could be based on the most anticipated movies of the year or upcoming releases.
.._• Grid or List of movie posters with title and release year
..\_• Pagination or infinite scrolling to browse through multiple pages

**5. Featured movies:**
.._• Highlight a few select movies that I think users would enjoy. This could be based on trending movies.
.._• Grid or List of movie posters with title and release year
..\_• Pagination or infinite scrolling to browse through multiple pages

**6. Footer:\_**
.._• Copyright information
.._• Links to social media pages???
..\_• Contact information

## PAGE WITH POPULAR MOVIES (the same to top-rated, upcoming, featured)

**1. Header:**

**2. Grid or list of movie posters**
..\_ with some basic information, such as title, release year, and rating
..\_if there will be a large number of popular movies, page will display them across multiple pages with pagination controls to allow users to navigate between them

**3. Filter options:**
.._• block where users can filter by genre, release year, or rating.
\_4. Footer:_

## PAGE WITH FILTERS

**1. Header**
**2. Filter Block**
.._• This block include three filters for genres, years, and ratings. These filters could be displayed in a sidebar or a dropdown menu
.._• When a user selects a filter, the results will be filtered accordingly.
..\_• the filtered results will be displayed in a grid or list view with movie posters, titles, and brief descriptions
**3. Footer**

## PAGE WITH ONE MOVIE

**1. Header**
**2. One Movie Block**
.._• Movie poster or image
.._• Movie title and release year
.._• Movie synopsis or summary
.._• Movie cast and crew
.._• Movie ratings and reviews
.._• Trailer or clips
..\_• Related movies
**3. Footer**

## FOLDER STRUCTURE

**src/**
**|-- assets/**
| |-- images/
| |-- styles/
| | |-- base/
| | |-- components/
| | |-- utilities/
**|-- components/**
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
**|-- pages/**
| |-- HomePage/
| |-- MovieListPage/
| |-- FiltersPage/
| |-- SingleMoviePage/
| |-- index.js
**|-- store/**
| |-- actions/
| |-- reducers/
| |-- selectors/
| |-- types/
| |-- index.js
**|-- utils/**
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
