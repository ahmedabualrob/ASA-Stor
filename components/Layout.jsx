import { CssBaseline,ThemeProvider } from '@mui/material'
import { AppBar,  Toolbar,Link, Typography,Box, Container } from '@mui/material'
import { createTheme} from "@mui/material/styles"
import Head from 'next/head'
import NextLink from 'next/link'
import classes from '../utils/classes'
export default function Layout({title,description,children}){
  const theme = createTheme({
    components:{
        MuiLink:{
            defaultProps :{
                underline:'hover'
            }
        }
        },
    typography: {
        h1:{
            frontSize:"1.6rem",
            fontWeight:400,
            margin:"1rem 0"

        },
        h2:{
            frontSize:"1.4rem",
            fontWeight:400,
            margin:"1rem 0"

        },

    },
    palette:{
        mode:'light',
        primary:{
            main:'#f0c000'
        },
        secondary:{
            main:'#208080'
        }
    }
    
  })

    return (
    <>
    <Head>
    <title>{title?`${title}-ASA Store`:"ASA-STORE"}</title>
    {description &&<meta name='description' content={description}></meta>}
    </Head>
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar position='static' sx={classes.appbar}>
            <Toolbar>
                <NextLink href='/' passHref>
                    <Link>

            <Typography sx={classes.brand}> ASA-STORE  </Typography>
                    </Link>

                </NextLink>
            </Toolbar>
            
        </AppBar>
        <Container container="main" sx={classes.main}>
            {children}

        </Container>
        <Box component='footer' sx={classes.footer}>
            <Typography>ALL Things done @2022</Typography>
        </Box>

    </ThemeProvider>
    </>
  )
}
