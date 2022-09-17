
export function convertMinuteToHours(minutesAmount: number){

  const hour = Math.floor(minutesAmount / 60)
  const minute = minutesAmount % 60

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`

}