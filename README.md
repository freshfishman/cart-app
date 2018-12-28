# ` bugs--collections`<br>
## 1.`eslint--bug`
由于项目是按照`create-react-app`生成的，在使用之前试着按照`create-react-app [project.name] --script-version custom-react-scripts`命令生成，出现了Eslint版本错误即eslint 版本不匹配
````
The react-scripts package provided by Create React App requires a dependency:
  "eslint": "9.0.0"
Dont try to install it manually: your package manager does it automatically.
However, a different version of eslint was detected higher up in the tree:
````
在卸载`custom-react-scripts`后可以正常启动项目<br>
## 2.自定义组件中借口暴露问题
```
目录结构
├── conponents
│   ├── Carts
│   │   └── index.js
│   ├── Home
│   │   └── index.js
│   ├── index.js
│   ├── Nav
│   │   └── index.js
│   └── Products
│       └── index.js
├── index.js
└── serviceWorker.js
```
在`conponents`中的`index.js`中暴露全部组件的接口，代码如下
```
export Home from './Home'
export Product from './Product'
export Carts from './Carts'
//运行过程中报错
SyntaxError: /home/jyc/桌面/cart/cart-app/e-business/src/conponents/index.js: Support for the experimental syntax 'exportDefaultFrom' isn't currently enabled (1:9):                                                 ify/max_user_watches

> 1 | export  Home  from './Home';
    |         ^
  2 | export  Products  from './Products';
  3 | export  Carts  from './Carts';

Add @babel/plugin-proposal-export-default-from (https://git.io/vb4yH) to the 'plugins' section of your Babel config to enable transformation.
```
可解决的办法更改`index.js`中的书写方式即可正常运行
```
export { default as Home } from './Home';
export { default as Products } from './Products';
export { default as Carts } from './Carts';
```
[参考链接](https://stackoverflow.com/questions/41028317/export-default-from-doesnt-work-with-babel-react) 
