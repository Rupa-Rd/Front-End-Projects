import React, { useState } from 'react'
import data from './data/data'
import List from './List'
function App() {
    // create a state variable here
    const [people, setPeople] = useState(data)

    // this should clear all records
    function clearAllRecords() {
        setPeople([])
    }
    return (
        <main>
          <h1>Birthday Reminder</h1>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                <button onClick={clearAllRecords}>Clear All</button>
            </section>
            <a href="https://www.guvi.in/" className="copywright">
        Made by Guvi💚
      </a>
        </main>
    )
}

export default App