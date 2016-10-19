import moment from 'moment';

export function formatDay(day, locale) {

  return moment(day).locale(locale).format('ddd ll');
}

export function formatMonthTitle(date, locale) {

  return moment(date).locale(locale).format('MMMM YYYY');
}

export function formatWeekdayShort(day, locale) {

  let weekDayShort = moment().locale(locale).weekday(day).format('dd');
  if (locale === 'en') {
    weekDayShort = moment().locale(locale).weekday(day).format('dd').charAt(0);
  }

  return weekDayShort;
}

export function formatWeekdayLong(day, locale) {

  return moment().locale(locale).weekday(day).format('dddd');
}

export function getFirstDayOfWeek(locale) {

  const localeData = moment.localeData(locale);

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
