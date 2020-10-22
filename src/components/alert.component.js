import React, { useState } from 'react';
import { UncontrolledAlert } from 'reactstrap';

const FormAlert = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <UncontrolledAlert color="info">
      I am an alert and I can be dismissed!
    </UncontrolledAlert>
  );
}

export default FormAlert;