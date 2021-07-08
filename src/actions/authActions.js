import openRealm from "../database/OpenRealm"
import { ObjectId } from "bson";

export function getActions(app, dispatch) {
    return {
      signIn: async data => {
        const {email, password} = data;
        const credentials = Realm.Credentials.emailPassword(email, password);
  
        try {
          const user = await app.logIn(credentials);
  
          dispatch({type: 'SIGN_IN', userId: user.id});
          console.log('successfully logged in ', user.id);
        } catch (error) {
          console.log(
            "l'authentification a échouée avec l'erreur : ",
            error.message,
          );
        }
      },
  
      signOut: async () => {
        await app.currentUser.logOut();
        dispatch({type: 'SIGN_OUT'});
      },
  
      signUp: async data => {
        const {email, password} = data;
        try {
          await app.emailPasswordAuth.registerUser(email, password);
  
          const credentials = Realm.Credentials.emailPassword(email, password);
  
          const user = await app.logIn(credentials);

          const realm = await openRealm()
          var inscrit = ""
          realm.write(() => {
            inscrit = realm.create("User", 
              {
                _id : new ObjectId(user.id),
                _partition: user.id,
                name: email,
              }, 'modified'
            ) 
            console.log(inscrit)
          })
          realm.close()


          dispatch({type: 'SIGN_IN', userId: user.id});
        } catch (error) {
          console.log(
            "l'authentification a échouée avec l'erreur : ",
            error.message,
          );
        }
      },
    };
  }
  