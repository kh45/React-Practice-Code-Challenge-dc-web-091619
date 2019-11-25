import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.currentSushis.map(sushi => <Sushi wallet={props.wallet} key={sushi.id} sushi={sushi} eatASushi={props.eatASushi} />)}
        <MoreButton nextRound={props.nextRound} />
      </div>
    </Fragment>
  )
}

export default SushiContainer