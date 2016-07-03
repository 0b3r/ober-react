import createTitle from 'components/title';
import createHello from 'components/hello';
import createHeader from 'components/header';
import { createStore } from 'redux';

import hello from 'store/reducers/hello';

const store = createStore(hello);

const setMode = (mode) => store.dispatch({ type: 'SET_MODE', mode });

store.subscribe(() => {
  console.log(store.getState());
});

export default React => ({ foo, ...props }) => {
  const Title = createTitle(React);
  const Hello = createHello(React);
  const Header = createHeader(React);

  const helloProps = {
    ...props,
    actions: {
      setMode
    }
  };

  const headerProps = {
    headerContent: 'This is a test',
    headerClass: 'site-header'
  };

  return (
    <div className="content">
      <Header { ...headerProps} />
      <Title { ...props } />
      <Hello { ...helloProps } />
      <p>Content goes here: { foo }</p>
    </div>
  );
};
