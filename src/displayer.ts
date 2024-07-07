import { formatDateTime } from './formatter'
import { DISPLAY_TIME_ATTRIBUTE } from './attributes'
import { parseDateTimeAttributes } from './parser'

const displayTimeElement = (element: HTMLElement) => {
  try {
    const { date, locale, timeZone, isHour12 } =
      parseDateTimeAttributes(element)
    const dateTime = formatDateTime(element, date, locale, timeZone, isHour12)

    element.innerText = dateTime
  } catch (error) {
    console.error('Error processing datetime element:', error)
    element.innerText = 'Invalid attribute'
  }
}

export const displayTime = () => {
  const datetimeElements = document.querySelectorAll(
    `[${DISPLAY_TIME_ATTRIBUTE}]`,
  ) as NodeListOf<HTMLElement>

  datetimeElements.forEach(displayTimeElement)
}
