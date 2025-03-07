import { teams } from '../../constant/data'
import { Link } from 'react-router-dom'
const TeamSec = () => {
  return (
    <section className="section">
        <div className="container">
          <p className="subtitle">Our Team</p>
          <h2>Care givers</h2>

          <div className="about-page-card-wrapper">
            {teams.map((team)=>(
              <div key={team.id} className='about-page-card'>
                <Link to={`team/${team.id}`}>
                  <div>
                  <img src={team.imgUrl} alt={team.name} />
                  </div>

                  <div className='about-page-card-content'>
                  <p className='text-white text-center text-2xl'>{team.name}</p>
                  <p className='text-white text-center'>{team.identity}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default TeamSec