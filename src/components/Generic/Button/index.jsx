import React from 'react'
import { Container } from './style';

export const Button = ({
  width,
  height,
  type,
  className
}) => {
  return (
    <Container 
      width={width} 
      height={height}
      type={type}
      className={className}
    >Button</Container>
  )
}

export default Button;