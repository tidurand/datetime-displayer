// tests/dateFormatter.test.ts
import { DISPLAY_TIME_ATTRIBUTE, SHOW_ATTRIBUTE } from '../src/attributes';
import { buildFormatOptions } from '../src/formatter';

describe('buildFormatOptions', () => {
  it('should return correct format options for given attributes', () => {
    // Create a mock HTML element with attributes
    const element = document.createElement('div');
    element.setAttribute(DISPLAY_TIME_ATTRIBUTE, 'true');
    element.setAttribute(SHOW_ATTRIBUTE, 'year-month-day-hour-minute');
    element.setAttribute('format-year', 'numeric');
    element.setAttribute('format-month', 'long');
    element.setAttribute('format-day', '2-digit');
    element.setAttribute('format-hour', '2-digit');
    element.setAttribute('format-minute', '2-digit');

    const options = buildFormatOptions(element);

    expect(options).toEqual({
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  });

  it('should use default "numeric" for missing format attributes', () => {
    const element = document.createElement('div');
    element.setAttribute(DISPLAY_TIME_ATTRIBUTE, 'true');
    element.setAttribute(SHOW_ATTRIBUTE, 'year-month-day-hour-minute');

    const options = buildFormatOptions(element);

    expect(options).toEqual({
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  });

  it('should handle different combinations of attributes', () => {
    const element = document.createElement('div');
    element.setAttribute(DISPLAY_TIME_ATTRIBUTE, 'true');
    element.setAttribute(SHOW_ATTRIBUTE, 'weekday-hour-minute');
    element.setAttribute('format-weekday', 'long');
    element.setAttribute('format-hour', '2-digit');
    element.setAttribute('format-minute', 'numeric');

    const options = buildFormatOptions(element);

    expect(options).toEqual({
      weekday: 'long',
      hour: '2-digit',
      minute: 'numeric',
    });
  });
});
