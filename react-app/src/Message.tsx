function Message() {
  const name = "Michal";
  if (name) {
    return <h1>Hello {name}</h1>;
  } else return <h1>Hellos World</h1>;
}
export default Message;
