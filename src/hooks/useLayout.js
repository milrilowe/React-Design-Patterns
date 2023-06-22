import { useSelector } from 'react-redux';
import withPageWrapper from '../hoc/withWrapper';
import { DefaultLayout } from '../layouts';

const useLayout = (Component, Layout) => {
    Layout = Layout || DefaultLayout;
  
    const ComponentWithSelectedLayout = withPageWrapper(Layout)(Component);
  
    return <ComponentWithSelectedLayout/>;
};

export default useLayout;
