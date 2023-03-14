// const React = require('react')
import React from 'react'
// const ReactDom = require('react-dom/client')
import ReactDom  from 'react-dom/client'
const NumberBaseball = require('./NumberBaseball')

ReactDom.createRoot(document.querySelector('#root')).render(<NumberBaseball/>);