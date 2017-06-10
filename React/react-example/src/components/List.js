import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectData: [
                {grade: "A"},
                {grade: "B"},
                {grade: "C"},
                {grade: "D"},
                {grade: "E"}
            ]
        }
    }

    render(){
        return(
            <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>D</td>
                <td>E</td>
            </tr>
        );
    }
}

export default List;