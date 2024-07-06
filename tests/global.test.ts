// tests/dateFormatter.test.ts
import { DATE_ATTRIBUTE, DISPLAY_TIME_ATTRIBUTE, SHOW_ATTRIBUTE } from '../src/attributes';
import { getDateTimeAttributes } from '../src/displayer';
import { buildFormatOptions, formatDateTime } from '../src/formatter';

describe('buildFormatOptions', () => {
  it('should return correct format options for given attributes', () => {
    const element = document.createElement('div');
    element.setAttribute(DISPLAY_TIME_ATTRIBUTE, 'true');
    element.setAttribute(SHOW_ATTRIBUTE, 'year-month-day-hour-minute');
    element.setAttribute(DATE_ATTRIBUTE, '2024-07-06T18:40:00');
    element.setAttribute('format-year', 'numeric');
    element.setAttribute('format-month', 'long');
    element.setAttribute('format-day', '2-digit');
    element.setAttribute('format-hour', '2-digit');
    element.setAttribute('format-minute', '2-digit');

    const { date, locale, timeZone, hour12 } = getDateTimeAttributes(element)
    const result = formatDateTime(element, date, locale, timeZone, hour12);
    expect(result).toEqual('July 06, 2024 at 18:40')
  });
});
