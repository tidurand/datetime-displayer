import { formatDateTime } from './formatter'
import {
  DATE_ATTRIBUTE,
  DISPLAY_TIME_ATTRIBUTE,
  HOUR12_ATTRIBUTE,
  LOCALE_ATTRIBUTE,
  TIME_ZONE_ATTRIBUTE,
} from './attributes'

export const getDateTimeAttributes = (element: HTMLElement) => {
  const { timeZone: userTimeZone, locale: userLocale } =
    Intl.DateTimeFormat().resolvedOptions()
  const date = new Date(element.getAttribute(DATE_ATTRIBUTE) || Date.now())
  const locale = element.getAttribute(LOCALE_ATTRIBUTE) || userLocale
  const timeZone = element.getAttribute(TIME_ZONE_ATTRIBUTE) || userTimeZone
  const hour12 = element.getAttribute(HOUR12_ATTRIBUTE) === 'true'

  return { date, locale, timeZone, hour12 }
}

export const displayTime = () => {
  const datetimeElements = document.querySelectorAll(
    `[${DISPLAY_TIME_ATTRIBUTE}]`,
  ) as NodeListOf<HTMLElement>

  datetimeElements.forEach((element) => {
    const { date, locale, timeZone, hour12 } = getDateTimeAttributes(element)
    const dateTime = formatDateTime(element, date, locale, timeZone, hour12)

    element.innerText = dateTime
  })
}
