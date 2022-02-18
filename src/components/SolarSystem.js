import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
        {planets.map((el) => (
          <PlanetCard
            key={ el.name }
            planetName={ el.name }
            planetImage={ el.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
