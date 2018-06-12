import React, {Component} from 'react'
import { Icon, Menu, Table, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import TablePagination from './TablePagination';

class TableContentPagination extends Component{
  
  constructor(props){
    super(props);
  }

  static propTypes = {
    headers: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    actions: PropTypes.array.isRequired
  }

  render(){
    const { headers, items, actions } = this.props;
    //console.log(headers);
    //console.log(items);
    //console.log(actions);
    return(
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            {headers && headers.map((item, key) => <Table.HeaderCell key={key}>{item.header}</Table.HeaderCell> )}
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { items && items.map( (object, key) => { return <Table.Row key={key}>
                                                    { headers && headers.map( (field, key2) => { 
                                                                                                  return <Table.Cell key={key2}>{ object[field.path] }</Table.Cell> 
                                                                                              } 
                                                                            )
                                                    }
                                                    <Table.Cell ><div>
                                                                    { actions && actions.map( (action, key3) => { 
                                                                                                  return <Button compact href={action.url + object.id} key={key3}>{ action.action }</Button> 
                                                                                              } 
                                                                            )
                                                                     }
                                                                </div>
                                                    </Table.Cell> 
                                                  </Table.Row>
                                              } 
                              )
          }
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan={ headers.length + 1 }>
              <TablePagination currentPage={5} totalPages={20}/>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

    );

  }
  
}

export default TableContentPagination