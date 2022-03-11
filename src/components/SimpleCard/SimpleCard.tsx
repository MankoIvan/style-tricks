import React, { ReactElement } from 'react'
import style from './SimpleCard.module.css'

type SimpleCardProps = {
  component: ReactElement;
  title: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ component, title }) => {
  return (
    <div className="col s12 m6">
      <div className="card medium grey darken-2 d-flex">
        <div className={style.cardContainer}>
          {component}
        </div>
        <div className="card-content black-text">
          <span className="card-title">{title}</span>
        </div>
      </div>
    </div>
  )
}

export default SimpleCard