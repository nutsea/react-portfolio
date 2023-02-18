import React, { useEffect } from 'react';
import AppRoutes from './AppRoutes'
import './../styles/App.css'
import './../styles/base.css'
import './../styles/main.css'
import './../styles/glass.css'
import glass from './../img/glass/glass.jpg'

function App() {
  useEffect(() => {
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('Show')
            } else {
                change.target.classList.remove('Show')
            }
        })
    }
    let options = {
        threshold: [0.5]
    }
    let observer = new IntersectionObserver(onEntry, options)
    let elements = document.getElementsByClassName('Element')
    for (let elm of elements) {
        observer.observe(elm)
    }
  })

  return (
    <div className="App">
      <img className="Glass-bg" src={glass} alt="glass" />
      <AppRoutes />
    </div>
  );
}

export default App;
