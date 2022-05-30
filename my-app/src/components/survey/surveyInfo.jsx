import classes from './surveyInfo.module.css'
const SurveyInfo = () => {
    const headers=["Survey Agent","District","Total Farmers","Total Farms","Submitted Acres_In_Acres","Calculated Area"]
    const surveyInfo = [
        {
            surveyAgent: "gurudaspur",
            district: "GURDASPUR",
            totalFarmers: 8,
            totalFarms: 8,
            submittedAreaInAcres: 59,
            calculatedArea:46.58
            
        },
           {
            surveyAgent: "gurudaspur",
            district: "GURDASPUR",
            totalFarmers: 8,
            totalFarms: 8,
            submittedAreaInAcres: 59,
            calculatedArea:46.58
            
        },
              {
            surveyAgent: "gurudaspur",
            district: "GURDASPUR",
            totalFarmers: 8,
            totalFarms: 8,
            submittedAreaInAcres: 59,
            calculatedArea:46.58
            
        },
                 {
            surveyAgent: "gurudaspur",
            district: "GURDASPUR",
            totalFarmers: 8,
            totalFarms: 8,
            submittedAreaInAcres: 59,
            calculatedArea:46.58
            
        },
         {
            surveyAgent: "gurudaspur",
            district: "GURDASPUR",
            totalFarmers: 8,
            totalFarms: 8,
            submittedAreaInAcres: 59,
            calculatedArea:46.58
            
        },
    ]
    return (
        <div style={{marginTop:"100px"}}>

       
        <table>
            <tr>
                {
                    headers.map(e => <th>{ e}</th>)
                }
            </tr>
            {
                surveyInfo.map(e => {
                    return (
                        <tr>
                            <td>{e.surveyAgent}</td>
                            <td>{e.district}</td>
                            <td>{e.totalFarmers}</td>
                            <td>{e.totalFarms}</td>
                            <td>{e.submittedAreaInAcres}</td>
                            <td>{e.calculatedArea}</td>
                        </tr>
                    )
                })
            }
            </table>
             </div>
    )
}
export default SurveyInfo;