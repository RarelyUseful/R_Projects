import React from 'react';
import logo from '../.././logo.svg';
// import styles from './LeftColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss'

class LeftColumn extends React.Component {
    static defaultProps = {
        text: 'Missing text from props'
    }

    constructor(props) {
        super(props);
        this.state = {
            counter: 100
        };
    }

    render() {
        const { timerValue, text } = this.props;
        const { counter } = this.state;
        return (
            <div className={commonColumnsStyles.App}>
                <header className={commonColumnsStyles.AppHeader}>
                    <img src={timerValue % 2 !== 0 && logo} className={commonColumnsStyles.AppLogo} alt="" />
                    <p> {`${text} count from ${counter} only even numbers`} </p>
                    <p> {counter + (timerValue % 2 === 0 ? timerValue : timerValue -1 )} </p>
                </header>
            </div>
        );
    }
}

export default LeftColumn;