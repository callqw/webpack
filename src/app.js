/**
 * Created by xj on 2017/4/18.
 */
import Layer from './components/layer/layer.js';
const App = function () {
    var dom = document.getElementById('App');
    var layer = new Layer();
    dom.innerHTML = layer.tpl;
   // document.(layer.tpl);
}
new App();