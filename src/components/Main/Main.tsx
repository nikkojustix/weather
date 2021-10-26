import React from 'react'

interface Props {
  city: string
}

const Main = ({ city }: Props) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__inner">
          <h2 className="main__city">{city}</h2>
          <div className="card">

            <div className="weather"></div>
            <div className="temperature"></div>
            <div className="wind"></div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
