import "./App.css"
import "./routes/clock/style.css"
import "./routes/dice/main.css"
import React from "react";
import { 
  createHashRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { Home } from "./routes/Home.jsx"
import { Clock } from "./routes/clock/Clock.jsx";
import { Jokes } from "./routes/jokes/Jokes.jsx";
import { Dice } from "./routes/dice/Dice.jsx";
import { Anime } from "./routes/anime/Anime.jsx";

export function App(props) {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/dice" element={<Dice />} />
        <Route path="/anime" element={<Anime />} />
        
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
    <div className="container">

      <nav className="link">
        <Link className="item" to="/">Home</Link>
        <Link className="item" to="/clock" >🕰️</Link>
        <Link className="item" to="/jokes">🤣</Link>
        <Link className="item" to="/dice">🎲</Link>
        <Link className="item" to="/anime">👧</Link>
      </nav>

      <div className="outlet">
        <Outlet />
      </div>
      
    </div>
  )
}






/*
import "./App.css"
import "./routes/clock/style.css"
import "./routes/dice/main.css"
import React from "react";
import { 
  createHashRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { Home } from "./routes/Home.jsx"
import { Dog, dataLoader } from "./routes/Dog.jsx"
import { Cat } from "./routes/Cat.jsx";
import { Fox } from "./routes/Fox.jsx";
import { Clock } from "./routes/clock/Clock.jsx";
import { Jokes } from "./routes/jokes/Jokes.jsx";
import { Dice } from "./routes/dice/Dice.jsx";

export function App(props) {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/dog" element={<Dog />} loader={dataLoader} />
        <Route path="/fox" element={<Fox />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/dice" element={<Dice />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
    <div className="container">

      <nav className="link">
        <Link className="item" to="/">Home</Link>
        <Link className="item" to="/dog">Dog</Link>
        <Link className="item" to="/fox">Fox</Link>
        <Link className="item" to="/cat" >Cat</Link>
        <Link className="item" to="/clock" >🕰️</Link>
        <Link className="item" to="/jokes">🤣</Link>
        <Link className="item" to="/dice">🎲</Link>
      </nav>

      <div className="outlet">
        <Outlet />
      </div>
      
    </div>
  )
}
*/