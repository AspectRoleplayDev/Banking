import styles from './Sidebar.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { Accounts } from '../Accounts/Personal/Accounts'
import { BusinessAccounts } from '../Accounts/Business/BusinessAccounts'

export const Sidebar: React.FC<{
    accounts: any
    businessaccounts: any
    selectedAccount: any
    setDepositModalState: any
    setWithdrawModalState: any
    setTransferModalState: any
    CharacterData: any
    setCharacterData: any
}> = (props) => {
    return (
        <div
            className={styles.Sidebar}
        >
            {props.accounts.map((data, index) => {
                return (
                    <Accounts
                        accountId={data.accountId}
                        accountType={data.accountType}
                        accountName={data.name}
                        accountBalance={data.balance}
                        setDepositModal={props.setDepositModalState}
                        setWithdrawModal={props.setWithdrawModalState}
                        setTransferModal={props.setTransferModalState}
                        selectedAccount={props.selectedAccount}
                        CharacterData={props.CharacterData}
                        setCharacterData={props.setCharacterData}
                    />
                )
            })}
            
            {props.businessaccounts.map((data, index) => {
                return (
                    <BusinessAccounts
                        accountId={data.accountId}
                        accountType={data.accountType}
                        accountName={data.name}
                        accountBalance={data.balance}
                        setDepositModal={props.setDepositModalState}
                        setWithdrawModal={props.setWithdrawModalState}
                        setTransferModal={props.setTransferModalState}
                        selectedAccount={props.selectedAccount}
                        CharacterData={props.CharacterData}
                        setCharacterData={props.setCharacterData}
                    />
                )
            })}

        </div>
    )
}