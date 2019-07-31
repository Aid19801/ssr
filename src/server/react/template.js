import serialize from 'serialize-javascript';

// put window.__INITIAL_DATA__ into <head> in a <script> tag
// see if it comes out in redux

const template = (state, config, someHTML, res) => {
    let obj = {
        foo: 'foo-val',
        bar: 'bar-val',
        num: 13249,
    }

    console.log(serialize(obj));

    return `
    <!DOCTYPE html>
  <html lang="en-GB">
  <head>
    <base href="/" target="_self">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
  </head>
  <body>
    <h1>i am a rendered html string from template function</h1>
  </body>
</html>
    `
}

export default template;

