import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export default function DropDown() {
    const options = [
 'taman', 'sirsa', 'hosipur',"karnal", 'taman', 'sirsa', 'hosipur',"karnal"
    ];
    const defaultOption = options[2];
    return (
        <Dropdown options={options} onChange={()=>{}} value={defaultOption} placeholder="Survey name"/>
    )
}