import Layout from '../components/Layout'
import { useEffect } from 'react'
import client from '../utils/client'
import { Alert, CircularProgress, Grid, Typography } from '@mui/material'
export default function Home() {
  const [state,setState]=React.useState({
    products:[],
    error:'',
    loading:true,
  })
  const { products, error ,loading} =state
  useEffect(()=>{
    const fetchData= async ()=>{
      try{
        const products = await client.fetch(`*{type == "product}`)
        setState({products,loading:false})

      }catch(error){
        setState({loading:false,error:error.message})

      }
    }
    fetchData();

  },[])

  return (
   <Layout>
    {loading?(<CircularProgress/>)
    :
    error? (<Alert variant='danger'>{error}</Alert>)
    :<Grid container spacing={3}>
      {products.map((product)=>{
        <Grid item md={4} key={product.slug}>
          <Typography>
            {product.name}
            
          </Typography>
        </Grid>
      })}


    </Grid>
    }
   </Layout>
  )
}
