!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("h6c0i");document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.target.elements.delay.value),n=Number(e.target.elements.step.value),o=Number(e.target.elements.amount.value);for(let e=0;e<o;e++){const o=e+1,r=t+n*e;setTimeout((()=>{var e,t;(e=o,t=r,new Promise(((n,o)=>{const i=Math.random()>.3;i?n({position:e,delay:t}):o({position:e,delay:t})}))).then((({position:e,delay:t})=>{i.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`Rejected promise ${e} in ${t}ms`)}))}),r)}}))}();
//# sourceMappingURL=03-promises.be0b597f.js.map