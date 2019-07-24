
// import BackTop from './components/BasePcComponents/back-top';
// import Badge from './components/BasePcComponents/badge';
// import Button from './components/BasePcComponents/button';
import Carousel from './components/carousel/carousel.vue';
import CarouselItem from './components/carousel/carousel-item.vue';
import Collapse from './components/collapse/collapse.vue';
import Panel from './components/collapse/panel.vue';
// import Content from './components/BasePcComponents/content';
// import Dropdown from './components/BasePcComponents/dropdown';
// import Form from './components/BasePcComponents/form';
// import Icon from './components/BasePcComponents/icon';
// import Input from './components/BasePcComponents/input';
// import InputNumber from './components/BasePcComponents/input-number';
// import LoadingBar from './components/BasePcComponents/loading-bar';
// import Message from './components/BasePcComponents/message';
// import Modal from './components/BasePcComponents/modal';
// import Slider from './components/BasePcComponents/slider';
// import Spin from './components/BasePcComponents/spin';
// import Table from './components/BasePcComponents/table';
// import Tabs from './components/BasePcComponents/tabs';
// import Tag from './components/BasePcComponents/tag';
import Col from './components/grid/col.vue';
import Row from './components/grid/row.vue';
import baseHeader from '../src/views/components/baseHeader.vue'
// import {Select, Option, OptionGroup} from './components/BasePcComponents/select';


// const components = {
//     BackTop,
//     Badge,
//     Button,
//     ButtonGroup: Button.Group,
//     Carousel,
//     CarouselItem: Carousel.Item,
//     Col,
//     Collapse,
//     Content: Content,
//     Dropdown,
//     DropdownItem: Dropdown.Item,
//     DropdownMenu: Dropdown.Menu,
//     Form,
//     FormItem: Form.Item,
//     Icon,
//     Input,
//     InputNumber,
//     Modal,
//     Option: Option,
//     OptionGroup,
//     Panel: Collapse.Panel,
//     Row,
//     Select,
//     Slider,
//     Table,
//     Tabs: Tabs,
//     TabPane: Tabs.Pane,
//     Tag,

// };
const components = {
    Col,
    Carousel,
    Row,
    CarouselItem,
    baseHeader,
    Collapse,
    Panel
};

const UI = {
    ...components,
};

const install = function (Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(UI).forEach(key => {
        Vue.component(key, UI[key]);
    });

    Vue.prototype.$IVIEW = {
        size: opts.size || '',
        transfer: 'transfer' in opts ? opts.transfer : ''
    };

    // Vue.prototype.$Loading = LoadingBar;
    // Vue.prototype.$Message = Message;
    // Vue.prototype.$Modal = Modal;
    // Vue.prototype.$Spin = Spin;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default install;



// WEBPACK FOOTER //
// ./src/index.js