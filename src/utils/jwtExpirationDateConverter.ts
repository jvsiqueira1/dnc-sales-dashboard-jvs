/**
 * Convert JWT exp in days
 * @param exp - Number to be converted
 * @returns Converted exp in days
 */
export function jwtExpirationDateConverted(exp: number): number {
  const currentTime = Math.floor(Date.now() / 1000)
  const secondsUntilExpiration = exp - currentTime
  const secondsInADay = 60 * 60 * 24
  const dayUntilExpiration = secondsUntilExpiration / secondsInADay

  return dayUntilExpiration
}
