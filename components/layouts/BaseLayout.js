import Header from '../shared/header';

const BaseLayout = props => {

  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default BaseLayout;