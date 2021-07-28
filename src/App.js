import React, { useRef } from 'react';
import { YgModal, YgToast } from 'components';
import Router from './Routers';
// import { Segment, Loader, Dimmer } from 'semantic-ui-react';

const App = () => {

  // const [loading, setLoading] = useState(false);
  const modalRef = useRef();
  const toastRef = useRef();

  // const onLoading = () => {
  //   setLoading(true);
  // }

  // useEffect(() => {
  //   if (loading) {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 3000);
  //   }
  // }, [loading]);

  console.log('APP');

  return (
    <div className="App">
      {/* <Segment>
        <Dimmer active={loading}>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>
        <YgModal ref={modalRef} />
        <Router modal={modalRef} onLoading={onLoading} />
      </Segment> */}
      <YgModal ref={modalRef} />
      <YgToast ref={toastRef} />
      <Router modal={modalRef} toast={toastRef} />
    </div>
  );
};

export default App;
