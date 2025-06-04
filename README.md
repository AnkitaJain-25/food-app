# food App

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Fasterb Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consisting Hashing
- Code Splitting
- Differential Bundling
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - Remove unused code
- Different dev and prod bundles


# Namaste Food

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Card
 *      - Img
 *      - Name of Res, Star Rating, Cuisine, delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


Two Types of Export/Import

- Default Export/Import
export default Component
import Component from "path";

- Named Export/Import
export const Component;
import {Component} from "path";


# React Hooks
(Normal JS utility Functions)
- useState() - Superpowerful State variable
- useEffect()

# 2 types Routing in web apps
- Client Side Routing -> Since all the components are already loaded in our app and when we click on the page it just loads that component and doesn't make any network call expect the network call for api

- Server Side Routing -> you make a network call and page is coming from server and relodes the whole page