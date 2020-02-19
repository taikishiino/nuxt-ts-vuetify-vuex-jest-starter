import moment from 'moment'

moment.locale('ja', {
  weekdaysShort: ['日', '月', '火', '水', '木', '金', '土'],
})

export function parseFromDate(date: Date): string {
  return moment
    .utc(date)
    .utcOffset(9)
    .format('YYYY-MM-DDTHH:mm:00Z')
}

export function parseFromUnixtime(unixtime: number): string {
  return moment
    .utc(unixtime * 1000)
    .utcOffset(9)
    .format('YYYY-MM-DDTHH:mm:00Z')
}

export function getUnixtime(date: Date): number {
  return moment(date).unix()
}

export function getDateTime(unixtime: number): string {
  return moment(unixtime * 1000).format()
}

export function getDateTimeCustomHours(diff: number): Date {
  return moment()
    .add('hours', diff)
    .toDate()
}

export function getUnixtimeCustomHours(diff: number): number {
  return moment()
    .add('hours', diff)
    .unix()
}

export function getDisplayTime(date: Date): string {
  if (!date) return '-'
  const d: Date = new Date(date)
  const month: number = d.getMonth() + 1
  const dates: number = d.getDate()
  const days: string[] = ['日', '月', '火', '水', '木', '金', '土']
  const day: string = days[d.getDay()]
  return `${month}月${dates}日（${day}）`
}

export function isToday(date: Date): boolean {
  return (
    moment(date).format('YYYYMMDD') === moment(new Date()).format('YYYYMMDD')
  )
}

export function isTommorow(date: Date): boolean {
  return (
    moment(date).format('YYYYMMDD') ===
    moment(new Date())
      .add(1, 'days')
      .format('YYYYMMDD')
  )
}

export function isBeforeDate(date: Date): boolean {
  return moment(date).format('Y/M/D') <= moment().format('Y/M/D')
}
