

import {Link} from 'react-router-dom';

const AboutPage = () => {
  
  const arrayofobject = [{id: 1, name: "product-one"}, 
    {id:2, name: "product-two"},
  
    {id:3, name: "product-three"},
    {id:4, name: "product-four"},
    {id:5, name: "product-five"},
    {id:6, name: "product-six"},
    {id:7, name: "product-seveen"},
  
    {id:8, name: "product-eight"},
  ]
  return (
<div id='productwrapper'>

{arrayofobject.map(((product) => {
  return(<Link to={`/ProductPage/${product.id}`} key={product.id}>
    <div className='productbox'>
      <h1></h1>
      <label htmlFor="">{product.name}</label>
    </div>
  </Link>)
}))}
</div>
  );
}

export default AboutPage;











