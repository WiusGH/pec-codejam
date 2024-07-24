import React from 'react'
import style from './MainCointainer.module.css'

interface MainContainerProps {
    content: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({content}) => {
  return (
    <div className={style.container}>
      {content}
    </div>
  )
}

export default MainContainer