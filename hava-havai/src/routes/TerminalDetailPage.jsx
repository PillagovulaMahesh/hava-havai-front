import React from 'react';
import { useParams } from 'react-router-dom';
import { View, Heading, TextArea, Button } from '@adobe/react-spectrum';

function TerminalDetailPage() {
  const { id, terminalId } = useParams();

  return (
    <View>
      <Heading level={1}>Terminal {terminalId}</Heading>
      <TextArea label="Description" placeholder="Enter description..." />
      <Button variant="primary" marginTop="size-100">Upload Image</Button>
    </View>
  );
}

export default TerminalDetailPage;
