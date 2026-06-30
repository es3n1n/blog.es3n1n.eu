export const formatDate = (date: Date) => date.toISOString().slice(0, 10)

const RELATIVE_DIVISIONS: {
  amount: number
  unit: Intl.RelativeTimeFormatUnit
}[] = [
  { amount: 60, unit: 'second' },
  { amount: 60, unit: 'minute' },
  { amount: 24, unit: 'hour' },
  { amount: 30, unit: 'day' },
  { amount: 12, unit: 'month' },
  { amount: Number.POSITIVE_INFINITY, unit: 'year' },
]
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export const relativeTime = (whenMs: number, nowMs = Date.now()) => {
  let delta = (whenMs - nowMs) / 1000
  for (const { amount, unit } of RELATIVE_DIVISIONS) {
    if (Math.abs(delta) < amount) return rtf.format(Math.round(delta), unit)
    delta /= amount
  }
  return ''
}

export const formatClock = (date: Date) =>
  date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

export const formatStamp = (date: Date) =>
  date.toLocaleString([], { dateStyle: 'full', timeStyle: 'short' })
