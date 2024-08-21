

import {useParams} from 'react-router-dom';

const ProductPage = () => {
  const {id} = useParams();
  // console.log(id);
  return (
    <div>
      <h1> My Id is {id}</h1>
    </div>
  );
}

export default ProductPage;
