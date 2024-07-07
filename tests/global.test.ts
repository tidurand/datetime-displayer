// tests/dateFormatter.test.ts
import { DATE_ATTRIBUTE, DISPLAY_TIME_ATTRIBUTE, SHOW_ATTRIBUTE } from '../src/attributes';
import { formatDateTime } from '../src/formatter';
import { parseDateTimeAttributes } from '../src/parser';

describe('global tests', () => {
  it('should return correct format options for given attributes', () => {
    const element = document.createElement('div');
    element.setAttribute(DISPLAY_TIME_ATTRIBUTE, 'true');

    const { date, locale, timeZone, hour12 } = parseDateTimeAttributes(element)
    const result = formatDateTime(element, date, locale, timeZone, hour12);

    expect(result).toEqual(new Intl.DateTimeFormat().format(Date.now()))
  });

  it('should return correct format options for given attributes', () => {
    const element = document.createElement('div');
    element.setAttribute(DISPLAY_TIME_ATTRIBUTE, 'true');
    element.setAttribute('time-zone', 'America/New_York');

    const { date, locale, timeZone, hour12 } = parseDateTimeAttributes(element)
    const result = formatDateTime(element, date, locale, timeZone, hour12);

    expect(result).toEqual(new Intl.DateTimeFormat(locale, {timeZone: 'America/New_York'}).format(Date.now()))
  });

  it('should return correct format options for given attributes', () => {
    const element = document.createElement('div');
    element.setAttribute(DISPLAY_TIME_ATTRIBUTE, 'true');
    element.setAttribute(SHOW_ATTRIBUTE, 'year-month-day-hour-minute');
    element.setAttribute('format-year', 'numeric');
    element.setAttribute('format-month', 'long');
    element.setAttribute('format-hour', '2-digit');
    element.setAttribute('format-minute', '2-digit');

    const { date, locale, timeZone, hour12 } = parseDateTimeAttributes(element)
    const result = formatDateTime(element, date, locale, timeZone, hour12);

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }
    expect(result).toEqual(new Intl.DateTimeFormat(locale, options).format(date))
  });
});
