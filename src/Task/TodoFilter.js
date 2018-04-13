import React, { Component } from 'react';
import {RaisedButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class TodoFilter extends Component {
    render() {
        const { onFilter } = this.props;
        const links = ['All', 'Completed', 'Pending'];
        return (
            <MuiThemeProvider>
                <div className="todo-filter">
                    {
                        links.map((link, i) => (
                            <RaisedButton 
                                // key={i} 
                                style={{ margin: '5px'}} 
                                onClick={() => onFilter(link)}>
                                {link}
                            </RaisedButton>
                        ))
                    }
                </div>
                <br/>
            </MuiThemeProvider>
        );
    }
}

export default TodoFilter;