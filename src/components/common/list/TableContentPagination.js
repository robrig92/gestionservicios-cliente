import React, {Component} from 'react'
import { Table, Button } from 'semantic-ui-react'
import TablePagination from './TablePagination';
import CustomModal from '../modal/CustomModal';

class TableContentPagination extends Component{
  
  constructor(props){
    super(props);
  }

  //static propTypes = {
    //headers: PropTypes.array.isRequired,
    //items: PropTypes.array.isRequired,
    //actions: PropTypes.array.isRequired
  //}

  render(){
    const { headers, contentPaginator, actions } = this.props;
    return(
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            {headers && headers.map((item, key) => <Table.HeaderCell key={key}>{item.header}</Table.HeaderCell> )}
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { contentPaginator && contentPaginator.data.map( (object, key) => { return <Table.Row key={key}>
                                                    { headers && headers.map( (field, key2) => { 
                                                                                                  return <Table.Cell key={key2}>{ String( object[field.path] ) }</Table.Cell> 
                                                                                              } 
                                                                            )
                                                    }
                                                    <Table.Cell ><div>
                                                                    { actions && actions.map( (action, key3) => { 
                                                                                                  return <CustomModal key={key3} hashId={object.hashId} type={action.type}/> 
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
              <TablePagination handleInitializeData={this.props.handleInitializeData} currentPage={contentPaginator?contentPaginator.current_page: -1} totalPages={contentPaginator?contentPaginator.last_page: -1}/>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

    );

  }
  
}

export default TableContentPagination