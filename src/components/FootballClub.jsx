function FootballClub(props) {
  const { name, country } = props;
  return (
    <div>
      <h2>Nume: {name}</h2>
      <p>Country: {country} </p>
    </div>
  );
}

export default FootballClub;
