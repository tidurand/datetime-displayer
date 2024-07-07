import { DATE_ATTRIBUTE, DISPLAY_TIME_ATTRIBUTE, SHOW_ATTRIBUTE } from '../src/attributes';
import { formatDateTime } from '../src/formatter';
import { parseDateTimeAttributes } from '../src/parser';

describe('typing errors in attributes', () => {
  it('should return error, bad date', () => {
    const element = document.createElement('div');
    element.setAttribute(DISPLAY_TIME_ATTRIBUTE, 'true');
    element.setAttribute('date', 'toto');

    const testCall = () => {
      const { date, locale, timeZone, hour12 } = parseDateTimeAttributes(element);
      formatDateTime(element, date, locale, timeZone, hour12);
    };

    expect(testCall).toThrow('Invalid date attribute');
  });

});
