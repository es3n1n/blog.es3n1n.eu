export interface Row {
  region: string
  reqs: number
  p50: number
  p90: number
}

export const ROWS: Row[] = [
  { region: 'Vietnam', reqs: 22544554, p50: 294, p90: 906 },
  { region: 'South Korea', reqs: 8837224, p50: 265, p90: 302 },
  { region: 'Germany', reqs: 8557475, p50: 12, p90: 14 },
  { region: 'Algeria', reqs: 6058607, p50: 37, p90: 81 },
  { region: 'Tunisia', reqs: 2495543, p50: 26, p90: 51 },
  { region: 'Singapore', reqs: 916664, p50: 360, p90: 587 },
  { region: 'Russia', reqs: 903542, p50: 47, p90: 173 },
  { region: 'Canada', reqs: 836714, p50: 120, p90: 748 },
  { region: 'United States', reqs: 772319, p50: 126, p90: 209 },
  { region: 'India', reqs: 419589, p50: 375, p90: 519 },
  { region: 'Australia', reqs: 128960, p50: 268, p90: 337 },
  { region: 'Japan', reqs: 77990, p50: 257, p90: 303 },
]
