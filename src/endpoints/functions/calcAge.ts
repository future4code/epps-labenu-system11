export function calcAge(dateString:string) {
    console.log("data banco",dateString)
    const birthday = +new Date(dateString);
    const age = (~~((Date.now() - birthday) / (31557600000)))
    console.log("idade",age)
    return age
}
  