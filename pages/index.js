import { useEffect, useState, React } from 'react'
import Head from "next/head";
import { useRouter  } from 'next/router'
import Image from 'next/image'
import logoPNG from '../public/logo.svg'
import DropzoneComponent from '../components/drop';
import Footer from '../components/footer';

export default function HomePage() {
  const router = useRouter()
  const [loaded,setLoaded] = useState(false)

  // function handleFileUpload(e) {
  //   e.preventDefault();
  //   const FILE_KEY = "csvdata";
  //   let files = e.target.files[0];
  //   files.text().then(text => {
  //     window.localStorage.setItem(FILE_KEY, text);
  //     // console.log(JSON.parse(localStorage.getItem(FILE_KEY)));
  //     router.push("/portfolio");
  //   });
    

  // }

  
    useEffect(() => {
        if(localStorage.getItem("csvdata") != null ){
            router.push('/portfolio')
        }else{
            setLoaded(true)
        }
      },[router]);

    if(!loaded){
        return <div></div>
    }
    return ( 
      <div>
        <div className="container">
          <div className="logo">
            <Image src={logoPNG} alt="logo" />
          </div>
          <div className="text">
            <h1>STACKED</h1>
          </div>
        </div>
        <div className="dropzonelabel">
          <div className="dropzonetext">
            <p>Get a better review and <br />
              rating of your sharesies<br />
              investment portfolio</p>
          </div>
        </div>
      {/* <input type='file' name='files[]' id='fileUpload' onChange={handleFileUpload}></input> */}
      <DropzoneComponent />
      <Footer />
      </div> 
    )
}
  
  

