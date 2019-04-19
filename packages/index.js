import Button from './button/index'; // 引入组件
import Input from './input/index'; // 引入组件

const components = [
  Button,
	Input
];
//'vue-use是调用的install方法'
const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
    console.log('传入参数install方法')
  install(window.Vue);
}

export default {
  install, // 如果在外面使用vue.use的话，就会默认使用install方法
  Button,
	Input
};