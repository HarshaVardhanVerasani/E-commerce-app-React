import { useSelector} from "react-redux";


const LandingPage = () => {
const store = useSelector((store) => store.e_commerce.productsList);

    
    return (
      <>

        <h1>This is landing page</h1>
      </>
    );
}
 
export default LandingPage;