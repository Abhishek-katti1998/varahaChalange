import classes from '../survey/surveyInfo.module.css'
const FarmerInfo = () => {
    const headers=["Farmer_id","First_Name","Last_Name","Village","District","State","Pincode","Bank_AccountNumber","Banck_ifscCode","UPI_ID"]
    const farmerInfo = [
        {   id:1246,
            name: "Pargat",
            last_Name: "Singh",
            Village: "Badaghuda",
            district: "SIRSA",
            state: "Haryana",
            pinCode: 125078,
            bankAccountNumber: null,
            bankIfscCode: null,
            upiId:null
            
        },
           {   id:1246,
            name: "Pargat",
            last_Name: "Singh",
            Village: "Badaghuda",
            district: "SIRSA",
            state: "Haryana",
            pinCode: 125078,
            bankAccountNumber: null,
            bankIfscCode: null,
            upiId:null
            
        }
          
    ]
    return  (
        <table>
            <tr>
                {
                    headers.map(e => <th>{ e.length>6?e+'...':e}</th>)
                }
            </tr>
            {
                farmerInfo.map(e => {
                    return (
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.last_Name}</td>
                            <td>{e.Village}</td>
                            <td>{e.district}</td>
                            <td>{e.state}</td>
                            <td>{e.pinCode}</td>
                            <td>{e.bankAccountNumber}</td>
                            <td>{e.bankIfscCode}</td>
                            <td>{e.upiId}</td>
                        </tr>
                    )
                })
            }
</table>
    )
}
export default FarmerInfo;