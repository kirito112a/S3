export async function getStaticProps() {
  const res= await fetch("https://api.postman.com/collections/10857893-7790ba35-ab74-44b9-af92-9e5d6bb3dfa5?access_key=PMAT-01GZ71WRC6D4EE6X246J8308BT");
  
 
  const data = await res.json();

  const res2 = await fetch("https://dummyjson.com/products/1");
  
 
  const data2 = await res2.json();

  console.log(data.collection)
  return {
    props: {allData:data}, 
  }
}




function Test({Alldata}) {

  return (
    <>
      
    </>
  );
}
export default Test;