export const add = () => async dispatch => {
  const res = await fetch("https://swapi.co/api/people/");
  // console.log({ res });
  const res2 = await res.json();
  // console.log({ res2 });
  const people = res2.results;
  // console.log({ people });

  return dispatch({
    type: "ADD",
    people
  });
};
