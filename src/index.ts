import type { Webflow } from '@finsweet/ts-utils'
import { displayTime } from './displayer'
import { DATE_ATTRIBUTE } from './attributes'

declare const Webflow: Webflow

Webflow.push(() => {
  displayTime()

  //real-time clock
  if (!document.querySelector(`[${DATE_ATTRIBUTE}]`)) {
    setInterval(displayTime, 1000)
  }
})
