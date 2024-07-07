import { formatDateTime } from './formatter'
import { DISPLAY_TIME_ATTRIBUTE } from './attributes'
import { parseDateTimeAttributes } from './parser'

export const displayTime = () => {
  const datetimeElements = document.querySelectorAll(
    `[${DISPLAY_TIME_ATTRIBUTE}]`,
  ) as NodeListOf<HTMLElement>

  datetimeElements.forEach((element) => {
    try {
      const { date, locale, timeZone, hour12 } =
        parseDateTimeAttributes(element)
      const dateTime = formatDateTime(element, date, locale, timeZone, hour12)

      element.innerText = dateTime
    } catch (error) {
      console.error('Error processing datetime element:', error)
      element.innerText = 'Invalide attribute'
    }
  })
}
