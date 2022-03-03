import React from 'react';
import logo from '../.././logo.svg';
// import styles from './LeftColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss'



class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleIncreaseCounter = () => {
    this.setState({
      counter: this.state.counter+1,
    });
  }
  handleDecreaseCounter = (event) => {
    event.preventDefault();
    this.setState({
      counter: this.state.counter-1,
    });
  }
  componentDidMount(){
    console.log(this.componentDidMount);
  }
  componentWillUnmount(){
    console.log(this.componentWillUnmount);
  }
  componentDidUpdate(){
    console.log(this.componentDidUpdate);
  }

    render() {
      const { counter } = this.state;
      const { timerValue } = this.props;
      const columnShouldBeHidden = (timerValue > 500);
      if (columnShouldBeHidden) {
        return null;
      }
      return (
          <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>
              <button 
              onClick={this.handleIncreaseCounter} 
              onContextMenu={(event) => this.handleDecreaseCounter(event)}>
                Left click +1, Right click -1 </button>
                <p>{ counter }</p>
              <img src={logo} className={commonColumnsStyles.AppLogo} alt="logo" />
              <p>Left column</p>
              
            </header>
          </div>
        );
    }
  }

  export default LeftColumn;