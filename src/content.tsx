import { createRoot } from 'react-dom/client'
import React from 'react'
import { setRootEl } from './lib/export'
import './styles/global.scss'
import 'bootstrap'
import MoneyApp from './containers/MoneyApp'

const rootEl = setRootEl()
rootEl.id = 'root'
const root = createRoot(rootEl)
root.render(<MoneyApp />)
