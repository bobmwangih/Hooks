function Button(props) {
  const handleClick = () => props.onClickFunction(props.number);
  return <button onClick={handleClick}> {props.number} </button>;
}

function Onyesha(props) {
  return <div> {props.message} </div>;
}

function Fullblown() {
  const [counter, counterTimer] = useState(5);
  const pesa = "bucks";
  const incrementCounter = incrementValue =>
    counterTimer(counter + incrementValue);
  //const incrementCount=()=>counterTimer(counter+5);
  //const incrementC=()=>counterTimer(counter+10);
  //const increment=()=>counterTimer(counter*counter);
  return (
    <div>
      <Button onClickFunction={incrementCounter} number={1} />{" "}
      <Button onClickFunction={incrementCounter} number={5} />{" "}
      <Button onClickFunction={incrementCounter} number={10} />{" "}
      <Onyesha message={counter} /> <Onyesha message={pesa} />{" "}
    </div>
  );
}
ReactDOM.render(<Fullblown />, document.getElementById("mountNode"));
