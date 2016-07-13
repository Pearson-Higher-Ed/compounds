import expect from 'expect';
import  LocaleUtils  from '../docs/src/app/components/containers/components/LocaleUtils';
import React from 'react';


describe('LocaleUtils', () => {
  // describe('formatDay', () => {
  //   it('should return day as string', () => {
  //     const date = new Date('2015-12-20');
  //     const formattedDate = LocaleUtils.formatDay(date, 'en');
  //     expect(formattedDate).toEqual('Sat Dec 19, 2015');
  //     const formattedDateIT = LocaleUtils.formatDay(date, 'it');
  //     expect(formattedDateIT).toEqual('Sab 19 dic 2015');
  //   });
  // });

  describe('formatMonthTitle', () => {
    it('should return month and day as string', () => {
      const date = new Date('2015-12-20');
      const formattedDate = LocaleUtils.formatMonthTitle(date, 'en');
      expect(formattedDate).toEqual('December 2015');
      const formattedDateIT = LocaleUtils.formatMonthTitle(date, 'it');
      expect(formattedDateIT).toEqual('dicembre 2015');
    });
  });

  describe('formatWeekdayShort', () => {
    it('should return the short day name as string', () => {
      expect(LocaleUtils.formatWeekdayShort(0, 'en')).toEqual('S');
      expect(LocaleUtils.formatWeekdayShort(0, 'it')).toEqual('Lu');
    });
  });

  describe('formatWeekdayLong', () => {
    it('should return the long day name as string', () => {
      expect(LocaleUtils.formatWeekdayLong(0, 'en')).toEqual('Sunday');
      expect(LocaleUtils.formatWeekdayLong(0, 'it')).toEqual('Lunedì');
    });
  });

  describe('getFirstDayOfWeek', () => {
    it('should return monday for it locale', () => {
      expect(LocaleUtils.getFirstDayOfWeek('it')).toEqual(1);
    });
    it('should return sunday for en locale', () => {
      expect(LocaleUtils.getFirstDayOfWeek()).toEqual(0);
    });
  });
});
