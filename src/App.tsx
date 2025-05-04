import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="logo-section">
        <h1>Joseph Oliver Mangabang</h1>
        <div className="logo-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.867424705101!2d121.04370121534904!3d14.55535328982281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8e99b3f312d%3A0xdbc2f2edfd626155!2sGreenbelt%20Mall!5e0!3m2!1sen!2sph!4v1620359844927!5m2!1sen!2sph"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="card">
        <p>Welcome to your new project! 🚀</p>
        <button onClick={() => setCount((count) => count + 1)}>
          You clicked {count} times
        </button>
        <p>
          Start editing <code>src/App.jsx</code> to see live updates.
        </p>
      </div>

      <footer className="read-the-docs">
        Location preview provided above via Google Maps.
      </footer>
    </>
  )
}

export default App
