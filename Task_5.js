//Replace all spaces in a string with %20
function replacer(string) {
  const regExp = / /g;
  console.log(string.replace(regExp, "%20"));
}
