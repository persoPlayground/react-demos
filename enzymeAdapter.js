import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//cors network error
global.XMLHttpRequest = undefined

configure({ adapter: new Adapter(),
//disableLifecycleMethods: true
 });