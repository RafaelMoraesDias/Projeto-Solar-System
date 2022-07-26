import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missionsDiv">
        <Title headline="Missões" className="missionTitle" />
        <div className="missionCard">
          {missions.map((el) => (
            <MissionCard
              key={ el.name }
              name={ el.name }
              year={ el.year }
              country={ el.country }
              destination={ el.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
