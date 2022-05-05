import useFetch from '../hooks/useFetch';

const Header = () => {
  const { data: quote, isPending, error } = useFetch('https://inspiring-quotes.p.rapidapi.com/random', 'inspiring-quotes.p.rapidapi.com', 'bdb71526c5mshac4f1c1171b27cep1f4168jsne07657b13cf0');

  return (
    <div className="header">
      <h1>Photo Gallery</h1>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { quote && <p>{ quote.quote } - { quote.author }</p> }
    </div>
  );
}
 
export default Header;