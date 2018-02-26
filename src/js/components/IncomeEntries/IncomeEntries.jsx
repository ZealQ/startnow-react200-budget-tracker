import React from 'react';

import {
  updateIncomeDescription,
  updateIncomeAmount,
  addIncome,
  deleteIncome,
  editIncome,
  Save,
  editC
} from './incomeActions';

export default class IncomeEntries extends React.Component {
  constructor(props) {
    super(props);

    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleAmountInput = this.handleAmountInput.bind(this);
    this.handleAddIncome = this.handleAddIncome.bind(this);
    this.handleDeleteIncome = this.handleDeleteIncome.bind(this);
    this.handleEditIncome = this.handleEditIncome.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEditC = this.handleEditC.bind(this);
  }

  handleDescriptionInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateIncomeDescription(value));
  }

  handleAmountInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateIncomeAmount(value));
  }

  handleAddIncome() {
    const { description, amount, dispatch } = this.props;
    dispatch(addIncome(description, amount));
  }

  handleDeleteIncome(e) {
    const { dispatch } = this.props;
    const index = e.target.dataset.index;
    dispatch(deleteIncome(index));
  }

  handleEditIncome(e) {
    var { dispatch } = this.props;
    var index = e.target.dataset.index;
    dispatch(Save(index));
  }

  handleEditC(e) {
    var { dispatch } = this.props;
    var { id, value } = e.target;
    var index = e.target.dataset.index;
    dispatch(editC(index, id, value));
  }

  handleSave(e) {
    const { dispatch } = this.props;
    const index = e.target.dataset.index;
    dispatch(Save(index));
}

  render() {

    const { description, amount, lineItems } = this.props;
    return (
      <div className='card border-danger mb-3'>
        <div className='card-header text-white bg-danger'>Income Entries</div>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label htmlFor='income-description'>Description</label>
              <input
                type='text'
                className='form-control'
                id='income-description'
                onChange={this.handleDescriptionInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='income-amount'>Amount</label>
              <div className='input-group'>
                <span className='input-group-addon'>$</span>
                <input
                  type='text'
                  className='form-control'
                  id='income-amount'
                  onChange={this.handleAmountInput}
                />
              </div>
            </div>
            <button
              type='button'
              className='btn btn-danger col-12 mb-5'
              onClick={this.handleAddIncome}
            >+ Add Income
            </button>
            <table className='table table-sm table-hover'>
              <thead>
                <tr>
                  <th>Description</th>
                  <th style={{ width: 120 }} >Amount</th>
                </tr>
              </thead>
              <tbody>

                {lineItems.map((lineItem, index) => (
                  !lineItem.editable ?
                    <tr key={index}>
                      <td>{lineItem.description}</td>
                      <td>${lineItem.amount.toFixed(2)}</td>
                      <td><div id="flex">
                        <button type="button" data-index={index} onClick={this.handleEditIncome}>Edit</button>
                        <button type="button" data-index={index} onClick={this.handleDeleteIncome}>Delete</button>
                      </div></td>
                      </tr>:
                      <tr  key = {index} >
                    <td>
                          <div className="form-group">
                            <label htmlFor="income-description">Description</label>
                            <input
                              data-index={index}
                              type="text"
                              className="form-control"
                              id={'description'}
                              defaultValue={lineItem.description}
                              onChange={this.handleEditC}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="income-amount">Amount</label>
                            <div className="input-group">
                              <span className="input-group-addon">$</span>
                              <input
                                data-index={index}
                                type="text"
                                className="form-control"
                                id={'amount'}
                                defaultValue={`$${lineItem.amount.toFixed(2)}`}
                                onChange={this.handleEditC}
                              />
                            </div>
                          </div>
                        </td>
                        <td id="td-save"><button type="button" id="btn-save" data-index={index} onClick={this.handleSave}>Save</button></td>
                      </tr>
                      ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    )
  }
}
