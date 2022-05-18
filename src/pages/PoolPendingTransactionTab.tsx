import { useContext, useEffect, useState } from "react"
import { Button, Container, CardGroup } from "react-bootstrap"
import { BlockchainContext } from "../App"
import { TransactionInterface } from "../classes"
import Transaction from "../components/Transaction"

const PoolPendingTransactionTab = () => {
    const {blockchain} = useContext(BlockchainContext)
    const [transactionPool, setTransactionPool] = useState<{"transaction's pool":TransactionInterface[]}>({'transaction\'s pool':[]})

    const reload = () => {
        
        fetch(blockchain?.address + '/diagnostic/transaction_pool', {
            method: 'GET'
        }).then(res => res.json()).then(json => {
            setTransactionPool(json)}).catch(e => console.log(e.message))
    }

    return (
        <>
            <div className='text-center'>
            <Button variant="danger" onClick={reload}>Refresh Transaction Pool List</Button>
            </div>
            <CardGroup>
                {
                    (transactionPool["transaction's pool"] as TransactionInterface[]).map((t,index) => {
                        return <Transaction transaction={t} key={index}/>
                    })
                }
            </CardGroup>
        </>
    )
}

export default PoolPendingTransactionTab