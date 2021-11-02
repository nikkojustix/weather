import React from 'react'
import Current from './Current'
import Info from './Info'

interface Props {

}

const Main = (props: Props) => {

  return (
    <main className="main">
      <div className="container">
        <div className="main__inner">
          <Current />
          <Info />
        </div >
      </div>
    </main>
  )
}

export default Main
