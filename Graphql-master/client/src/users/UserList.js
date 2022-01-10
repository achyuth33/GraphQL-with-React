import React from "react";
import { useQuery, gql } from "@apollo/client";

import "./userList.css"

const GET_USESRS = gql`
  query {
    getUsers{
      name
      age
      college
    }
  	getPostsFromExtrenelAPI{
      id
      userId
      title
      body
    }
  
  }
`

function UserList(){
    const  {data, loading} = useQuery(GET_USESRS);
    

    console.log(data);
      if (loading) {
        return <p>Data is loading...</p>;
      }else{
          return <div className ="userlist">
              {/* <h2>hello</h2> */}
              {data.getPostsFromExtrenelAPI.map(user =>{
                return (
                  <li key={user.id} className="list-container">
                    <div>                                         
                      <h1 className="title"><span>{user.id}. </span>{user.title}</h1>
                      <p>{user.body}</p>  

                    </div>
                  </li>
                )
              })}
            </div>;
      }
}

export default UserList;