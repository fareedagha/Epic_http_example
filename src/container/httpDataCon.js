import { connect } from 'react-redux';

import Actions from '../store/actions/actionTpye'

import UserData from '../components/httpData'


function mapStateToProps(state) {
    console.log('stateee',state)
    return {
        AllData: state.userReducer.userList,
        postData : state.userReducer.POSTLIST
     
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUserData : function (){
          return dispatch(Actions.getData())
        },
          postdata : function (obj){
              return dispatch(Actions.postData(obj));

          }
        
    };
}







const UserDataCon =  connect(mapStateToProps,mapDispatchToProps)(UserData);

export default UserDataCon;
