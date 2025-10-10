import AsyncStorage from '@react-native-async-storage/async-storage';
 const KEY = "todos_v1"

export async function loadTodosV1(){
  // 1) lire la clé 'todos_v1'
  // 2) JSON.parse si non null, sinon retourner { todos: [] }
  try{
  //  const keyStorage = "@user"+key.toString()
  
    const jsonTodos = await AsyncStorage.getItem(KEY);
    const parsed = JSON.parse(jsonTodos);
    console.log("[loadTodosV1] parsed:",parsed)
    // return parsed && Array.isArray(parsed.todos) ? parsed : {todos:[]} // on peu l'ecrire aussi de cette façon
    if(!parsed || ! Array.isArray(parsed.user))return {user:[]}
    return parsed
    }catch(e){
    console.warn("erreur dans loadTodosV1",e)
    return false
  }  
}

export async function saveTodosV1(next) {
  // 1) vérifier que next a la forme next = { todos: [...] } c'est a dire next.todos est []
  // 2) JSON.stringify et setItem('todos_v1', ...)

  try{
    const verfiNext  = typeof next === "object" && next.todos && Array.isArray(next.todos)
   // const nexte = Array.isArray(next) ? next :[]
   console.log("[saveTodosV1] next:",next)
   if (!verfiNext) {
  console.warn("[saveTodosV1] Structure invalide:", next);
  return false;
  }
   await AsyncStorage.setItem(KEY,JSON.stringify(next))
   return true
  }catch(e){
    console.warn("erreur dans saveTodosV1() todo",e)
    return false
  }  
}

// sauvegarde
export async function saveUserTodos (user,newTodo){
  
  try {
    const loadedTodosObject = await loadTodosV1();
    //const loadedTodos = loadedTodosObject.todos

    const updateLoadedTodos = Array.isArray(loadedTodosObject.todos)?[...loadedTodosObject.todos,newTodo]:[];
   const updateLoadedTodosObject = {todos:updateLoadedTodos} 
   await saveTodosV1(updateLoadedTodosObject);
    return true
  }catch(e){
    console.warn("erreur dans saveUserTodos()",e)
    return false
  }
  }
  export const clearStorage = async () => {
  try {
    await AsyncStorage.removeItem('todos_v1');
    console.log('✅ Données supprimées !');
  } catch (e) {
    console.warn('Erreur lors de la suppression', e);
  }
};
