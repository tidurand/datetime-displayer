import {
  DATE_ATTRIBUTE,
  HOUR12_ATTRIBUTE,
  LOCALE_ATTRIBUTE,
  TIME_ZONE_ATTRIBUTE,
} from './attributes'

const isValidDate = (date: string) => {
  return !isNaN(Date.parse(date))
}

const getDate = (element: HTMLElement) => {
  const dateAttribute = element.getAttribute(DATE_ATTRIBUTE)

  if (dateAttribute) {
    if (!isValidDate(dateAttribute)) throw new Error('Invalid date attribute')
    return new Date(dateAttribute)
  } else {
    return new Date()
  }
}

export const parseDateTimeAttributes = (element: HTMLElement) => {
  const { timeZone: userTimeZone, locale: userLocale } =
    Intl.DateTimeFormat().resolvedOptions()

  const date = getDate(element)

  const locale = element.getAttribute(LOCALE_ATTRIBUTE) || userLocale
  const timeZone = element.getAttribute(TIME_ZONE_ATTRIBUTE) || userTimeZone
  const hour12 = element.getAttribute(HOUR12_ATTRIBUTE) === 'true'

  return { date, locale, timeZone, hour12 }
}
