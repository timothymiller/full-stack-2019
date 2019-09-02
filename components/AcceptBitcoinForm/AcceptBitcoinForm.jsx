
const AcceptBitcoinForm = props => {

    return (<div>{props.bitcoinAddress}</div>)
}

AcceptBitcoinForm.getInitialProps = async function() {
    const res = await fetch('http://localhost:3000/api/bitcoin-address');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data}`);
  
    return {
      bitcoinAddress: data
    };
  };

export default AcceptBitcoinForm;