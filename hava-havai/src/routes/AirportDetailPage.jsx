import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { View, Heading, Tabs, TabList, Item, Content, Button } from '@adobe/react-spectrum';

const airportDetails = {
  1: { name: 'Indira Gandhi International Airport', terminals: [{ id: 1, name: 'Terminal 1' }, { id: 2, name: 'Terminal 2' }] },
  // other airports...
};

function AirportDetailPage() {
  const { id } = useParams();
  const airport = airportDetails[id];

  return (
    <View>
      <Heading level={1}>{airport.name}</Heading>
      <Tabs aria-label="Airport Details">
        <TabList>
          <Item key="terminals">Terminals</Item>
          <Item key="transport">Transport</Item>
          <Item key="contact">Contact Details</Item>
        </TabList>
        <Content>
          {airport.terminals.map(terminal => (
            <Button key={terminal.id} variant="primary">
              <Link to={`/airport/${id}/terminal/${terminal.id}`}>{terminal.name}</Link>
            </Button>
          ))}
        </Content>
      </Tabs>
    </View>
  );
}

export default AirportDetailPage;
