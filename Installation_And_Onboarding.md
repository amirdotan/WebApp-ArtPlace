Documentation of this procces
# important you an run npm install to download all dependencies

# we will use material UI from here: https://mui.com/material-ui/getting-started/installation/
<consider watching this tutorial https://www.youtube.com/watch?v=o1chMISeTC0>

// setting up 
# to start a new project run in the terminal: npx create-react-app my-app
# npm material UI for React: npm install @mui/material @emotion/react @emotion/styled

seems like there are two options for fonts and icons:
option 1
# npm the roboto font: npm install @fontsource/roboto (https://mui.com/material-ui/react-typography/#general)
# npm the material icons: npm install @mui/icons-material (https://mui.com/material-ui/icons/#font-icons)

option 2 in css file?
# for fonts: 
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

# for icons:
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

# Now In order to use prebuilt SVG Material icons, such as those found in the icons demos you must first install the @mui/icons-material package: npm install @mui/icons-material

# next To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <head> element in the App.js file:
<meta name="viewport" content="initial-scale=1, width=device-width" />


// switching between pages 
# first run: npm install react-router-dom
# and then in App.js import { BrowserRouter as Router, Route, Link } from "react-router-dom";
use this syntax 
      <Router>
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>


// json server - interactin with a database
https://www.youtube.com/watch?v=MnIEJMgvuvc&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=9

# run: npm install -g json-server (you might need to run this as admin try the 'sudo' command)

# now in order to run the json server enter the next command: 
# json-server --watch /Users/benjaminabrahami/Desktop/bens/src/data --port800 
# (where src/data/db.json is the path to the json file)

// map integration - incomplete
# https://react-leaflet.js.org/docs/start-installation/
# npm install react react-dom leaflet
# npm install react-leaflet
# npm install -D @types/leaflet
add this to head in index.html
# <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
   integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
   crossorigin=""/>


// in order to open an overlay component do this:
# https://www.youtube.com/watch?v=SuqU904ZHA4
# npm install framer-motion

// great reasources:
# Basic stuff: https://www.youtube.com/watch?v=dGcsHMXbSOA
# useState: https://www.youtube.com/watch?v=O6P86uwfdR0
# useEffect: https://www.youtube.com/watch?v=0ZJgIjIuY7U
# React router: https://www.youtube.com/watch?v=Law7wfdg_ls
#


