import type { Webflow } from '@finsweet/ts-utils'
import { displayTime } from './displayer'

declare const Webflow: Webflow

Webflow.push(() => {
  displayTime()
  setInterval(displayTime, 1000)
})
