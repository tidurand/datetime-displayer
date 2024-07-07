# Datetime displayer for Webflow

This package is a helper tool designed to display dates and times on Webflow sites effortlessly.

## Installation
To install and use this package, include the following script in your Webflow project:

```html
<script defer src="https://cdn.jsdelivr.net/npm/@tidurand/datetime-displayer@0.1.0/index.js"></script>
```

## Usage

To use this package, add the required attributes to the HTML elements where you want the date and time to appear. Customize the display using the optional attributes as needed.

### Example

```html
<div datetime-element="true" date="2024-07-07T12:00:00Z" show="month-day-hour-minute" format-month="short" locale="en-US" hour12="true"></div>
```

## Attributes

### `datetime-element="true"` (required)
Add this attribute to the elements where you want to display the date and time.

### `date`
Use this attribute if you want to display a specific date. **If not provided, the element will display the real-time date and time.**

Currently, you can use only this format `YYYY-MM-DDTHH:mm:ss.sssZ`

Examples: `date="2024-07-07T12:00:00Z"`, `date="2024-07-07"`

### `show`
This attribute specifies which parts of the date and time to display. You can use any combination of the following, separated by hyphens:
- `weekday`
- `year`
- `month`
- `day`
- `hour`
- `minute`
- `second`
  
Example: weekday-day-hour-minute

By default: year-month-day

### `format-FORMAT_OPTIONS`
Use this attribute to format specific parts of the date and time. **By default, all parts are displayed as numeric.** You can specify different formats for each part:
- `weekday`: e.g., `format-weekday="long"` (options: `narrow`, `short`, `long`)
- `year`: e.g., `format-year="numeric"` (options: `numeric`, `2-digit`)
- `month`: e.g., `format-month="long"` (options: `numeric`, `2-digit`, `narrow`, `short`, `long`)
- `day`: e.g., `format-day="numeric"` (options: `numeric`, `2-digit`)
- `hour`: e.g., `format-hour="numeric"` (options: `numeric`, `2-digit`)
- `minute`: e.g., `format-minute="numeric"` (options: `numeric`, `2-digit`)
- `second`: e.g., `format-second="numeric"` (options: `numeric`, `2-digit`)

### `time-zone`
Set a specific time zone. If not provided, the user's local time zone will be used.

Example: `time-zone="America/New_York"`. [List of time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

### `locale`
Set a specific locale for the date and time display. If not provided, the user's locale will be used.

Example: `locale="fr"`. [List of locales](https://github.com/date-fns/date-fns/tree/main/src/locale)

### `hour12`
Set this attribute to `true` to use a 12-hour clock format. If not provided, the user's format will be used.
