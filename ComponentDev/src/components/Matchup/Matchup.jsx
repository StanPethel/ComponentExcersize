function Matchup(props) {
  console.log(props);
  return (
    <span>
      <h1>
        {props.homeTeam} vs. {props.awayTeam}
      </h1>
    </span>
  );
}

export default Matchup;
