!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=43)}({43:function(e,r){const t=process.env.REACT_APP_FAUNADB_SECRET,n=process.env.REACT_APP_SERVER_URL,o=process.env.REACT_APP_NETLIFY_FUNCTIONS_URL,u=process.env.REACT_APP_NODEMAILER_ACCOUNT,i=process.env.REACT_APP_NODEMAILER_PASSWORD;e.exports.Utils={FAUNADB_SECRET:t,SERVER_URL:n,NETLIFY_FUNCTIONS_URL:o,NODEMAILER_ACCOUNT:u,NODEMAILER_PASSWORD:i,EMAIL_VERIFY:1,FORGOT_PASSWORD:2,VERIFY_EMAIL_SUBJECT:"Verify your account",RESET_PASSWORD_SUBJECT:"Reset password",VERIFY_EMAIL_MESSAGE:"<h3>Hello</h3>\n                    <h4>Thanks for your registering to COMMERCIALE4.0</h4>\n                    We now need to verify your email address.<br/>\n                    Please check the link in that email to coutinue.\n                    ",RESET_PASSWORD_MESSAGE:"<h3>Hello</h3>\n                    We've received a request to reset your password. If you didn't make the request, just ignore this email. Otherwise, you can reset your password using this link:\n                    "}}}));