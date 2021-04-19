import React from 'react'
interface IProps {
  handleClick: () => void
}
const HomePageA: React.FC<IProps> = (props) => {
  let { handleClick } = props
  console.log('render');
  return (
    <div>
        homePageA
        <button onClick={handleClick}>homePageA点击</button>
    </div>
  )
} 


export default HomePageA

