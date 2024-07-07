import { FORMAT_OPTIONS, SHOW_ATTRIBUTE } from './attributes'

const getDisplayedOptions = (element: HTMLElement) => {
  const displayedOptions = element.getAttribute(SHOW_ATTRIBUTE)

  return displayedOptions
    ? displayedOptions.split('-')
    : ['year', 'month', 'day']
}

const getFormatAttributes = (element: HTMLElement) => {
  const options: { [key: string]: string } = {}

  FORMAT_OPTIONS.forEach((option) => {
    const formatValue = element.getAttribute(`format-${option}`)
    if (formatValue) {
      options[option] = formatValue
    }
  })

  return options
}

export const buildFormatOptions = (element: HTMLElement) => {
  const displayed = getDisplayedOptions(element)
  const format = getFormatAttributes(element)

  return displayed.reduce(
    (acc, key) => {
      acc[key] = format[key] || 'numeric'
      return acc
    },
    {} as { [key: string]: string },
  )
}

export const formatDateTime = (
  element: HTMLElement,
  date: Date,
  locale: string,
  timeZone: string,
  hour12: boolean,
) => {
  const formatOptions = buildFormatOptions(element)
  const dateTimeOptions = { timeZone, hour12, ...formatOptions }
  const dateTimeFormat = new Intl.DateTimeFormat(locale, dateTimeOptions)

  return dateTimeFormat.format(date)
}
