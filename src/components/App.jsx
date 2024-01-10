import React, { useEffect } from 'react';
import AppRoutes from './AppRoutes'
import './../styles/base.css'

function App() {
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }

  useEffect(() => {
    window.addEventListener('resize', appHeight)
    appHeight()
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
      <div className="App-container">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
