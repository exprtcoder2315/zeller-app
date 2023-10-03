import { gql } from '@apollo/client';

export const GET_CUSTOMERS = gql`
query listZellerCustomers($filter: TableZellerCustomerFilterInput){
    listZellerCustomers(filter: $filter){
      items{
        id
        email
        name
        role
      }
    }
  }
`;