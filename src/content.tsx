import { createRoot } from 'react-dom/client'
import React from 'react'
import { setRootEl } from './lib/site'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'
import 'bootstrap'
import MoneyApp from './containers/MoneyApp'

const rootEl = setRootEl()
rootEl.id = 'root'
const root = createRoot(rootEl)
root.render(<MoneyApp />)
