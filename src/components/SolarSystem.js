import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planetas">
        <div className="planetaTitle">
          <Title headline="Planetas" />
        </div>
        <div className="planetCard">
          {planets.map((el) => (
            <PlanetCard
              key={ el.name }
              planetName={ el.name }
              planetImage={ el.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
