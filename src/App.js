import React, { useEffect, useState, useRef } from 'react';
import Router from './Routers';
import { YgModal } from 'components';
import { Segment, Loader, Dimmer } from 'semantic-ui-react';

const App = () => {

  const [loading, setLoading] = useState(false);
  const modalRef = useRef();

  const onLoading = () => {
    setLoading(true);
  }

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <div className="App">
      <Segment>
        <Dimmer active={loading}>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>
        <YgModal ref={modalRef} />
        <Router modal={modalRef} onLoading={onLoading} />
      </Segment>
    </div>
  );
}

export default App;
