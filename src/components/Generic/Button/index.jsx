import React from 'react'
import { Container } from './style';

export const Button = ({
  width,
  height,
  type,
  className,
  children
}) => {
  return (
    <Container 
      width={width} 
      height={height}
      type={type}
      className={className}
    >{children}</Container>
  )
}

export default Button;