import React, { useEffect,useReducer,useState} from 'react';
import { Typography,Spin ,Empty} from 'antd';
const { Title } = Typography;
import CartCard from './cartCards';
import './cart.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialState = {
  data: [],
  loading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "fetching":
      return { loading: false, error: "", data: action.payload };
    case "loading":
      return { loading: true, error: "", data: [] };
    case "error":
      return { loading: false, error: action.payload, data: [] };
    default:
      throw new Error();
  }
}
function MainCart() {
   const [data, setData] = useState([]);
   const [state, dispatch] = useReducer(reducer, initialState);
   const history = useHistory();
  useEffect(() => {
    const controller = new AbortController();
    const getProducts=()=>{
      dispatch({ type: "loading" })
     return axios
      .get('/cart')
      .then()
      .catch((err) => {
        if (err.response.status == 401) {
          history.push('/login');
        }
      });
    }
    getProducts().then((res) => dispatch({ type: "fetching", payload: res.data }))
    .catch((error)=> dispatch({ type: "error", payload: error}))
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="main-cart">
      <Title level={4}>Shopping Cart</Title>
      <div className="cards">
      {
        state.loading? <div className='loading'>   <Spin size="large"/> </div>: 
     (state.data.length>0?
     state.data.map((ele,index)=> <CartCard product={ele} key={index}/> )
     :<Empty />)
   }
  
      </div>
    </div>
  );
}

export default MainCart;
