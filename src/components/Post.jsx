import {Navigate, useParams , useNavigate , Routes , Route} from 'react-router-dom'

function Post() {
    const status = 200

    const params = useParams();
    const navigate = useNavigate()

    const onClick=()=>{
        console.log("hello")
        navigate('/about')
    }

    if(status === 404){
        return <Navigate to='/notFound'/>
    }

  return (
    <div>
        <h1>{params.name}</h1>
        {/* <p>Post Id : {params.id}</p> */}
        <h1>Posts</h1>
        <button onClick={onClick}>Click</button>
        <Routes>
            <Route path='/show' element={<h1>Hello World</h1>}/>
        </Routes>
    </div>
  )
}

export default Post