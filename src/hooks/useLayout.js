import { useSelector } from 'react-redux';
import withPageWrapper from '../hoc/withWrapper';
import {DefaultLayout, AlternateLayout} from '../layouts';

const useLayout = (Component) => {
    const selectedLayout = useSelector((state) => state.layout.selectedLayout);
  
    const layoutMap = {
      default: DefaultLayout,
      alternate: AlternateLayout,
    };
  
    const SelectedLayout = layoutMap[selectedLayout] || DefaultLayout;
  
    const ComponentWithSelectedLayout = withPageWrapper(SelectedLayout)(Component);
  
    return <ComponentWithSelectedLayout/>;
};

export default useLayout;