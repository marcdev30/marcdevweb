import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// desech studio - start import block
import Index from './page/Index.js'
import Index from './page/export2/Index.js'
import Index from './page/export2/public/Index.js'
// desech studio - end import block

export default function App () {
  return (
    <BrowserRouter>
      <Switch>
        {/* desech studio - start router block */}
        <Route path="/export2/public/"><Index /></Route>
        <Route path="/export2/"><Index /></Route>
        <Route path="/"><Index /></Route>
        {/* desech studio - end router block */}
      </Switch>
    </BrowserRouter>
  )
}
