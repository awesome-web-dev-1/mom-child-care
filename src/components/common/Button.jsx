import { Link } from 'react-router-dom'
const Button = ({label,to,className}) => {
  return (
    <Link to={to} className={className}>{label}</Link>
  )
}

export default Button