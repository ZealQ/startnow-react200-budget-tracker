export function updateIncomeDescription(description) {
  return {
    type: 'UPDATE_INCOME_DESCRIPTION',
    payload: { description }
  };
}

export function updateIncomeAmount(amount) {
  return {
    type: 'UPDATE_INCOME_AMOUNT',
    payload: { amount }
  };
}

export function addIncome(description, amount) {
  return {
    type: 'ADD_INCOME',
    payload: {
      description,
      amount: parseFloat(amount)
    }
  };
}

export function deleteIncome(index){
  return{
    type: "DELETE_INCOME",
    payload: {index}
  }
}

export function editIncome(index){
  return {
      type: "EDIT_INCOME",
      payload: { index }
  }
}

export function save(index, description, amount){
  return {
      type: "SAVE", 
      payload: { 
          index,
          description,
          amount: parseFloat(amount)
      }
  }
}

export function editC(index, id, value){
  return {
      type: "EDIT_C",
      payload: {
          index,
          id,
          value
      }
  }
}