

export function convertHoursToMinutes(hourString: string){

  const [hour, minutos] = hourString.split(":").map(Number)

  return (hour * 60) + minutos

}