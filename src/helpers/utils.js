export function countCompletionRate (arr) {
    const allTodos = arr.length
    const completedTodos = arr.filter((el)=>el.status === 'complete').length 
    return allTodos ? Math.round(completedTodos / allTodos  * 100) : 0
    
}
