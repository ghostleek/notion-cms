const Home = () => {
  return <p>{JSON.stringify(quote)}</p>
};

export const getStaticProps = async () => {
  // fetch data
  const quote = await fetch(
      "https://pokeapi.co/api/v2/pokemon/charizard"
  ).then(resp => resp.json());

  return {
      props: {
          quote,
      },
  };
};