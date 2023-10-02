import React from 'react'
import Table from '../components/Table'
import Form from '../components/Form'

const Home = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div style={{backgroundColor:"grey"}}>
                        <div className="text-white text-center">MERN CURD APP</div>
                    </div>
                </div>
                <div className="col-md-6 mt-5"><Form/></div>
                <div className="col-md-6 mt-5"><Table/></div>
            </div>
        </div>
    </>
  )
}

export default Home