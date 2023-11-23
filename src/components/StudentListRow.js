import Axios from "axios";
import {Link} from "react-router-dom"

function StudentListRow(props)
{
    const {_id,name,email,rollNo,day} = props.obj; //Object destruction
   
    const handleClick = () =>{
        Axios.delete("https://student-database-xbhx.onrender.com/studentRoute/delete-student/" + _id )
        .then((res)=>{
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    };
   
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td>{day}</td>
            <td className="align-center p-1 m-0 d-flex justify-content-center align-items-center">
           
                    <Link class="text-decoration-none text-light" to={"/edit-student/" + _id}> 
                    <button class="btn btn-success me-2">Edit </button>
                    </Link>
               

            
            <button onClick={handleClick} className="btn btn-danger">
                Delete
            </button>
        </td>
        </tr>
    )
}
export default StudentListRow;
