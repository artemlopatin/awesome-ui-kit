(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{267:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CssVar=void 0,exports.CssVar={color:{base:"--color_base",main:"--color_main"},backgroundColor:{main:"--background-color_main"},fontSize:{s:"--font-size_s",m:"--font-size_m",l:"--font-size_l"}}},268:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ButtonSize=void 0,function(ButtonSize){ButtonSize.S="s",ButtonSize.M="m",ButtonSize.L="l"}(exports.ButtonSize||(exports.ButtonSize={}))},272:function(module,exports,__webpack_require__){__webpack_require__(273),__webpack_require__(419),module.exports=__webpack_require__(420)},337:function(module,exports){},420:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(109);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(610)],module)}.call(this,__webpack_require__(421)(module))},610:function(module,exports,__webpack_require__){var map={"./components/Button/index.stories.tsx":611,"./components/Panel/index.stories.tsx":616};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=610},611:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importDefault(__webpack_require__(1)),_1=__webpack_require__(612),types_1=__webpack_require__(268),react_2=__webpack_require__(109),cosmos_1=__webpack_require__(615);react_2.storiesOf("Button",module).add("size",()=>react_1.default.createElement(cosmos_1.CosmosTheme,null,react_1.default.createElement(_1.Button,{size:types_1.ButtonSize.S},"Start"),react_1.default.createElement(_1.Button,{size:types_1.ButtonSize.M},"Start"),react_1.default.createElement(_1.Button,{size:types_1.ButtonSize.L},"Start"))).add("L",()=>react_1.default.createElement(cosmos_1.CosmosTheme,null,react_1.default.createElement(_1.Button,{size:types_1.ButtonSize.L},"Button")))}).call(this,__webpack_require__(55)(module))},612:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Button=void 0;const react_1=__importDefault(__webpack_require__(1)),styled_1=__webpack_require__(613);exports.Button=({children:children,size:size})=>react_1.default.createElement(styled_1.StyledButton,{size:size},children)},613:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.StyledButton=void 0;const styled_components_1=__importDefault(__webpack_require__(163)),constants_1=__webpack_require__(267),types_1=__webpack_require__(268);exports.StyledButton=styled_components_1.default.button`
    box-sizing: border-box;
    border: 2px solid;
    background: var(${constants_1.CssVar.backgroundColor.main});
    cursor: pointer;
    outline: none;
    transition: all .4s ease;
    
    padding: 0 20px;

    color: var(${constants_1.CssVar.color.main});
    border-color: #0099ff;
    
    height: ${p=>(size=>{switch(size){case types_1.ButtonSize.S:return"20px";case types_1.ButtonSize.M:return"30px";case types_1.ButtonSize.L:return"40px"}})(p.size)};
    border-radius:${p=>(size=>{switch(size){case types_1.ButtonSize.S:return"4px";case types_1.ButtonSize.M:return"6px";case types_1.ButtonSize.L:return"8px"}})(p.size)};
    
    font-size: ${p=>(size=>{switch(size){case types_1.ButtonSize.S:return`var(${constants_1.CssVar.fontSize.s});`;case types_1.ButtonSize.M:return`var(${constants_1.CssVar.fontSize.m});`;case types_1.ButtonSize.L:return`var(${constants_1.CssVar.fontSize.l});`}})(p.size)};

    :hover {
        color: #99ffff;
        border-color: #00ffff;
    }
`},615:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CosmosTheme=void 0;const react_1=__importDefault(__webpack_require__(1)),styled_components_1=__importDefault(__webpack_require__(163)),constants_1=__webpack_require__(267),StyledTheme=styled_components_1.default.div`
    ${constants_1.CssVar.color.base}: white;
    ${constants_1.CssVar.color.main}: #00ccff;
    ${constants_1.CssVar.backgroundColor.main}: #000066;
    ${constants_1.CssVar.fontSize.s}: 12px;
    ${constants_1.CssVar.fontSize.m}: 16px;
    ${constants_1.CssVar.fontSize.l}: 20px;
`;exports.CosmosTheme=({children:children})=>react_1.default.createElement(StyledTheme,null,children)},616:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importDefault(__webpack_require__(1)),_1=__webpack_require__(617);__webpack_require__(109).storiesOf("Panel",module).add("default",()=>react_1.default.createElement(_1.Panel,null,"Some text"))}).call(this,__webpack_require__(55)(module))},617:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Panel=void 0;const react_1=__importDefault(__webpack_require__(1)),StyledDiv=__importDefault(__webpack_require__(163)).default.div`
    padding: 20px;
    border: #222222 1px solid;
    border-radius: 8px;
`;exports.Panel=({children:children})=>react_1.default.createElement(StyledDiv,null,children)}},[[272,1,2]]]);
//# sourceMappingURL=main.005a2a5b2fff0dd34fa0.bundle.js.map