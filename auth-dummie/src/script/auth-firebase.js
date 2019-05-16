import { auth } from '@/firebase'

async function auth_dummie(userName, passWord) {
    try {
        console.log('Estamos validando tu información...')
        await auth.signInWithEmailAndPassword(userName, passWord)
        console.log('Autenticacion Exitosa')
      }
      catch (error) {        
        switch (error.code) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            console.log('Usuario no válido. Revisa tu correo y contraseña.')
            break
          default:
            console.log('Ocurrió un error validando la información.')
            break
        }
    }
}

export {
  auth_dummie
}