import React, { useCallback, useMemo } from 'react';
import { useRouter  } from 'next/router'
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '66px 60px 58px 60px',
  borderWidth: 2,
  borderRadius: 15,
  
  backgroundColor: '#fafafa',
  color: '#f5a3b4',
  transition: 'border .3s ease-in-out',
  fontSize: '1.5rem'
};

const floatLine ={
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    borderRadius: '30px',
    padding: '19px'
}

const activeStyle = {
  transition: "all .2s ease-in-out",
  transform: "scale(1)"

};

const acceptStyle = {
  transition: "all .2s ease-in-out",
  transform: "scale(1.1)"
  
};

const rejectStyle = {
  animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
  transform: "translate3d(0, 0, 0)"
};

function DropzoneComponent(props) {
    const router = useRouter()

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
            // const binaryStr = reader.result;
            // console.log(reader.result)
            window.localStorage.setItem("csvdata", reader.result);
            router.push('/portfolio')
          }
          reader.readAsText(file)
        })
        
      }, [router])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'text/csv'
  });

  const hoverstyle = useMemo(() => ({
    ...activeStyle,
    // ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    // isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const style = useMemo(() => ({
    ...baseStyle,
  }), [
    ]);

  
  return (
    <div className="contaStyle">
        <div className='floatline' style={hoverstyle}>
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <div>Drag and drop your report here.</div>
                {/* <svg><use xlinkHref='/all.svg#gg-file-add' /></svg> */}
                <i className='gg-file-add'></i>
                {/* <gg-icon class="gg-file-add"></gg-icon> */}
            </div>
        </div>
    </div>
  )
}

export default DropzoneComponent;