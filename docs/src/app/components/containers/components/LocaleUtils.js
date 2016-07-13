import moment from 'moment';

export function formatDay(day, locale) {

  return moment(day).locale(locale).format("ddd ll");
}

export function formatMonthTitle(date, locale) {

  return moment(date).locale(locale).format("MMMM YYYY");
}

export function formatWeekdayShort(day, locale) {

  let weekDayShort;
  if (locale === 'en') {
    // if the loacle is default - english calendar then update as 'spec'
    weekDayShort = moment().locale(locale).weekday(day).format("dd").charAt(0);

  } else {
    weekDayShort = moment().locale(locale).weekday(day).format("dd");
  }

  return weekDayShort;
}

export function formatWeekdayLong(day, locale) {

  return moment().locale(locale).weekday(day).format("dddd");
}

export function getFirstDayOfWeek(locale) {

  let localeData = moment.localeData(locale);

  let firstDayOfWeek = localeData;

  if (localeData != null) {
    firstDayOfWeek = localeData.firstDayOfWeek();
  }else {
    firstDayOfWeek = moment.localeData('en').firstDayOfWeek();
  }
  return firstDayOfWeek;
}

export default {
  formatDay,
  formatMonthTitle,
  formatWeekdayShort,
  formatWeekdayLong,
  getFirstDayOfWeek
}
