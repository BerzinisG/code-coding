const randomColor = () => {
  return `#${Math.floor(Math.random()*(2**24)).toString(16)}`;
}
export default randomColor; 