import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex );

export default new Vuex.Store({

  state: {
    loaded: false,
    token: {},
    userInfo: {
      userDetails: {},
      directoryData: {}
    }
  },

  actions: {
    
    loadUserData( context, oauthData ) {

      let path = '';
      path += '/' + oauthData.token;
      path += '/' + oauthData.edate; 
      path += '/' + oauthData.type;

      context.commit( 'setToken', oauthData );
      axios.get( '/userinfo' + path ).then( ( rsp ) => {
        context.commit( 'dataLoaded' ); 
        context.commit( 'setUserData', rsp.data );
      });
    } 
  },

  mutations: {

    dataLoaded( state ) {
      state.loaded = true;
    }, 

    // Can be:
    // setUserData( state, { userDetails directoryData } );
    setUserData( state, userInfo ) {
      state.userInfo = userInfo;
    },

    // Consider exploding token into it's parts
    // That *Might* be better, no se todavia.
    setToken( state, token ) {
      state.token = token;
    }
  },

  getters: {
   
    dataLoaded( state ) {
      return state.loaded;
    },
   
    getUserName( state ) {
      return state
      .userInfo
      .userDetails
      .name
      .givenName;
    },

    getAvailableApps( state ) {
      return state
      .userInfo
      .directoryData
      .customSchemas
      .Nissint_Web_Applications
      .NissintApps;
    }
  }
});

