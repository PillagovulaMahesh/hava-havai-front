import React from 'react';
import { Link } from 'react-router-dom';
import { View, Heading, TableView, TableHeader, TableBody, Column, Row, Cell } from '@adobe/react-spectrum';

const airports = [
  { id: 1, name: 'Indira Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
  { id: 2, name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
  { id: 3, name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
  { id: 4, name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
  { id: 5, name: 'Rajiv Gandhi International Airport', country: 'India', code: 'HYD', terminals: 2 },
];

function HomePage() {
  return (
    <View>
      <Heading level={1}>Airports</Heading>
      <TableView aria-label="Airports Table">
        <TableHeader>
          <Column>Airport</Column>
          <Column>Country</Column>
          <Column>Code</Column>
          <Column>Terminals</Column>
        </TableHeader>
        <TableBody>
          {airports.map(airport => (
            <Row key={airport.id}>
              <Cell>
                <Link to={`/airport/${airport.id}`}>{airport.name}</Link>
              </Cell>
              <Cell>{airport.country}</Cell>
              <Cell>{airport.code}</Cell>
              <Cell>{airport.terminals}</Cell>
            </Row>
          ))}
        </TableBody>
      </TableView>
    </View>
  );
}

export default HomePage;
