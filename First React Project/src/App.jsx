import ironhack from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import declarative from './assets/icon1.png'
import components from './assets/icon2.png'
import single from './assets/icon3.png'
import jsx from './assets/icon4.png'
import './App.css'

function App() {
  return <div className='App'>
    <style>
    <body>
      background-color: rgb(27, 33, 46);
    </body>
    </style>
<nav>
<img className='navleft' src={ironhack} alt='ironhack' />
<img className='navright' src={menu} alt='menu' />
</nav>



    <h1>Say hello to ReactJS</h1>
    <p>You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
    <button type="button">Awesome!</button>
    <div className="icons">
    <div className='card'>
    <img src={declarative} alt='declarative' />
    <h2>Declarative</h2>
    <p>React makes it paintless to create interactive UIs.</p>
    </div>

    <div className='card'>
    <img src={components} alt='components' />
    <h2>components</h2>
    <p>Build encapsulated components that manage their state.</p>
    </div>

    <div className='card'>
    <img src={single} alt='single' />
    <h2>Single-Way</h2>
    <p>A set of immutable values are passed to the components.</p>
    </div>

    <div className='card'>
    <img src={jsx} alt='jsx' />
    <h2>JSX</h2>
    <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
    </div>
  </div>
}
export default App
