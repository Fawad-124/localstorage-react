import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


// export default function CategoryDropdown(props){
//     let { title, data_array }= props 
// }
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.props = props

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
    
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }


  render() {
    return (
      <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.props.title}
          
        </DropdownToggle>
        <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
{/*         
        {this.props.data_array.map((ele)=>{
            <DropdownMenu>
            {console.log(ele, "data")}
            <DropdownItem>Element</DropdownItem>
            </DropdownMenu>
        })} */}
          
          
        
      </Dropdown>
    );
  }
}